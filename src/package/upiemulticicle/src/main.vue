<template>
  <div @click.stop="selectComponent"
       :class="[{ismouseover: !isProduct},{ubar: true},{isselected:Config.isSelected && !isProduct}]"
       :style="uStyle">
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
</style>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import * as types from '../../../store/mutation-types'
  import PropConfig from '../../../components/js/PropConfig'
  import comp from '../../mixins/comPie'

  export default {
    name: 'UPieMultiCicle',
    mixins: [comp],
    diagrameType: ['multiciclepie','pie'],
    data() {
      return {
        serieTemp: {
          name: 'multiCicle',
          type: 'pie',
          center: ['50%', '50%'],
          clockWise: true,
          selectedMode: false,
          selectedOffset: 10,
          hoverAnimation: false,
          labelLine: {
            normal: {
              show: false,
            }
          },
          label: {
            normal: {
              show: false,
            }
          },
        },
        componentOptions: {
          title: {
            show: false
          },
          tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
          },
          legend: {
            show: false
          },
          series: []
        },
      }
    },
    watch: {
      'Config': {
        handler(curVal, oldVal){
//          this.getComponentDataByChange()
          this.uCanvas.resize()
        },
        deep: true
      },
      'Config.datasource': {
        handler(curVal, oldVal){
          this.getComponentDataByChange()

          this.uCanvas = echarts.init(this.$el);
          this.uCanvas.setOption(this.componentOptions)

          let that = this
          this.uCanvas.on('click', function (param) {
            that.setMultiBarColor(param.seriesIndex)
          })
        },
        deep: true
      },
      'componentConfig': {
        handler(curVal, oldVal){
          if (oldVal.pieName) {
            this.getComponentDataByChange()
            this.uCanvas = echarts.init(this.$el);
            this.uCanvas.setOption(this.componentOptions)

            let that = this
            this.uCanvas.on('click', function (param) {
              that.setMultiBarColor(param.seriesIndex)
            })
          }
        },
        deep: true
      },
      'Config.isSelected': {
        handler(curVal, oldVal){
          if (curVal) {
            let propertyArr = []
            let propertyObject = $.extend(true, {}, PropConfig.props)
            propertyObject.type = 'uPieMultiCicle-piestyle'
            propertyObject.title = '多环设置'
            propertyObject.props = this.componentConfig
            propertyArr.push(propertyObject)
            this.addPublicPropConfig(propertyArr)
          }
        },
        deep: true
      },
    },
    created() {
      //初始化图表
      this.initConfig()
    },

    mounted(){
      //初始化饼图
      let that = this
      this.uCanvas = echarts.init(this.$el);
      this.uCanvas.setOption(this.componentOptions);

      this.uCanvas.on('click', function (param) {
        that.setMultiBarColor(param.seriesIndex)
      })
    },

    computed: {
      ...mapGetters({
        definition: 'editorDefinition',
        publicPropConfig: 'propConfig',
        databaseHost: 'databaseHost'
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
       * 设置组件默认色值
       */
      initConfig() {
        this.getComponentData()
      },

      /**
       * 设置多色柱的颜色
       */
      setMultiBarColor(dindex) {
        let propertyArr = []
        let propertyObject = $.extend(true, {}, PropConfig.props)
        propertyObject.type = 'uPieMultiCicle-piecolor'
        propertyObject.title = '选中饼色设置'
        propertyObject.props = this.componentConfig.multiColorValue[dindex]
        propertyArr.push(propertyObject)
        this.addPublicPropConfig(propertyArr)
      },

    }
  }
</script>
