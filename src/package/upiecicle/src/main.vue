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
    name: 'UPieCicle',
    mixins: [comp],
    diagrameType: ['ciclepie','pie'],
    data() {
      return {
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
        serieTemp:{
          name: '运维统计',
          type: 'pie',
          center: ['50%', '50%'],
          radius: ['50%', '75%'],
          selectedMode: 'single',
          selectedOffset: 10,
          labelLine: {
            normal: {
              show: true,
              length: 10,
              length2: 5,
              smooth: false,
              lineStyle: {
                color: '#fff'
              }
            }
          },
          label: {
            normal: {
              show: false,
              position: 'outside',
              formatter: '{c}',
              textStyle: {
                color: '#fff',
              }
            }
          },
          itemStyle: {
            normal: {
              shadowBlur: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
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
            that.setMultiBarColor(param.dataIndex)
          })
        },
        deep: true
      },
      'componentConfig': {
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
          if (curVal) {
            let propertyArr = []
            let propertyObject = $.extend(true, {}, PropConfig.props)
            propertyObject.type = 'uPieCicle-piestyle'
            propertyObject.title = '饼图设置'
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
      //初始化饼图
      let that = this
      this.uCanvas = echarts.init(this.$el);
      this.uCanvas.setOption(this.componentOptions);

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
        propertyObject.type = 'uPieCicle-piecolor'
        propertyObject.title = '选中饼色设置'
        propertyObject.props = this.componentConfig.multiColorValue[dindex]
        propertyArr.push(propertyObject)
        this.addPublicPropConfig(propertyArr)
      },

      /**
       * 选择组件
       */
    }
  }
</script>
