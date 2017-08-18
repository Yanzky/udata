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
          shadowBlur: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          borderColor: 'rgba(0, 0, 0, 0.5)',
          borderWidth: 0,
        },
        {
          color: 'rgba(249,212,66, 1)',
          shadowBlur: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          borderColor: 'rgba(249,212,66, 1)',
          borderWidth: 0,
        },
        {
          color: 'rgba(66,248,66, 1)',
          shadowBlur: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          borderColor: 'rgba(34,139,255, 1)',
          borderWidth: 0,
        },
        {
          color: 'rgba(243,101,35, 1)',
          shadowBlur: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          borderColor: 'rgba(66,248,66, 1)',
          borderWidth: 0,
        },
        {
          color: 'rgba(248,66,66, 1)',
          shadowBlur: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          borderColor: 'rgba(248,66,66, 1)',
          borderWidth: 0,
        },
        {
          color: 'rgba(29,140,224, 1)',
          shadowBlur: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          borderColor: 'rgba(29,140,224, 1)',
          borderWidth: 0,
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
        if (this.$options.diagrameType[0] === 'singleBar' || this.$options.diagrameType[0] === 'singleBarIcon' || this.$options.diagrameType[0] === 'multiBar' || this.$options.diagrameType[0] === 'bgBar')
          this.initxAxis(d.name)

        if (this.$options.diagrameType[0] === 'LRHorizBar')
          this.initLFHxAxis(d.name)

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
      if ((this.$options.diagrameType[0] === 'singleBar' || this.$options.diagrameType[0] === 'singleBarIcon' || this.$options.diagrameType[0] === 'multiBar' || this.$options.diagrameType[0] === 'bgBar') && this.componentConfig.barDirection.value === '竖向') {
        if (!this.componentOptions.xAxis.hasOwnProperty('data')) {
          let x = $.extend(true, {}, this.componentOptions.xAxis)
          let y = $.extend(true, {}, this.componentOptions.yAxis)
          this.componentOptions.xAxis = y
          this.componentOptions.yAxis = x
        }
        this.componentOptions.xAxis.data = this.uxAxisData
      }

      if ((this.$options.diagrameType[0] === 'singleBar' || this.$options.diagrameType[0] === 'singleBarIcon' || this.$options.diagrameType[0] === 'multiBar' || this.$options.diagrameType[0] === 'bgBar') && this.componentConfig.barDirection.value === '横向') {
        if (!this.componentOptions.yAxis.hasOwnProperty('data')) {
          let x = $.extend(true, {}, this.componentOptions.xAxis)
          let y = $.extend(true, {}, this.componentOptions.yAxis)
          this.componentOptions.xAxis = y
          this.componentOptions.yAxis = x
        }
        this.componentOptions.yAxis.data = this.uxAxisData

      }

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

    initLFHxAxis(d) {
      this.uxAxisData = d
      this.componentOptions.yAxis[0].data = this.uxAxisData
      this.componentOptions.yAxis[2].data = this.uxAxisData
      let axisArray = []
      let count = d.length
      for (let i = 0; i < count; i++) {
        let axisObj = {
          value: d[i],
          textStyle: {
            align: 'center',
          }
        }
        axisArray.push(axisObj)
      }
      this.componentOptions.yAxis[1].data = axisArray

      //设置坐标轴的辅助线
      this.componentOptions.xAxis[0].splitLine.lineStyle.color = this.componentConfig.xSplitColor
      this.componentOptions.xAxis[0].splitLine.lineStyle.width = this.componentConfig.xSplitWidth
      this.componentOptions.xAxis[0].splitLine.lineStyle.type = this.componentConfig.xSplitType.value
      this.componentOptions.xAxis[2].splitLine.lineStyle.color = this.componentConfig.xSplitColor
      this.componentOptions.xAxis[2].splitLine.lineStyle.width = this.componentConfig.xSplitWidth
      this.componentOptions.xAxis[2].splitLine.lineStyle.type = this.componentConfig.xSplitType.value

      //初始化配置颜色等
      this.componentOptions.xAxis[0].axisLabel.textStyle.color = this.componentConfig.axisColor
      this.componentOptions.xAxis[2].axisLabel.textStyle.color = this.componentConfig.axisColor
      this.componentOptions.xAxis[0].axisLabel.textStyle.fontSize = this.componentConfig.axisfontSize
      this.componentOptions.xAxis[2].axisLabel.textStyle.fontSize = this.componentConfig.axisfontSize
      this.componentOptions.xAxis[0].axisLine.lineStyle.color = this.componentConfig.axisColor
      this.componentOptions.xAxis[0].axisLine.lineStyle.width = this.componentConfig.axisWidth
      this.componentOptions.xAxis[0].axisLine.lineStyle.type = this.componentConfig.axisType.value
      this.componentOptions.xAxis[2].axisLine.lineStyle.color = this.componentConfig.axisColor
      this.componentOptions.xAxis[2].axisLine.lineStyle.width = this.componentConfig.axisWidth
      this.componentOptions.xAxis[2].axisLine.lineStyle.type = this.componentConfig.axisType.value
      this.componentOptions.xAxis[0].show = this.componentConfig.isX
      this.componentOptions.xAxis[2].show = this.componentConfig.isX
      this.componentOptions.xAxis[0].axisLine.show = this.componentConfig.isXaxis
      this.componentOptions.xAxis[2].axisLine.show = this.componentConfig.isXaxis
      this.componentOptions.xAxis[0].splitLine.show = this.componentConfig.isXsplit
      this.componentOptions.xAxis[2].splitLine.show = this.componentConfig.isXsplit
      this.componentOptions.xAxis[0].splitLine.lineStyle.color = this.componentConfig.axisColor
      this.componentOptions.xAxis[2].splitLine.lineStyle.color = this.componentConfig.axisColor
      this.componentOptions.xAxis[0].position = this.componentConfig.axisPosition.value
      this.componentOptions.xAxis[2].position = this.componentConfig.axisPosition.value

      //Y
      this.componentOptions.yAxis[0].axisLabel.textStyle.color = this.componentConfig.axisColor
      this.componentOptions.yAxis[1].axisLabel.textStyle.color = this.componentConfig.axisColor
      this.componentOptions.yAxis[2].axisLabel.textStyle.color = this.componentConfig.axisColor
      this.componentOptions.yAxis[0].axisLabel.textStyle.fontSize = this.componentConfig.axisfontSize
      this.componentOptions.yAxis[1].axisLabel.textStyle.fontSize = this.componentConfig.axisfontSize
      this.componentOptions.yAxis[2].axisLabel.textStyle.fontSize = this.componentConfig.axisfontSize
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
        if (this.$options.diagrameType[0] === 'singleBar' || this.$options.diagrameType[0] === 'singleBarIcon' || this.$options.diagrameType[0] === 'bgBar') {
          //如果是单柱状图,只需要第一条的值
          this.uBizData = [newDataArr[0]]
        }
        if (this.$options.diagrameType[0] === 'multiBar') {
          this.uBizData = newDataArr
        }
        if (this.$options.diagrameType[0] === 'processBar') {
          this.uBizData = newDataArr
        }
        if (this.$options.diagrameType[0] === 'LRHorizBar') {
          this.uBizData = newDataArr
        }
        if (this.$options.diagrameType[0] === 'bgBar') {
          //判断如果是带底的柱图，取出柱子中最大值编排一组数组，作为背景柱子的数据
          let newArrTemp = $.extend(true, [], this.uBizData[0])
          let newArr = $.extend(true, [], this.uBizData[0])
          newArrTemp.sort(function (a, b) {
            return b.value - a.value
          })
          let itemMax = newArrTemp[0].value
          let count = newArr.length
          for (let i = 0; i < count; i++) {
            let tempValue = newArr[i].value
            newArr[i].value = itemMax
            newArr[i]['rawValue'] = tempValue
          }
          this.uBizData.unshift(newArr)
          let count1 = this.uBizData[1].length
          for (let i = 0; i < count1; i++) {
            this.uBizData[1][i].value = this.uBizData[1][i].value * 0.96
          }
        }
      } else {
        console.log('接收到的数据不适合图表展示')
      }
    },

    /**
     * 初始化多色柱的颜色
     */
    initMultiColor(d) {
      if (this.$options.diagrameType[0] === 'singleBar' || this.$options.diagrameType[0] === 'singleBarIcon') {
        let data = d[0]
        //处理单柱状图的情况
        let isMultiColor = this.componentConfig.multiColor
        if (isMultiColor) {
          let dcCount = this.defaultColor.length
          if (this.componentConfig.multiColorValue.length === 0) {
            let count = data.length
            for (let i = 0; i < count; i++) {
              if (i < dcCount) {
                this.componentConfig.multiColorValue.push(this.defaultColor[i])
              }
            }
          }

          //判断数据是否增加
          if (this.componentConfig.multiColorValue.length !== data.length) {
            let count = this.componentConfig.multiColorValue.length
            let dlength = data.length
            for (let i = count; i < dlength; i++) {
              this.componentConfig.multiColorValue.push(this.defaultColor[i])
            }
          }

          let mcount = this.componentConfig.multiColorValue.length
          let dcount = data.length
          for (let i = 0; i < mcount; i++) {
            if (i < dcount) {
              let itemStyle = {
                normal: this.componentConfig.multiColorValue[i]
              }
              data[i]['itemStyle'] = itemStyle
            }
          }
        } else {
          let dcount = data.length
          for (let i = 0; i < dcount; i++) {
            delete data[i]['itemStyle']
          }
        }
      }
      if (this.$options.diagrameType[0] === 'multiBar' || this.$options.diagrameType[0] === 'LRHorizBar' || this.$options.diagrameType[0] === 'processBar') {
        //处理多柱状图的情况
        let count = d.length
        if (this.componentConfig.multiColorValue.length <= 0 || this.componentConfig.multiColorValue.length < count) {
          this.componentConfig.multiColorValue = []
          for (let i = 0; i < count; i++) {
            //如果是进度条，按照万国数据的色值，对出示色值进行初始化2个，一个蓝色，一个红色
            if (this.$options.diagrameType[0] === 'processBar'){
              if (i === 1){
                this.defaultColor[i].color = "rgba(34,139,255, 0.42)"
                this.defaultColor[i].borderColor = "rgba(34,139,255, 1)"
                this.defaultColor[i].borderWidth = 1
              }
              if (i === 2){
                this.defaultColor[i].color = "rgba(34,139,255, 0.42)"
                this.defaultColor[i].borderColor = "rgba(34,139,255, 1)"
                this.defaultColor[i].borderWidth = 1
              }
              if (i === 3){
                this.defaultColor[i].color = "rgba(248,66,66, 0.42)"
                this.defaultColor[i].borderColor = "rgba(248,66,66, 1)"
                this.defaultColor[i].borderWidth = 1
              }
            }
            this.componentConfig.multiColorValue.push(this.defaultColor[i])
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
            if (this.$options.diagrameType[0] === 'singleBar' || this.$options.diagrameType[0] === 'singleBarIcon') {
              serie.itemStyle.normal.color = this.transationColorToObj(this.transationColor(this.componentConfig.barColor))
              serie.label.normal.position = this.componentConfig.labelPosition.value
              //设置bar宽度
              serie.barWidth = this.componentConfig.barWidth
              //设置bar标题的位置和是否显示
              serie.label.normal.show = this.componentConfig.isLabel

              serie.label.normal.offset[0] = this.componentConfig.labelOffsetX
              serie.label.normal.offset[1] = this.componentConfig.labelOffsetY
              serie.label.normal.textStyle.color = this.componentConfig.labelColor
              serie.label.normal.textStyle.fontSize = this.componentConfig.labelFontSize
              serie.label.normal.formatter = this.componentConfig.labelFormatter
            }
            if (this.$options.diagrameType[0] === 'singleBarIcon'){
              serie.itemStyle.normal.color = this.transationColorToObj(this.transationColor(this.componentConfig.barColor))
              serie.symbol = this.componentConfig.symbol.value
              serie.symbolSize[0] = this.componentConfig.symbolSizeX
              serie.symbolSize[1] = this.componentConfig.symbolSizeY
            }
            if (this.$options.diagrameType[0] === 'multiBar') {
              serie.itemStyle.normal = this.componentConfig.multiColorValue[i]
              if (this.componentConfig.barPlace.value === '堆叠') {
                serie['stack'] = 'stack'
              }
              if (this.componentConfig.barPlace.value === '展开') {
                delete serie['stack']
              }
              serie.label.normal.position = this.componentConfig.labelPosition.value
              //设置bar宽度
              serie.barWidth = this.componentConfig.barWidth
              //设置bar标题的位置和是否显示
              serie.label.normal.show = this.componentConfig.isLabel

              serie.label.normal.offset[0] = this.componentConfig.labelOffsetX
              serie.label.normal.offset[1] = this.componentConfig.labelOffsetY
              serie.label.normal.textStyle.color = this.componentConfig.labelColor
              serie.label.normal.textStyle.fontSize = this.componentConfig.labelFontSize
              serie.label.normal.formatter = this.componentConfig.labelFormatter
            }
            if (this.$options.diagrameType[0] === 'processBar') {
              serie.itemStyle.normal = this.componentConfig.multiColorValue[i]
              serie.label.normal.position = this.componentConfig.labelPosition.value
              serie.label.normal.offset[1] = this.componentConfig.labelOffset
              serie.label.normal.formatter = this.componentConfig.labelFormatter
              //设置bar宽度
              serie.barWidth = this.componentConfig.barWidth
              //设置bar标题的位置和是否显示
              serie.label.normal.show = this.componentConfig.isLabel
              serie.label.normal.position = this.componentConfig.labelPosition.value
              serie.label.normal.textStyle.color = this.componentConfig.labelColor
              serie.label.normal.textStyle.fontSize = this.componentConfig.labelFontSize

              if (serie.name === 'total'){
                serie.itemStyle.normal['opacity'] = 0
              }
            }
            if (this.$options.diagrameType[0] === 'LRHorizBar') {
              serie.itemStyle.normal = this.componentConfig.multiColorValue[i]
              serie.label.normal.textStyle.fontSize = this.componentConfig.barfontSize
              //设置bar宽度
              serie.barWidth = this.componentConfig.barWidth
              //设置bar标题的位置和是否显示
              serie.label.normal.show = this.componentConfig.isLabel
              let itemName = d[i][0].name
              let nameArr = itemName.split('-')
              if (nameArr.length === 2) {
                if (nameArr[1] === 'left') {
                  serie['stack'] = nameArr[1]
                  serie.label.normal.position = 'insideLeft'
                }
                if (nameArr[1] === 'right') {
                  serie['stack'] = nameArr[1]
                  serie['xAxisIndex'] = 2
                  serie['yAxisIndex'] = 2
                  serie.label.normal.position = 'insideRight'
                }
              } else {
                console.log('格式化以后的数据无法区分左右侧,请检查数据')
              }
            }

            //判断如果是背景柱图
            if (this.$options.diagrameType[0] === 'bgBar') {
              if (i === 1) {
                serie.label.normal.show = false
                serie.barWidth = this.componentConfig.barWidthinner,
                  delete serie['barGap']

                //设置内柱颜色
                let colorArr = this.transationColor(this.componentConfig.barColorinner)
                let itemColor = this.transationColorToObj(colorArr)
                serie.itemStyle.normal.color = itemColor

                let radiusArr = this.componentConfig.barBorderRadiusinner.split(',')
                let lt = radiusArr[0] || 0, rt = radiusArr[1] || 0, rb = radiusArr[2] || 0, lb = radiusArr[3] || 0
                serie.itemStyle.normal.barBorderRadius = [parseInt(lt), parseInt(rt), parseInt(rb), parseInt(lb)]
              }
              if (i === 0) {
                //设置bar标题的位置和是否显示
                serie.label.normal.show = this.componentConfig.isLabel
                serie.label.normal.position = this.componentConfig.labelPosition.value
                serie.label.normal.textStyle.color = this.componentConfig.labelColor
                serie.label.normal.textStyle.fontSize = this.componentConfig.barfontSize
                serie.itemStyle.normal.color = this.componentConfig.barColorbg
                serie.barWidth = this.componentConfig.barWidthbg

                let radiusArr = this.componentConfig.barBorderRadius.split(',')
                let lt = radiusArr[0] || 0, rt = radiusArr[1] || 0, rb = radiusArr[2] || 0, lb = radiusArr[3] || 0
                serie.itemStyle.normal.barBorderRadius = [parseInt(lt), parseInt(rt), parseInt(rb), parseInt(lb)]
                serie.barGap = this.componentConfig.barGap
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
