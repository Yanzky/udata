<template>
  <div @click.stop="selectComponent" :class="[{ismouseover: !isProduct},{ubar: true},{isselected:Config.isSelected && !isProduct}]"
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

  export default {
    name: 'UGlobe',
    props: ['Config','isProduct'],
    data() {
      return {
        uData: [],
        uStyle: null,
        uCanvas: null,
        //全国省会城市的坐标位置
        geoCoordMap: {
          '上海': [121.4648, 31.2891, 100],
          '东莞': [113.8953, 22.901, 100],
          '东营': [118.7073, 37.5513, 100],
          '中山': [113.4229, 22.478, 100],
          '临汾': [111.4783, 36.1615, 100],
          '临沂': [118.3118, 35.2936, 100],
          '丹东': [124.541, 40.4242, 100],
          '丽水': [119.5642, 28.1854, 100],
          '乌鲁木齐': [87.9236, 43.5883, 100],
          '佛山': [112.8955, 23.1097, 100],
          '保定': [115.0488, 39.0948, 100],
          '兰州': [103.5901, 36.3043, 100],
          '包头': [110.3467, 41.4899, 100],
          '北京': [116.4551, 40.2539, 100],
          '北海': [109.314, 21.6211, 100],
          '南京': [118.8062, 31.9208, 100],
          '南宁': [108.479, 23.1152, 100],
          '南昌': [116.0046, 28.6633, 100],
          '南通': [121.1023, 32.1625, 100],
          '厦门': [118.1689, 24.6478, 100],
          '台州': [121.1353, 28.6688, 100],
          '合肥': [117.29, 32.0581, 100],
          '呼和浩特': [111.4124, 40.4901, 100],
          '咸阳': [108.4131, 34.8706, 100],
          '哈尔滨': [127.9688, 45.368, 100],
          '唐山': [118.4766, 39.6826, 100],
          '嘉兴': [120.9155, 30.6354, 100],
          '大同': [113.7854, 39.8035, 100],
          '大连': [122.2229, 39.4409, 100],
          '天津': [117.4219, 39.4189, 100],
          '太原': [112.3352, 37.9413, 100],
          '威海': [121.9482, 37.1393, 100],
          '宁波': [121.5967, 29.6466, 100],
          '宝鸡': [107.1826, 34.3433, 100],
          '宿迁': [118.5535, 33.7775, 100],
          '常州': [119.4543, 31.5582, 100],
          '广州': [113.5107, 23.2196, 100],
          '廊坊': [116.521, 39.0509, 100],
          '延安': [109.1052, 36.4252, 100],
          '张家口': [115.1477, 40.8527, 100],
          '徐州': [117.5208, 34.3268, 100],
          '德州': [116.6858, 37.2107, 100],
          '惠州': [114.6204, 23.1647, 100],
          '成都': [103.9526, 30.7617, 100],
          '扬州': [119.4653, 32.8162, 100],
          '承德': [117.5757, 41.4075, 100],
          '拉萨': [91.1865, 30.1465, 100],
          '无锡': [120.3442, 31.5527, 100],
          '日照': [119.2786, 35.5023, 100],
          '昆明': [102.9199, 25.4663, 100],
          '杭州': [119.5313, 29.8773, 100],
          '枣庄': [117.323, 34.8926, 100],
          '柳州': [109.3799, 24.9774, 100],
          '株洲': [113.5327, 27.0319, 100],
          '武汉': [114.3896, 30.6628, 100],
          '汕头': [117.1692, 23.3405, 100],
          '江门': [112.6318, 22.1484, 100],
          '沈阳': [123.1238, 42.1216, 100],
          '沧州': [116.8286, 38.2104, 100],
          '河源': [114.917, 23.9722, 100],
          '泉州': [118.3228, 25.1147, 100],
          '泰安': [117.0264, 36.0516, 100],
          '泰州': [120.0586, 32.5525, 100],
          '济南': [117.1582, 36.8701, 100],
          '济宁': [116.8286, 35.3375, 100],
          '海口': [110.3893, 19.8516, 100],
          '淄博': [118.0371, 36.6064, 100],
          '淮安': [118.927, 33.4039, 100],
          '深圳': [114.5435, 22.5439, 100],
          '清远': [112.9175, 24.3292, 100],
          '温州': [120.498, 27.8119, 100],
          '渭南': [109.7864, 35.0299, 100],
          '湖州': [119.8608, 30.7782, 100],
          '湘潭': [112.5439, 27.7075, 100],
          '滨州': [117.8174, 37.4963, 100],
          '潍坊': [119.0918, 36.524, 100],
          '烟台': [120.7397, 37.5128, 100],
          '玉溪': [101.9312, 23.8898, 100],
          '珠海': [113.7305, 22.1155, 100],
          '盐城': [120.2234, 33.5577, 100],
          '盘锦': [121.9482, 41.0449, 100],
          '石家庄': [114.4995, 38.1006, 100],
          '福州': [119.4543, 25.9222, 100],
          '秦皇岛': [119.2126, 40.0232, 100],
          '绍兴': [120.564, 29.7565, 100],
          '聊城': [115.9167, 36.4032, 100],
          '肇庆': [112.1265, 23.5822, 100],
          '舟山': [122.2559, 30.2234, 100],
          '苏州': [120.6519, 31.3989, 100],
          '莱芜': [117.6526, 36.2714, 100],
          '菏泽': [115.6201, 35.2057, 100],
          '营口': [122.4316, 40.4297, 100],
          '葫芦岛': [120.1575, 40.578, 100],
          '衡水': [115.8838, 37.7161, 100],
          '衢州': [118.6853, 28.8666, 100],
          '西宁': [101.4038, 36.8207, 100],
          '西安': [109.1162, 34.2004, 100],
          '贵阳': [106.6992, 26.7682, 100],
          '连云港': [119.1248, 34.552, 100],
          '邢台': [114.8071, 37.2821, 100],
          '邯郸': [114.4775, 36.535, 100],
          '郑州': [113.4668, 34.6234, 100],
          '鄂尔多斯': [108.9734, 39.2487, 100],
          '重庆': [107.7539, 30.1904, 100],
          '金华': [120.0037, 29.1028, 100],
          '铜川': [109.0393, 35.1947, 100],
          '银川': [106.3586, 38.1775, 100],
          '镇江': [119.4763, 31.9702, 100],
          '长春': [125.8154, 44.2584, 100],
          '长沙': [113.0823, 28.2568, 100],
          '长治': [112.8625, 36.4746, 100],
          '阳泉': [113.4778, 38.0951, 100],
          '青岛': [120.4651, 36.3373, 100],
          '韶关': [113.7964, 24.7028, 100],
          '纽约': [-73.55, 40.44, 100],
          '拉斯维加斯': [-115.1, 36.1, 100]
        },
        //地图上影响图层配置信息
        componentConfig: {},

        //地球参数
        componentOptions: {
          backgroundColor: 'rgba(0,55,120,0.5)',
          globe: {
            baseTexture: "/static/img/earth.jpg",
            displacementScale: 0.04,
            shading: 'realistic',
            environment: 'auto',
            viewControl: {
              autoRotate: false,
              alpha: 35,
              beta: 185,
            },
            realisticMaterial: {
              roughness: 1,
              metalness: 0
            },
            postEffect: {
              enable: true
            },
            light: {
              main: {
                intensity: 1,
                shadow: false
              },
            }
          }
        },

        //地球上地图画布纹理配置参数
        worldCanvasOption: {
          series: [
            {
              type: 'map',
              map: 'world',
              // 绘制完整尺寸的 echarts 实例
              top: 0, left: 0,
              right: 0, bottom: 0,
              boundingCoords: [[-180, 90], [180, -90]],
              label: {
                emphasis: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  areaColor: 'rgba(66, 132, 255, 0.74)',
                  borderColor: 'rgba(141, 189, 255, 1)',
                  borderWidth: 1
                },
                emphasis: {
                  areaColor: 'rgba(66, 132, 255, 0.34)',
                  borderWidth: 0
                }
              }
            }
          ]
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
          if (oldVal.globeBgColor) {
            this.initConfig(this.componentConfig)
            this.uCanvas.setOption(this.componentOptions)
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
            propertyObject.type = 'uGlobe-mapconfig'
            propertyObject.title = '地球设置'
            propertyObject.props = this.componentConfig
            propertyArr.push(propertyObject)
            this.addPublicPropConfig(propertyArr)
          }
        },
        deep: true
      },
    },
    created() {
      this.uStyle = this.Config.style
      this.componentConfig = this.Config.componentStyle.uComponentConfig
      this.initConfig(this.componentConfig)
    },

    mounted(){

      //初始化地图
      this.uCanvas = echarts.init(this.$el)
      this.uCanvas.setOption(this.componentOptions)
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
       * 获取组件数据
       */
      getComponentData() {
        let datatype = this.Config.datasource.type
        switch (datatype) {
          case "json":
            this.uData = $.extend(true,[],this.Config.datasource.value)
            this.initMapInnerComponents(this.uData)
            break
        }
      },

      /**
       * 选择组件
       */
      selectComponent(){
        let that = this
        this.Config.isSelected = true

        let layouts = this.definition.layouts
        let count = layouts.length
        for (let i = 0; i < count; i++) {
          layouts[i].isSelected = false

          //deselect no selecte component
          let components = layouts[i].components
          let compcount = components.length
          for (let j = 0; j < compcount; j++) {
            if (components[j].id !== this.Config.id) {
              components[j].isSelected = false
            }
          }
        }

        this.setComponentStatus(false)
        setTimeout(function () {
          that.setComponentStatus(true)
        })
      },

      /**
       * 创建地球的贴图画布，改画布是绘制的世界地图
       */
      createGlobeCanvas() {
        let globeCanvas = document.createElement('canvas');
        let mapChart = echarts.init(globeCanvas, null, {
          width: 4096, height: 2048
        });
        mapChart.setOption(this.worldCanvasOption);

        return mapChart
      },

      /**
       * 按照用户配置的颜色初始化地球
       * @param configColor
       */
      initConfig(configColor) {
        //配置地球相关的颜色
        this.componentOptions.backgroundColor = configColor.globeBgColor
        this.componentOptions.globe.environment = configColor.skyColor

        //配置地图相关的颜色
        this.worldCanvasOption.series[0].itemStyle.normal.areaColor = configColor.mapColor
        this.worldCanvasOption.series[0].itemStyle.normal.borderColor = configColor.mapBorderColor
        this.worldCanvasOption.series[0].itemStyle.emphasis.areaColor = configColor.emphasisMapColor

        if (configColor.globeType.value === '地图地球') {
          this.componentOptions.globe.baseTexture = this.createGlobeCanvas()
        } else {
          this.componentOptions.globe.baseTexture = '/static/img/earth.jpg'
        }

        this.getComponentData()
      },

      /**
       * 初始化组件
       */
      initMapInnerComponents(data) {
        let that = this
        let series = []
        let effectScatter3D = {
          type: 'scatter3D',
          coordinateSystem: 'globe',
          blendMode: 'lighter',
          symbolSize: 10,
          distanceToGlobe: 4,
          label: {
            show: true,
            position: 'right',
            formatter: '{b}'
          },
          itemStyle: {
            color: that.componentConfig.scaller3DColor,
            opacity: 0.8
          },
          data: data.map(function (dataItem) {
            return {
              name: dataItem[1].name,
              value: that.geoCoordMap[dataItem[1].name]
            };
          })
        }
        if (this.componentConfig.isEffectScatter){
          series.push(effectScatter3D)
        }

        let lines = {
          type: 'lines3D',
          name: 'effectlines',
          effect: {
            show: true,
            trailWidth: 4,
            trailLength: 0.2,
            trailOpacity: 0.4,
            trailColor: 'rgba(30, 30, 60, 0.9)'
          },

          lineStyle: {
            width: 2,
            color: that.componentConfig.line3DColor,
          },
          blendMode: 'lighter',

          distanceToGlobe: 2,

          data: that.convertData(data)
        }

        if (this.componentConfig.isEffectLine){
          series.push(lines)
        }


        if (series.length > 0){
          this.componentOptions.series = series
        }
      },

      /**
       * 计算地图数据，用于地理位置摆放
       */
      convertData(data) {
        let that = this
        let res = [];
        for (let i = 0; i < data.length; i++) {
          let dataItem = data[i];
          let fromCoord = that.geoCoordMap[dataItem[0].name];
          let toCoord = that.geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push({
              name: dataItem[1].name,
              coords: [fromCoord, toCoord],
              value: 10
            });
          }
        }
        return res;
      },
    }
  }
</script>
