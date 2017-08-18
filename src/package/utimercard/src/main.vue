<template>
  <div class="rectcontainer" @click.stop="selectComponent"
       :class="[{ismouseover: !isProduct},{ubar: true},{isselected:Config.isSelected && !isProduct}]"
       :style="uStyle">
    <div :style="cardStyle[0]" style="float: left">
      {{uBizData[0]}}
    </div>
    <div :style="cardStyle[1]" style="float: left">
      {{uBizData[1]}}
    </div>
    <div style="clear: left"></div>
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
  import comp from '../../mixins/compTimeCard'

  export default {
    name: 'UTimeCard',
    mixins: [comp],
    diagrameType: ['utimecard','horiz'],
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
          if (oldVal.fontSize) {
            this.initConfig()
          }
        },
        deep: true
      },
      'Config.isSelected': {
        handler(curVal, oldVal){
          //如果为选中状态，则显示设置属性
          if (curVal) {
            let propertyArr = []
            let propertyObject = $.extend(true, {}, PropConfig.props)
            propertyObject.type = 'uTimeCard-timecardstyle'
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
        this.convertData()
      },
    }
  }
</script>
