import comp from './comp'
export default {
  mixins: [comp],
  data() {
    return {
      uBizData: [],
      defaultColor: [
        {
          color: 'rgba(34,139,255, 1)',
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        {
          color: 'rgba(249,212,66, 1)',
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        {
          color: 'rgba(66,248,66, 1)',
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        {
          color: 'rgba(243,101,35, 1)',
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        {
          color: 'rgba(248,66,66, 1)',
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        {
          color: 'rgba(29,140,224, 1)',
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      ],
    }
  },
  mounted() {
    //初始化地图
    this.uCanvas = echarts.init(this.$el)
    this.uCanvas.setOption(this.componentOptions)
  },
  methods: {

    /**
     * 处理图的业务数据，这里的所有数据统一格式为：
     * {name:[],系列1:[]...系列N:[]},name不可变，其余的系列可以改变
     */
    convertData(d) {
      if (d.name instanceof Array) {
        //初始化X轴
        this.initxAxis(d)

        //初始化轴数组
        this.initBizData(d)

        //根据处理完的数据，给数据加上色值，后续series拿到可以直接使用
        this.initMultiColor(this.uBizData)

        //初始化柱子
        this.initSeries(this.uBizData)

        if (this.Config.datasource.type !== 'json') {
          this.uCanvas.setOption(this.componentOptions);
        }
      } else {
        console.log('数据格式错误,请检查数据格式')
      }
    },

    /**
     * 初始化X轴
     * @param d
     */
    initxAxis(d) {
      if (d.name instanceof Array && d.max instanceof Array){
        if (d.name.length === d.max.length){
          let count = d.name.length
          let newArr = []
          for (let i = 0 ; i < count ; i++){
            let obj = {
              name: d.name[i],
              max: d.max[i]
            }
            newArr.push(obj)
          }
          this.componentOptions.radar.indicator = newArr
        }else {
          console.log('坐标数据格式化错误')
        }
      }

      //初始化坐标相关的配置数据
      this.componentOptions.radar.shape = this.componentConfig.radarShap.value
      this.componentOptions.radar.splitNumber = this.componentConfig.splitNumber
      this.componentOptions.radar.name.textStyle.color = this.componentConfig.nameColor
      this.componentOptions.radar.splitLine.show = this.componentConfig.isSplitline
      this.componentOptions.radar.splitLine.lineStyle.color = this.computedSplitLineColor(this.componentConfig.splitlineColor)
      this.componentOptions.radar.splitArea.show = this.componentConfig.splitArea
      this.componentOptions.radar.axisLine.show = this.componentConfig.isAxisline
      this.componentOptions.radar.axisLine.lineStyle.color = this.componentConfig.axislineColor
    },

    /**
     * 初始化图表数据
     * @param d
     */
    initBizData(d) {
      let newDataArr = []
      let {keys, values, entries} = Object;
      for (let [key, value] of entries(d)) {
        if (value instanceof Array) {
          if (key !== 'name' && key != 'max') {
            newDataArr.push(value)
          }
        } else {
          console.log('数据格式错误,请检查数据格式')
        }
      }
      this.uBizData = newDataArr
    },

    /**
     * 初始化多色柱的颜色
     */
    initMultiColor(d) {
    },

    /**
     * 初始化柱子
     * @param d
     */
    initSeries(d) {
      if (d instanceof Array) {
        let series = []
        let serie = $.extend(true, {}, this.serieTemp)
        serie.symbol = this.componentConfig.radarSymbol.value
        serie.itemStyle.normal.color = this.componentConfig.radaColor
        serie.data = d
        series.push(serie)
        this.componentOptions.series = series
      } else {
        console.log('数据处理过程中发生错误')
      }
    },

    /**
     * 计算雷达图坐标轴的颜色数组
     * @param color
     * @returns {null}
     */
    computedSplitLineColor(color) {
      let colorArr = color.split(',')
      let color1 = colorArr[0] + "," + colorArr[1] + "," + colorArr[2] + ", 1)"
      let color2 = colorArr[0] + "," + colorArr[1] + "," + colorArr[2] + ", 0.6)"
      let color3 = colorArr[0] + "," + colorArr[1] + "," + colorArr[2] + ", 0.4)"
      let color4 = colorArr[0] + "," + colorArr[1] + "," + colorArr[2] + ", 0.2)"
      let color5 = colorArr[0] + "," + colorArr[1] + "," + colorArr[2] + ", 0.1)"
      return [color1,color2,color3,color4,color5]
    },

  }
}
