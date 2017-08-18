<template>
  <div style="height: 100%">
    <div class="lmtitle">
      <span style="padding-left: 5px;">图层管理</span>
    </div>
    <div>
      <el-tooltip class="item" effect="dark" content="置顶" placement="bottom-start">
        <div @click="setLayoutToTop" class="lmlayouttools">
          <img style="width: 20px;height: 20px;" src="/static/img/icon_layout_tooltop.png"/>
        </div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="置底" placement="bottom-start">
        <div @click="setLayoutToBottom" class="lmlayouttools">
          <img style="width: 20px;height: 20px;" src="/static/img/icon_layout_toolbottom.png"/>
        </div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="上移一层" placement="bottom-start">
        <div @click="setLayoutUp" class="lmlayouttools">
          <img style="width: 20px;height: 20px;" src="/static/img/icon_layout_toolnexttop.png"/>
        </div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="下移一层" placement="bottom-start">
        <div @click="setLayoutDown" class="lmlayouttools">
          <img style="width: 20px;height: 20px;" src="/static/img/icon_layout_toolnextdown.png"/>
        </div>
      </el-tooltip>
    </div>
    <div style="clear: both"></div>
    <div class="lmbg" @click="onSelectBackgroundLayout">
      页面背景层
      <img style="width: 30px;height: 15px;" src="/static/img/icon_comp_photo.png"/>
    </div>
    <div class="lmcomponentcellcontainer">
      <div v-for="item in layoutCopy">
        <div class="lmlistcell" @click="selectLayout(item)">
          <i @click.stop="openComponent(item)" v-show="!item.isComponentOpen" style="padding: 5px;"
             class="fa fa-angle-right"
             aria-hidden="true"></i>
          <i @click.stop="openComponent(item)" v-show="item.isComponentOpen" style="padding: 5px;"
             class="fa fa-angle-down"
             aria-hidden="true"></i>
          <span v-on:dblclick="openLayoutNameEdit(item)" v-if="!item.isEditLyoutName">{{item.name}}</span>
          <span @keyup.enter="closeLayoutNameEdit(item)" v-if="item.isEditLyoutName">
            <input v-model="item.name" style="display: inline-block;height: 41px;line-height: 41px;">
          </span>
          <img @click.stop="copyLayout(item)" v-show="item.isSelected" alt="复制图层"
               style="width: 30px;height: 15px;right:35px;position: absolute;top: 15px;"
               src="/static/img/icon_comp_layout.png"/>
          <i v-show="item.isSelected" style="position: absolute;right: 5px;top:15px;" class="fa fa-check-circle"
             aria-hidden="true"></i>
          <i v-show="item.isSubComponentSelected" style="position: absolute;right: 5px;top:15px;color: #20A0FF" class="fa fa-dot-circle-o"
             aria-hidden="true"></i>
          <span @click.stop="deleteLayout"><i v-show="item.isSelected" class="fa fa-trash" aria-hidden="true"
                                              style="padding: 5px;"></i></span>
        </div>
        <draggable v-model="item.components" class="dragArea" :options="{group:'component'}"
                   @start="onDragStart(item.components)" @end="onDragEnd()">
          <div v-show="item.isComponentOpen" class="lmcomponentcell" @click="selectComponent(item,subitem)"
               v-for="subitem in item.components">
            <span>组件-->{{subitem.name}}</span>
            <span><i class="fa fa-picture-o" aria-hidden="true"></i></span>
            <i v-show="subitem.isSelected" style="position: absolute;right: 30px;top:10px;" class="fa fa-check-circle"
               aria-hidden="true"></i>
            <span @click.stop="deleteComponent(item,subitem)"><i v-show="subitem.isSelected" class="fa fa-trash"
                                                                 aria-hidden="true"
                                                                 style="padding: 5px;"></i></span>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/styles/main";

  .lmtitle {
    width: 100%;
    height: 42px;
    background-color: #475669;
    color: #fff;
    font-size: 14px;
    line-height: 42px;
  }

  .lmbg {
    height: 43px;
    width: 100%;
    line-height: 43px;
    padding-left: 20px;
    font-size: 12px;
    cursor: pointer;
    border-bottom: 1px solid #dfe6ec;
  }

  .lmlayoutselected {
    background-color: #324057;
  }

  .lmlayouttools {
    width: 25%;
    height: 30px;
    float: left;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
  }

  .lmlistcell {
    height: 43px;
    line-height: 43px;
    border-bottom: 1px solid #dfe6ec;
    color: #48576a;
    font-size: 13px;
    padding-left: 20px;
    cursor: pointer;
    position: relative;
    > i:nth-child(1) {
      transform: scale(1.5);
    }
    > i:nth-child(2) {
      transform: scale(1.5);
    }
    span:nth-child(3) {
      padding-left: 10px;
    }
    span:nth-child(6) {
      color: red;
      position: absolute;
      right: 20px;
      top: 0;
    }
  }

  .lmcomponentcell {
    height: 31px;
    line-height: 31px;
    padding-left: 20px;
    background-color: #EFF2F7;
    font-size: 12px;
    border-bottom: 1px solid #fff;
    position: relative;
    cursor: pointer;
    span:nth-child(4) {
      color: red;
      position: absolute;
      right: 5px;
      top: 0;
    }
  }

  .lmcomponentcell:hover {
    background-color: #D3DCE6;
  }

  .lmcomponentcellcontainer {
    height: calc(100% - 103px);
    overflow: auto;
  }

  .dragArea {
    min-height: 2px;
  }
