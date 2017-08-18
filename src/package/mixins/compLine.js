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
        //初始化X轴
        this.initxAxis(d.name)

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
      this.uxAxisData = d
      this.componentOptions.xAxis.data = this.uxAxisData

      //设置坐标轴的辅助线
      this.componentOptions.xAxis.splitLine.lineStyle.color = this.componentConfig.xSplitColor
      this.componentOptions.xAxis.splitLine.lineStyle.width = this.componentConfig.xSplitWidth
      this.componentOptions.xAxis.splitLine.lineStyle.type = this.componentConfig.xSplitType.value
      this.componentOptions.yAxis.splitLine.lineStyle.color = this.componentConfig.ySplitColor
      this.componentOptions.yAxis.splitLine.lineStyle.width = this.componentConfig.ySplitWidth
      this.componentOptions.yAxis.splitLine.lineStyle.type = this.componentConfig.ySplitType.value

      //设置偏移量
      this.componentOptions.grid.left = this.componentConfig.gridLeft
      this.componentOptions.grid.right = this.componentConfig.gridRight
      this.componentOptions.grid.bottom = this.componentConfig.gridBottom

      //X轴设置
      this.componentOptions.xAxis.show = this.componentConfig.isX
      this.componentOptions.xAxis.splitLine.show = this.componentConfig.isXsplit
      this.componentOptions.xAxis.axisLine.show = this.componentConfig.isXaxis
      this.componentOptions.xAxis.axisTick.show = this.componentConfig.isXaxis
      //X坐标轴样式
      this.componentOptions.xAxis.axisLine.lineStyle.color = this.componentConfig.xAxisColor
      this.componentOptions.xAxis.axisLine.lineStyle.width = this.componentConfig.xAxisWidth
      this.componentOptions.xAxis.axisLine.lineStyle.type = this.componentConfig.xAxisType.value
      //X坐标轴刻度样式
      this.componentOptions.xAxis.axisLabel.rotate = this.componentConfig.axisRotate
      this.componentOptions.xAxis.axisLabel.show = this.componentConfig.isxAxisLabel
      this.componentOptions.xAxis.axisLabel.textStyle.color = this.componentConfig.xAxisLableColor
      this.componentOptions.xAxis.axisLabel.textStyle.fontStyle = this.componentConfig.xAxisLabelFontStyle.value
      this.componentOptions.xAxis.axisLabel.textStyle.fontWeight = this.componentConfig.xAxisLabelFontWeight.value
      this.componentOptions.xAxis.axisLabel.textStyle.fontSize = this.componentConfig.xAxisLabelFontSize
      this.componentOptions.xAxis.axisLabel.textStyle.align = this.componentConfig.xAxisLabelFontAlign.value
      this.componentOptions.xAxis.axisLabel.textStyle.baseline = this.componentConfig.xAxisLabelBaseline.value

      //Y轴设置
      this.componentOptions.yAxis.show = this.componentConfig.isY
      this.componentOptions.yAxis.splitLine.show = this.componentConfig.isYsplit
      this.componentOptions.yAxis.axisLine.show = this.componentConfig.isYaxis
      this.componentOptions.yAxis.axisTick.show = this.componentConfig.isYaxis
      //Y坐标轴样式
      this.componentOptions.yAxis.axisLine.lineStyle.color = this.componentConfig.yAxisColor
      this.componentOptions.yAxis.axisLine.lineStyle.width = this.componentConfig.yAxisWidth
      this.componentOptions.yAxis.axisLine.lineStyle.type = this.componentConfig.yAxisType.value
      //Y坐标轴刻度样式
      this.componentOptions.yAxis.axisLabel.rotate = this.componentConfig.yaxisRotate
      this.componentOptions.yAxis.axisLabel.show = this.componentConfig.isyAxisLabel
      this.componentOptions.yAxis.axisLabel.textStyle.color = this.componentConfig.yAxisLableColor
      this.componentOptions.yAxis.axisLabel.textStyle.fontStyle = this.componentConfig.yAxisLabelFontStyle.value
      this.componentOptions.yAxis.axisLabel.textStyle.fontWeight = this.componentConfig.yAxisLabelFontWeight.value
      this.componentOptions.yAxis.axisLabel.textStyle.fontSize = this.componentConfig.yAxisLabelFontSize
      this.componentOptions.yAxis.axisLabel.textStyle.align = this.componentConfig.yAxisLabelFontAlign.value
      this.componentOptions.yAxis.axisLabel.textStyle.baseline = this.componentConfig.yAxisLabelBaseline.value


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
          if (key !== 'name') {
            let count = value.length
            //存放每个系列的数组值
            let itemArr = []
            for (let i = 0; i < count; i++) {
              let subitemObj = {
                name: key,
                value: value[i]
              }
              itemArr.push(subitemObj)
            }
            newDataArr.push(itemArr)
          }
        } else {
          console.log('数据格式错误,请检查数据格式')
        }
      }
      //判断服务器端是否有业务数据传输过来
      if (newDataArr.length > 0) {
        if (this.$options.diagrameType[0] === 'singleLine') {
          //如果是单柱状图,只需要第一条的值
          this.uBizData = [newDataArr[0]]
        }
        if (this.$options.diagrameType[0] === 'multiLine') {
          this.uBizData = newDataArr
        }
      } else {
        console.log('接收到的数据不适合图表展示')
      }
    },

    /**
     * 初始化多色柱的颜色
     */
    initMultiColor(d) {
      if (this.$options.diagrameType[0] === 'multiLine') {
        //处理多柱状图的情况
        let count = d.length
        if (this.componentConfig.multiColorValue.length <= 0 || this.componentConfig.multiColorValue.length < count) {
          this.componentConfig.multiColorValue = []
          for (let i = 0; i < count; i++) {
            let colorObj = $.extend(true,{},this.defaultColor[i])
            this.componentConfig.multiColorValue.push(colorObj)
          }
        }

        if (this.componentConfig.multiAreaColorValue.length <= 0 || this.componentConfig.multiAreaColorValue.length < count) {
          this.componentConfig.multiAreaColorValue = []
          for (let i = 0; i < count; i++) {
            let colorObj = $.extend(true,{},this.defaultColor[i])
            this.componentConfig.multiAreaColorValue.push(colorObj)
          }
        }
      }
    },

    /**
     * 初始化柱子
     * @param d
     */
    initSeries(d) {
      if (d instanceof Array) {
        let series = []
        let count = d.length;
        for (let i = 0; i < count; i++) {
          if (d[i] instanceof Array && d[i].length > 0){
            let serie = $.extend(true, {}, this.serieTemp)
            serie.name = d[i][0].name
            serie.data = d[i]
            if (this.$options.diagrameType[0] === 'singleLine' || this.$options.diagrameType[0] === 'multiLine') {
              //是否平滑曲线
              serie.smooth = this.componentConfig.isSmoth
              //设置标注
              serie.label.normal.show = this.componentConfig.isLabel
              serie.label.normal.position = this.componentConfig.labelPosition.value
              serie.label.normal.textStyle.fontSize = this.componentConfig.labelFontSize
              serie.label.normal.formatter = this.componentConfig.labelFormatter

              //设置拐角点
              if (!this.componentConfig.isPoint) {
                serie.itemStyle.normal.opacity = 0
              } else {
                serie.itemStyle.normal.opacity = 1
                serie.itemStyle.normal.borderWidth = this.componentConfig.pointWidth
              }

              //设置线的颜色
              serie.lineStyle.normal.width = this.componentConfig.lineWidth
            }
            if (this.$options.diagrameType[0] === 'singleLine') {
              //设置标注
              serie.label.normal.textStyle.color = this.componentConfig.lineColor
              //设置拐角点
              if (this.componentConfig.isPoint)
                serie.itemStyle.normal.borderColor = this.componentConfig.lineColor
              //设置线的颜色
              serie.lineStyle.normal.color = this.componentConfig.lineColor
            }
            if (this.$options.diagrameType[0] === 'multiLine') {
              //设置标注
              serie.label.normal.textStyle.color = this.componentConfig.multiColorValue[i].color
              //设置拐角点
              if (this.componentConfig.isPoint)
                serie.itemStyle.normal.borderColor = this.componentConfig.multiColorValue[i].color
              //设置线的颜色
              serie.lineStyle.normal.color = this.componentConfig.multiColorValue[i].color
            }

            //设置单面积区域颜色
            if (this.$options.diagrameType[0] === 'singleLine' && this.$options.diagrameType[1] === 'area') {
              let colorArr = this.transationColor(this.componentConfig.areaColor)
              if (colorArr.length === 2) {
                serie.areaStyle.normal.color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: colorArr[0]
                }, {
                  offset: 1,
                  color: colorArr[0]
                }])
              }
              if (colorArr.length === 3){
                let goal = colorArr[2]
                let x = 0
                let y = 0
                let x1 = 0
                let y1 = 0
                if (goal === 1){
                  y1 = 1
                }
                if (goal === 2){
                  y = 1
                }
                if (goal === 3){
                  x1 = 1
                }
                if (goal === 4){
                  x = 1
                }
                serie.areaStyle.normal.color = new echarts.graphic.LinearGradient(x, y, x1, y1, [{
                  offset: 0,
                  color: colorArr[0]
                }, {
                  offset: 1,
                  color: colorArr[1]
                }])
              }
            }

            //设置多面积区域颜色
            if (this.$options.diagrameType[0] === 'multiLine' && this.$options.diagrameType[1] === 'area') {
              let colorArr = this.transationColor(this.componentConfig.multiAreaColorValue[i].color)
              if (colorArr.length === 2) {
                serie.areaStyle.normal.color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: colorArr[0]
                }, {
                  offset: 1,
                  color: colorArr[0]
                }])
              }
              if (colorArr.length === 3){
                let goal = colorArr[2]
                let x = 0
                let y = 0
                let x1 = 0
                let y1 = 0
                if (goal === 1){
                  y1 = 1
                }
                if (goal === 2){
                  y = 1
                }
                if (goal === 3){
                  x1 = 1
                }
                if (goal === 4){
                  x = 1
                }
                serie.areaStyle.normal.color = new echarts.graphic.LinearGradient(x, y, x1, y1, [{
                  offset: 0,
                  color: colorArr[0]
                }, {
                  offset: 1,
                  color: colorArr[1]
                }])
              }
            }
            series.push(serie)
          }
        }
        this.componentOptions.series = series
      } else {
        console.log('数据处理过程中发生错误')
      }
    },

  }
}
