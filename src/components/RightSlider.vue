<template>
  <div class="rscontainer">
    <ul>
      <li v-show="isRightSlider">
        <div class="rstitle">
          <ul>
            <li @click="tabClick('first')" :class="{active:tabStatus.firstStatus}">样式</li>
            <li @click="tabClick('second')" :class="{active:tabStatus.secondStatus}">数据</li>
            <li @click="tabClick('third')" :class="{active:tabStatus.thirdStatus}">事件</li>
          </ul>
        </div>
        <div v-if="Config.length > 0" class="propcontainer">
          <layout-prop v-if="tabStatus.firstStatus && componentSelectedStatus"></layout-prop>
          <datasource-prop v-if="tabStatus.secondStatus && componentSelectedStatus"></datasource-prop>
          <event-prop v-if="tabStatus.thirdStatus && componentSelectedStatus"></event-prop>
        </div>
        <div v-if="Config.length <= 0" class="noselect">
          当前没有选中的组件或者图层
        </div>
      </li>
      <li>
        <div class="tooglebutton" @click="toogleSlideBar">
          <i v-show="!isRightSlider" class="fa fa-angle-double-left" aria-hidden="true"></i>
          <i v-show="isRightSlider" class="fa fa-angle-double-right" aria-hidden="true"></i>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  .rscontainer {
    height: 100%;
    > ul {
      display: block;
      margin: 0;
      padding: 0;
      height: 100%;
    }
    > ul > li {
      float: right;
      list-style: none;
      padding: 0;
      margin: 0;
      height: 100%;
    }
    > ul > li:nth-child(1) {
      width: 260px;
      background-color: #fff;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    }
    .tooglebutton {
      position: relative;
      top: 20px;
      left: 0;
      width: 25px;
      height: 25px;
      background-color: #fff;
      border-bottom-left-radius: 2px;
      border-top-left-radius: 2px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
      cursor: pointer;

      i {
        padding-left: 8px;
        padding-top: 5px;
        color: #333;
      }
    }
  }

  .rstitle {
    width: 100%;
    height: 42px;
    background-color: #475669;
    font-size: 12px;

    > ul {
      display: block;
      margin: 0;
      padding: 0;
      height: 100%;
      background-color: transparent;
    }
    > ul > li {
      float: left;
      list-style: none;
      margin: 0;
      height: 100%;
      width: 33%;
      font-size: 14px;
      text-align: center;
      color: #fff;
      padding-top: 10px;
      cursor: pointer;
    }
    .active {
      border-bottom: 3px solid #20A0FF;
    }
  }

  .propcontainer {
    height: calc(100% - 42px);
    overflow-y: auto;
  }

  .noselect {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    color: #475669;
    text-align: center;
  }
</style>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import * as types from '../store/mutation-types'
  import LayoutProp from './prop/LayoutProp.vue'
  import DatasourceProp from './prop/DatasourceProp.vue'
  import EventProp from './prop/eventProp.vue'

  export default {
    data() {
      return {
        tabStatus: {
          firstStatus: true,
          secondStatus: false,
          thirdStatus: false,
        },
        isLayoutChange: false
      }
    },
    created() {

    },
    props: ['Config'],
    computed: {
      ...mapGetters({
        isRightSlider: 'rightSlider',
        definition: 'editorDefinition',
        componentSelectedStatus: 'componentSelectedStatus'
      }),
    },
    watch: {
      'definition': {
        handler(curVal, oldVal){
        },
        deep: true
      },
    },
    methods: {
      ...mapMutations({
        setRightSlider: [types.SET_RIGHTSLIDER],
      }),

      /***
       * 打开关闭右侧边栏
       */
      toogleSlideBar() {
        this.setRightSlider(!this.isRightSlider)
      },

      tabClick(tag) {
        switch (tag) {
          case 'first':
            this.tabStatus.firstStatus = true
            this.tabStatus.secondStatus = false
            this.tabStatus.thirdStatus = false
            break
          case 'second':
            this.tabStatus.firstStatus = false
            this.tabStatus.secondStatus = true
            this.tabStatus.thirdStatus = false
            break
          case 'third':
            this.tabStatus.firstStatus = false
            this.tabStatus.secondStatus = false
            this.tabStatus.thirdStatus = true
            break
        }
      }
    },
    components: {
      LayoutProp,
      DatasourceProp,
      EventProp
    }
  }
</script>