</style>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import * as types from '../store/mutation-types'
  import common from '../util/common'
  import draggable from 'vuedraggable'

  export default {
    data() {
      return {
        layoutCopy: [],
        currSelectedIndex: -1
      }
    },
    created() {

    },
    computed: {
      ...mapGetters({
        definition: 'editorDefinition'
      }),
    },
    watch: {
      'definition.layouts': {
        handler(curVal, oldVal){
          this.layoutCopy = []
          let count = curVal.length
          let selectCount = 0
          for (let i = (count - 1); i >= 0; i--) {
            this.layoutCopy.push(curVal[i])
            if (curVal[i].isSelected) {
              selectCount += 1
              this.currSelectedIndex = i
            }
            if (selectCount === 0) {
              this.currSelectedIndex = -1
            }
          }
        },
        deep: true
      }
    },
    components: {
      draggable
    },
    methods: {
      ...mapMutations({
        setComponentStatus: [types.SET_COMPONENTSELECTED],
        setComponentReloadData: [types.SET_RELOADDATA]
      }),
      /**
       * 选择图层
       * @param obj
       */
      selectLayout(obj) {
        obj.isSelected = true
        let layouts = this.layoutCopy
        let count = layouts.length
        for (let i = 0; i < count; i++) {
          layouts[i].isSubComponentSelected = false
          if (obj.id !== layouts[i].id) {
            layouts[i].isSelected = false
          }

          //deselect component
          let components = layouts[i].components
          let compcount = components.length
          for (let j = 0; j < compcount; j++) {
            components[j].isSelected = false
          }
        }
        let that = this
        this.setComponentStatus(false)
        setTimeout(function () {
          that.setComponentStatus(true)
        })
      },

      /**
       * 展开折叠组件文件夹
       */
      openComponent(obj) {
        obj.isComponentOpen = !obj.isComponentOpen
      },

      /**
       * 选择的图层置顶
       */
      setLayoutToTop() {
        if (this.currSelectedIndex >= 0) {
          common.bottomItem(this.definition.layouts, this.currSelectedIndex)
        }
        this.setLayoutChange()
      },

      /**
       * 选择的图层置底
       */
      setLayoutToBottom() {
        if (this.currSelectedIndex >= 0) {
          common.topItem(this.definition.layouts, this.currSelectedIndex)
        }
        this.setLayoutChange()
      },

      /**
       * 选择的图层上移一层
       */
      setLayoutUp() {
        if (this.currSelectedIndex >= 0) {
          common.downItem(this.definition.layouts, this.currSelectedIndex)
        }
        this.setLayoutChange()
      },

      /**
       * 选择的图层下移一层
       */
      setLayoutDown() {
        if (this.currSelectedIndex >= 0) {
          common.upItem(this.definition.layouts, this.currSelectedIndex)
        }
        this.setLayoutChange()
      },

      /**
       * 当上下移动时，只是layout的数组在改变，里面的components数组并不能被检测到改变，因此需要重绘组件的
       * 话就必须设置一个标志位，让Editor.vue使用
       */
      setLayoutChange() {
        let layouts = this.definition.layouts
        let count = layouts.length
        for (let i = 0; i < count; i++) {
          layouts[i].isChange = true
          setTimeout(function () {
            layouts[i].isChange = false
          })
        }
      },

      /**
       * 删除图层
       */
      deleteLayout(obj) {
        this.$confirm('此操作将删除该图层以及图层内的组件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.definition.layouts.splice(this.currSelectedIndex, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },

      copyLayout(item) {
        let layouts = this.definition.layouts
        let newItem = $.extend(true, {}, item)
        newItem.isSelected = false
        if (newItem.id.indexOf("copy") >= 0) {
          newItem.id = newItem.id.substr(0, newItem.id.indexOf("copy"))
        }
        newItem.id = newItem.id + "copy" + (new Date()).getTime()
        let count = newItem.components.length
        for (let i = 0; i < count; i++) {
          let compId = newItem.components[i].id
          if (compId.indexOf("copy") >= 0) {
            compId = compId.substr(0, compId.indexOf("copy"))
          }
          compId = compId + "copy" + (new Date()).getTime()
          newItem.components[i].id = compId
        }

        layouts.push(newItem)
      },

      /**
       * 选择组件
       * @param obj
       * @param compobj
       */
      selectComponent(obj, compobj){
        compobj.isSelected = false
        compobj.isSelected = true

        let layouts = this.definition.layouts
        let count = layouts.length

        //用于判断图层里是否有组件被选中
        let layoutid = obj.id
        for (let i = 0; i < count; i++) {
          layouts[i].isSelected = false
          layouts[i].isSubComponentSelected = false
          //给选中的组件外图层增加被选中标志
          if (layouts[i].id === layoutid){
            layouts[i].isSubComponentSelected = true
          }

          //deselect no selecte component
          let components = layouts[i].components
          let compcount = components.length
          for (let j = 0; j < compcount; j++) {
            if (components[j].id !== compobj.id) {
              components[j].isSelected = false
            }
          }
        }

        let that = this
        this.setComponentStatus(false)
        setTimeout(function () {
          that.setComponentStatus(true)
        })

      },

      /**
       * 删除组件
       * @param obj
       * @param compobj
       */
      deleteComponent(obj, compobj){
        let compid = compobj.id
        let components = obj.components
        let compcount = components.length
        let selectedCompIndex = -1
        for (let i = 0; i < compcount; i++) {
          if (components[i].id === compid) {
            selectedCompIndex = i
          }
        }
        if (selectedCompIndex !== -1) {
          this.$confirm('此操作将删除该组件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            components.splice(selectedCompIndex, 1)
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      },

      /***
       * 当左侧组件拖动结束的时候出发画布对象改变，重新渲染画布
       * update:原先是调用layoutChange函数，现在只是将移动的组件所在图层重新绘制，不再重新渲染画布
       */
      onDragEnd(){
          this.setComponentReloadData(true)
      },

      onDragStart(item) {
      },


      /**
       * 当选择背景图层时，通知LayoutSlide组件已经选择了画布
       * 告知画布属性可以进行设置
       */
      onSelectBackgroundLayout() {
        this.$emit('onSelectBackgroundLayout')
      },

      /***
       * 把图层置为编辑状态
       */
      openLayoutNameEdit(item) {
        item['isEditLyoutName'] = true
        let that = this
        this.setComponentStatus(false)
        setTimeout(function () {
          that.setComponentStatus(true)
        })
      },

      /***
       * 把图层置为非编辑状态
       */
      closeLayoutNameEdit(item) {
        item.isEditLyoutName = false
        let that = this
        this.setComponentStatus(false)
        setTimeout(function () {
          that.setComponentStatus(true)
        })
      }
    }

  }
</script>
