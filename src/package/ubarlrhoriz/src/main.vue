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
    name: 'UBarLRHoriz',
    mixins: [comp],
    diagrameType: ['LRHorizBar', 'vertical'],
    data() {
      return {
        isMultiColor: false,

        //柱状图参数
        componentOptions: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: [{
            show: false,
            left: '4%',
            top: 0,
            bottom: 0,
            containLabel: true,
            width: '44%',
          }, {
            show: false,
            left: '51.5%',
            top: 20,
            bottom: 0,
            width: '0%',
          }, {
            show: false,
            right: '4%',
            top: 0,
            bottom: 0,
            containLabel: true,
            width: '44%',
          },],
          xAxis: [
            {
              show: true,
              type: 'value',
              inverse: true,
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#fff',
                  width: 1,
                  type: 'solid'
                }
              },
              axisTick: {
                show: false,
              },
              position: 'top',
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#B2B2B2',
                  fontSize: 12,
                },
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: '#1F2022',
                  width: 1,
                  type: 'solid',
                },
              },
            }, {
              gridIndex: 1,
              show: false,
            }, {
              show: true,
              gridIndex: 2,
              type: 'value',
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#fff',
                  width: 1,
                  type: 'solid'
                }
              },
              axisTick: {
                show: false,
              },
              position: 'top',
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#B2B2B2',
                  fontSize: 12,
                },
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: '#1F2022',
                  width: 1,
                  type: 'solid',
                },
              },
            },],
          yAxis: [{
            show: false,
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              margin: 8,
              textStyle: {
                color: '#9D9EA0',
                fontSize: 12,
              },

            },
            data: [],
          }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#9D9EA0',
                fontSize: 12,
              },

            },
            //data必须是一个对象数组,包含value和textStyle
            data: [],
          }, {
            show: false,
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: '#9D9EA0',
                fontSize: 12,
              },

            },
            data: [],
          },],
          series: []
        },
        serieTemp: {
          name: '',
          type: 'bar',
          barWidth: '20%',
          data: [],
          label: {
            normal: {
              show: true,
              position: 'insideTop',
              textStyle: {
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
          if (oldVal.barName) {
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
            that.setMultiBarColor(param.seriesIndex)
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
            propertyObject.type = 'uBarLRHoriz-barstyle'
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
          let propertyArr = []
          let propertyObject = $.extend(true, {}, PropConfig.props)
          propertyObject.type = 'uBarLRHoriz-barcolor'
          propertyObject.title = '选中柱色设置'
          propertyObject.props = this.componentConfig.multiColorValue[dindex]
          propertyArr.push(propertyObject)
          this.addPublicPropConfig(propertyArr)
        })
      },
    }
  }
</script>
