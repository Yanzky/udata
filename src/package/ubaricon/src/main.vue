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
  import comp from '../../mixins/compBar'

  export default {
    name: 'UBarIcon',
    mixins: [comp],
    diagrameType: ['singleBarIcon', 'horiz'],
    data() {
      return {
        //柱状图参数
        componentOptions: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            show: true,
            data: [],
            axisTick: {
              alignWithLabel: true,
              show: true
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "rgba(255,255,255, 1)",
                width: 1,
                type: "solid"
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(0,0,0,1)",
                width: 1,
                type: 'solid'
              }
            },
            axisLabel: {
              show: true,
              rotate: 0,
              interval: 0,
              textStyle: {
                color: "rgba(197, 197, 197, 1)",
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12,
                align: 'center',
                baseline: 'middle'
              }
            }
          }
          ,
          yAxis: {
            type: 'value',
            show: true,
            splitLine: {
              show: false,
              lineStyle: {
                color: "rgba(255,255,255, 1)",
                width: 1,
                type: "solid"
              }
            },
            axisTick: {
              show: true
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(0,0,0,1)",
                width: 1,
                type: 'solid'
              }
            },
            axisLabel: {
              show: true,
              rotate: 0,
              interval: 0,
              textStyle: {
                color: "rgba(197, 197, 197, 1)",
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12,
                align: 'right',
                baseline: 'middle'
              }
            }
          }
          ,
          series: []
        },
        serieTemp: {
          name: '',
          type: 'pictorialBar',
          barWidth: '60%',
          symbolRepeat: true,
          symbolSize: ['90%', '60%'],
          symbol: 'roundRect',
          data: [],
          label: {
            normal: {
              show: true,
              position: 'insideTop',
              offset: [0,0],
              formatter: '{c}',
              textStyle: {
                color: "rgba(255,255,255, 1)",
                fontSize: 12
              }
            }
          },
          itemStyle: {
            normal: {
              color: 'rgba(0,255,255,0.5)'
            }
          }
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
      'componentConfig': {
        handler(curVal, oldVal){
          if (oldVal.barColor) {
            this.getComponentDataByChange()
            this.uCanvas.setOption(this.componentOptions)
          }
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
            that.setMultiBarColor(param.dataIndex)
          })
        },
        deep: true
      },
      'Config.isSelected': {
        handler(curVal, oldVal){
          //如果为选中状态，则显示设置属性
          if (curVal) {
            let propertyArr = []
            let propertyObject = $.extend(true, {}, PropConfig.props)
            propertyObject.type = 'uBarIcon-barstyle'
            propertyObject.rawType = 'uBar'
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
      let that = this
      this.uCanvas.on('click', function (param) {
        that.setMultiBarColor(param.dataIndex)
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
       * 获取组件数据
       */

      /**
       * 按照用户配置的颜色初始化地球
       */
      initConfig() {
        this.getComponentData()
      },

      /**
       * 设置多色柱的颜色
       */
      setMultiBarColor(dindex) {
        setTimeout(() => {
          if (this.componentConfig.multiColor) {
            let propertyArr = []
            let propertyObject = $.extend(true, {}, PropConfig.props)
            propertyObject.type = 'uBarIcon-barcolor'
            propertyObject.title = '选中柱色设置'
            propertyObject.props = this.componentConfig.multiColorValue[dindex]
            propertyArr.push(propertyObject)
            this.addPublicPropConfig(propertyArr)
          }
        })
      },
    }
  }
</script>
