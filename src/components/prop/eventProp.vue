<template>
  <div>
    <div v-if="eventConfig.activeStatus">
      <div class="plusbtn">
        <span @click="addEventItem" style="cursor: pointer"><i class="fa fa-plus-square" aria-hidden="true"></i>添加事件</span>
      </div>
      <div class="configitem" v-for="(item,index) in configItem">
        <ul>
          <li>事件类型</li>
          <li>
            <el-select size="small" v-model="item.eventType" placeholder="请选择">
              <el-option
                v-for="item in eventType"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
        </ul>
        <ul v-show="item.eventType === '周期'">
          <li>重复执行</li>
          <li>
            <el-switch
              v-model="item.isRepeat"
              on-text="开"
              off-text="关">
            </el-switch>
          </li>
        </ul>
        <ul v-show="item.eventType === '周期'">
          <li>间隔时长</li>
          <li>
            <el-input-number size="small" v-model="item.lifeTime"></el-input-number>
          </li>
          <li>秒</li>
        </ul>
        <ul>
          <li>动作</li>
          <li>
            <el-select size="small" v-model="item.actionType" placeholder="请选择">
              <el-option
                v-for="item in actionType"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
        </ul>
        <ul v-show="item.actionType === '移动'">
          <li>移动到距左</li>
          <li>
            <el-input-number size="small" v-model="item.toX"></el-input-number>
          </li>
        </ul>
        <ul v-show="item.actionType === '移动'">
          <li>移动到距上</li>
          <li>
            <el-input-number size="small" v-model="item.toY"></el-input-number>
          </li>
        </ul>
        <ul>
          <li>执行对象</li>
          <li>
            <el-input v-model="item.runnerObjId" size="small" placeholder="请输入对象ID">
            </el-input>
          </li>
          <li><i @click="delEventItem(item,index)" class="fa fa-window-close delbtn" aria-hidden="true"></i></li>
        </ul>
        <ul v-if="layoutsHash[item.runnerObjId]">
          <li>对象名称</li>
          <li>
          {{layoutsHash[item.runnerObjId].name}}
          </li>
        </ul>
      </div>
    </div>
    <div v-if="!eventConfig.activeStatus" class="noselect">当前没有控制图层被选中</div>
    <div v-if="configItem.length === 0 && eventConfig.activeStatus" class="noselect">当前还没有进行过任何配置</div>
  </div>
</template>
<style lang="scss" scoped>
  .noselect {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    color: #475669;
    text-align: center;
  }

  .plusbtn {
    color: #20A0FF;
    padding-left: 10px;
    padding-top: 10px;
    font-size: 12px;
    > span > i {
      transform: scale(1.2);
      margin-right: 5px;
    }
  }

  .configitem {
    border-bottom: 1px solid #EFF2F7;
    > ul {
      display: block;
      margin: 0;
      padding-left: 10px;
      height: 40px;
      background-color: transparent;
    }
    > ul > li {
      float: left;
      list-style: none;
      margin: 0;
      height: 40px;
      font-size: 12px;
      line-height: 40px;
    }
    > ul > li:nth-child(1) {
      width: 70px;
    }
    > ul > li:nth-child(2) {
      width: 140px;
    }
  }

  .delbtn {
    color: #FF4949;
    transform: scale(1.2);
    margin-left: 5px;
    cursor: pointer;
  }
</style>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import * as types from '../../store/mutation-types'
  export default {
    data() {
      return {
        configItem: [],
        eventType: [
          {
            value: "单击",
            label: "单击"
          },
          {
            value: "周期",
            label: "周期"
          }
        ],
        actionType: [
          {
            value: "隐藏",
            label: "隐藏"
          },
          {
            value: "显示",
            label: "显示"
          },
          {
            value: "移动",
            label: "移动"
          }
        ],
        defaultEventObj: {
          eventType: "单击",
          actionType: "隐藏",
          runnerObjId: "",
          toX: 0,
          toY: 0,
          isRepeat: true,
          lifeTime: 10,
        },
        layoutsHash: {},
      }
    },
    created(){
      if (!this.eventConfig.value.hasOwnProperty('eventConfig')) {
        this.eventConfig.value['eventConfig'] = []
      }
      this.configItem = this.eventConfig.value['eventConfig']

      this.initLayoutsHash(this.definition)
    },
    methods: {

      /**
       * 添加事件
       */
      addEventItem() {
        let tempItem = $.extend(true, {}, this.defaultEventObj)
        this.configItem.push(tempItem)
      },

      /**
       * 删除事件
       * @param item
       * @param index
       */
      delEventItem(item,index){
        this.configItem.splice(index,1)
      },

      /**
       * 把画布中图层对象做成哈希，后续event可以直接通过id调用哈希对象:{id:***,layoutsobj:{}}
       */
      initLayoutsHash(def){
        this.layoutsHash = {}
        let count = def.layouts.length
        for (let i = 0; i < count; i++) {
          this.layoutsHash[def.layouts[i].id] = def.layouts[i]
        }
      },
    },
    computed: {
      ...mapGetters({
        eventConfig: 'eventConfig',
        componentSelectedStatus: 'componentSelectedStatus',
        definition: 'editorDefinition',
      }),
    }
  }
</script>
