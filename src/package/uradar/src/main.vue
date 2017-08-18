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
  import comp from '../../mixins/compRadar'

  export default {
    name: 'URadar',
    mixins: [comp],
    diagrameType: ['radar','comm'],
    data() {
      return {
        //柱状图参数
        componentOptions: {
          title: {
            show: false,
          },
          legend: {
            show: false,
          },
          radar: {
            indicator: [],
            shape: 'polygon',
            splitNumber: 5,
            name: {
              textStyle: {
                color: 'rgb(238, 197, 102)'
              }
            },
            splitLine: {
              show:true,
              lineStyle: {
                color: [
                  'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                  'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                  'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                ].reverse()
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              show:true,
              lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
              }
            }
          },
          series: []
        },

        serieTemp: {
          name: '',
          type: 'radar',
          lineStyle: {
            width: 1,
            opacity: 0.5,
          },
          data: [],
          symbol: 'none',
          itemStyle: {
            normal: {
              color: '#F9713C'
            }
          },
          areaStyle: {
            normal: {
              opacity: 0.1
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
          if (oldVal.radarName) {
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
        },
        deep: true
      },
      'Config.isSelected': {
        handler(curVal, oldVal){
          //如果为选中状态，则显示设置属性
          if (curVal) {
            let propertyArr = []
            let propertyObject = $.extend(true, {}, PropConfig.props)
            propertyObject.type = 'uRadar-radarstyle'
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
      })
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
