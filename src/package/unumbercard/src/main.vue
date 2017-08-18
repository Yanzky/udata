<template>
  <div class="rectcontainer" @click.stop="selectComponent"
       :class="[{ismouseover: !isProduct},{ubar: true},{isselected:Config.isSelected && !isProduct}]"
       :style="uStyle">
    <div>
      <div :style="item.style" v-for="item in uBizData">
        <div class="rectcontainer" style="position: relative;width: 100%;height: 100%">{{item.value}}</div>
        <div :style="item.cornerStyle[0]" class="borderitem borderitem1"></div>
        <div :style="item.cornerStyle[1]" class="borderitem borderitem2"></div>
        <div :style="item.cornerStyle[2]" class="borderitem borderitem3"></div>
        <div :style="item.cornerStyle[3]" class="borderitem borderitem4"></div>
      </div>
    </div>
    <div v-show="Config.isMoving" class="umovetips">
      <div>top:{{Config.style.top}},left:{{Config.style.left}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../assets/styles/main";

  .ubar {
  }

  .umovetips {
    position: relative;
    > div {
      position: absolute;
      bottom: -20px;
      right: 0;
      font-size: 12px;
      color: #fff;
    }
  }
  .borderitem{
    position: absolute;
  }
  .borderitem1{
    left: 0;
    top: 0;
  }
  .borderitem2{
    right: 0;
    top: 0;
  }
  .borderitem3{
    right: 0;
    bottom: 0;
  }
  .borderitem4{
    bottom: 0;
    left: 0;
  }
</style>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import * as types from '../../../store/mutation-types'
  import PropConfig from '../../../components/js/PropConfig'
  import comp from '../../mixins/compNumberCard'

  export default {
    name: 'UNumberCard',
    mixins: [comp],
    diagrameType: ['numbercard','horiz'],
    data() {
      return {
      }
    },
    watch: {
      'Config': {
        handler(curVal, oldVal){
        },
        deep: true
      },
      'componentConfig': {
        handler(curVal, oldVal){
          if (oldVal.width) {
            this.getComponentDataByChange()
          }
        },
        deep: true
      },
      'Config.datasource': {
        handler(curVal, oldVal){
          this.getComponentDataByChange()

        },
        deep: true
      },
      'Config.isSelected': {
        handler(curVal, oldVal){
          //如果为选中状态，则显示设置属性
          if (curVal) {
            let propertyArr = []
            let propertyObject = $.extend(true, {}, PropConfig.props)
            propertyObject.type = 'uNumberCard-numbercardstyle'
            propertyObject.title = '图显示设置'
            propertyObject.props = this.componentConfig
            propertyArr.push(propertyObject)
            this.addPublicPropConfig(propertyArr)
          }
        },
        deep: true
      },
    },
    created() {
      this.initConfig()
    },

    mounted(){
    },

    computed: {
      ...mapGetters({
        definition: 'editorDefinition',
        publicPropConfig: 'propConfig'
      }),
    },
    methods: {
      ...mapMutations({
        setComponentStatus: [types.SET_COMPONENTSELECTED],
        setPublicPropConfig: [types.SET_PROPCONFIG],
        clearPublicPropConfig: [types.CLEAR_PROPCONFIG],
        addPublicPropConfig: [types.ADD_PROPCONFIG]
      }),

      /**
       * 按照用户配置的颜色初始化地球
       * @param componentConfig
       */
      initConfig() {
        this.getComponentData()
      },
    }
  }
</script>
