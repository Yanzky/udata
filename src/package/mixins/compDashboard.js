import comp from './comp'
export default {
  mixins: [comp],
  data() {
    return {
      uxAxisData: [],
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

        //初始化轴数组
        this.initBizData(d)

        //根据处理完的数据，给数据加上色值，后续series拿到可以直接使用
        this.initMultiColor()

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
     * 初始化图表数据
     * @param d
     */
    initBizData(d) {
      let newDataArr = {}
      if (d.value instanceof Array && d.name instanceof Array && d.max instanceof Array){
        newDataArr = d
      }else {
        console.log('数据格式错误,请检查数据格式')
      }
      this.uBizData = newDataArr
    },

    /**
     * 初始化多色柱的颜色
     */
    initMultiColor() {
    },

    /**
     * 初始化柱子
     * @param d
     */
    initSeries(d) {
      if (d.hasOwnProperty('name')) {
        let series = []
        let serie = $.extend(true, {}, this.serieTemp)
        serie.name = d.name[0]
        serie.data = d.value
        if (d.hasOwnProperty('max')){
          serie.max = d.max[0]
        }else {
          serie.max = 100
        }
        if (d.hasOwnProperty('min')){
          serie.min = d.min[0]
        }else {
          serie.min = 0
        }

        //设置仪表盘的各项参数
        let config = this.componentConfig
        serie.radius = config.radius
        serie.startAngle = config.startAngle
        serie.endAngle = config.endAngle
        serie.axisLine.lineStyle.width = config.axisWidth
        serie.axisLabel.show = config.isAxisLable
        serie.axisLabel.textStyle.fontWeight = config.labelFontWeight.value
        serie.axisLabel.textStyle.fontSize = config.labelFontSize
        serie.axisLabel.textStyle.color = config.labelColor
        serie.axisTick.length = config.axisTickLength
        serie.axisTick.lineStyle.color = config.axisTickColor
        serie.splitNumber = config.splitNumber
        serie.splitLine.length = config.splitLineLength
        serie.splitLine.lineStyle.color = config.splitLineColor
        serie.pointer.show = config.isPoints
        serie.pointer.length = config.pointsLength
        serie.pointer.width = config.pointsWidth
        serie.detail.show = config.isDetail
        serie.detail.width = config.detailWidth
        serie.detail.height = config.detailHeight
        serie.detail.backgroundColor = config.detailBgColor
        serie.detail.borderWidth = config.detailBorderWidth
        serie.detail.borderColor = config.detailBorderColor
        serie.detail.offsetCenter = [config.detailOffsetLeft,config.detailOffsetTop]
        serie.detail.textStyle.fontWeight = config.detailFontWeight.value
        serie.detail.textStyle.fontSize = config.detailFontSize
        serie.detail.textStyle.color = config.detailFontColor

        //给仪表轴渲染多色
        let rangeArr = config.axisRange.split(',')
        if (rangeArr instanceof Array){
          let count = rangeArr.length
          let rangeColorArr = []
          for (let i = 0 ; i < count ; i++){
            if (i < 4){
              let itemColorName = "rangeColor" + (i + 1)
              let itemColorObj = this.transationColorToObj(this.transationColor(config[itemColorName]))
              let itemArr = [parseFloat(rangeArr[i]),itemColorObj]
              rangeColorArr.push(itemArr)
            }
          }
          if (rangeColorArr.length > 0){
            serie.axisLine.lineStyle.color = rangeColorArr
          }
        }else {
          console.log("在格式化坐标轴分区数据的时候发生错误")
        }

        series.push(serie)
        this.componentOptions.series = series
      } else {
        console.log('数据处理过程中发生错误')
      }
    },

  }
}
