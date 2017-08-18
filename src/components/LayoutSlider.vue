<template>
  <div class="lscontainer">
    <ul>
      <li v-show="isLeftSlider">
        <layout-manage @onSelectBackgroundLayout="onSelectBackgroundLayout"></layout-manage>
      </li>
      <li>
        <div class="tooglebutton" @click="toogleSlideBar">
          <i v-show="isLeftSlider" class="fa fa-angle-double-left" aria-hidden="true"></i>
          <i v-show="!isLeftSlider" class="fa fa-angle-double-right" aria-hidden="true"></i>
        </div>
      </li>
      <li>
        <div @click="onOpenComponentList" class="addcomponentbutton">
          <i class="el-icon-plus" aria-hidden="true"></i>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.lscontainer {
  height: 100%;
  ul {
    display: block;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  ul li{
    float: left;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 100%;
  }
  ul li:nth-child(1){
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
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    i {
      padding-left: 8px;
      padding-top: 5px;
      color: #333;
    }
  }
  .addcomponentbutton {
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    margin-left: 10px;
    margin-top: 18px;
    color: #666;
    cursor: pointer;
    i {
      transform: scale(1.2);
      margin-top: 8px;
      margin-left: 8px;
    }
  }
}
</style>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import * as types from '../store/mutation-types'
  import LayoutManage from './LayoutManage.vue'

  export default {
    data() {
      return {
      }
    },
    created() {

    },
    computed: {
      ...mapGetters({
        isLeftSlider: 'leftSlider'
      }),
    },
    methods: {
      ...mapMutations({
        setLeftSlider: [types.SET_LEFTSLIDER],
      }),

      //打开关闭左侧菜单
      toogleSlideBar() {
          this.setLeftSlider(!this.isLeftSlider)
      },

      //打开组件列表
      onOpenComponentList() {
          this.$emit("openComponentAction")
      },

      /**
       * 当选择背景图层时，通知LayoutSlide组件已经选择了画布
       * 告知画布属性可以进行设置
       */
      onSelectBackgroundLayout() {
        this.$emit('onSelectBackgroundLayout')
      }
    },
    components: {
      LayoutManage
    }
  }
</script>
