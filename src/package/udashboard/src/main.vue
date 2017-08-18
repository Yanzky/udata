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
  import comp from '../../mixins/compDashboard'

  export default {
    name: 'UDashboard',
    mixins: [comp],
    diagrameType: ['dashboard', 'dashboard'],
    data() {
      return {
        componentOptions: {
          title: {
            show: false
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{c} {b}"
          },
          legend: {
            show: false
          },
          series: []
        },
        serieTemp: {
          name: '速度',
          type: 'gauge',
          min: 0,
          max: 220,
          splitNumber: 11,
          radius: '90%',
          startAngle: 180,
          endAngle: 0,
          axisLine: {
            lineStyle: {
              color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
              width: 3,
            }
          },
          axisLabel: {
            show: true,
            formatter: function (value) {
              return parseInt(value)
            },
            textStyle: {
              fontWeight: 'lighter',
              fontSize: 14,
              color: '#fff',
            }
          },
          axisTick: {
            length: 10,
            lineStyle: {
              color: 'auto',
            }
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 3,
              color: 'auto',
            }
          },
          pointer: {
            show: true,
            length: "80%",
            width: 8,
          },
          detail: {
            show: true,
            width: 100,
            height: 40,
            backgroundColor: 'rgba(30,144,255,0.8)',
            borderWidth: 1,
            borderColor: '#fff',
            offsetCenter: [0, '90%'],
            textStyle: {
              fontWeight: 'bolder',
              fontSize: 30,
              color: '#fff'
            }
          },
          data: []
        }
      }
    },
    watch: {
      'Config': {
        handler(curVal, oldVal){
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
          })
        },
        deep: true
      },
      'componentConfig': {
        handler(curVal, oldVal){
          if (oldVal.multiColorValue) {
            this.getComponentDataByChange()
            this.uCanvas = echarts.init(this.$el);
            this.uCanvas.setOption(this.componentOptions)

            let that = this
            this.uCanvas.on('click', function (param) {
              that.setMultiBarColor(param.dataIndex)
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
            propertyObject.type = 'uDashboard-dashboardstyle'
            propertyObject.title = '仪表盘设置'
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
      //初始化仪表盘
      let that = this
      this.uCanvas = echarts.init(this.$el);
      this.uCanvas.setOption(this.componentOptions)

      this.uCanvas.on('click', function (param) {
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

    }
  }
</script>
