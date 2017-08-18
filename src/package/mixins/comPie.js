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
      placeHolderStyle: {
        normal: {
          color: 'rgba(0,0,0,0)',
          label: {show: false},
          labelLine: {show: false}
        },
        emphasis: {
          color: 'rgba(0,0,0,0)'
        }
      },
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
        this.initMultiColor(this.uBizData)

        //初始化图表
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
      let newDataArr = []
      if (d.name && d.name instanceof Array && d.value && d.value instanceof Array) {
        let count = d.name.length
        let vcount = d.value.length
        if (count === vcount) {
          if (this.$options.diagrameType[0] === 'pie' || this.$options.diagrameType[0] === 'rosepie' || this.$options.diagrameType[0] === 'ciclepie') {
            let itemArr = []
            for (let i = 0; i < count; i++) {
              let itemObj = {
                name: d.name[i],
                value: d.value[i]
              }
              itemArr.push(itemObj)
            }
            newDataArr.push(itemArr)
          }
          if (this.$options.diagrameType[0] === 'multiciclepie') {
            for (let i = 0; i < count; i++) {
              let itemArray = []
              let name = d.name[i]
              let value = d.value[i]
              let holdValue = d.total[i] - d.value[i]
              let percent = value / d.total[i]
              let item = {
                name: name,
                value: value,
              }
              let holdItem = {
                name: name + 'hold',
                value: holdValue
              }
              itemArray.push(percent)
              itemArray.push(item)
              itemArray.push(holdItem)
              newDataArr.push(itemArray)
            }
          }
        } else {
          console.log('数据格式错误,请检查数据格式')
        }
      } else {
        console.log('数据格式错误,请检查数据格式')
      }
      //判断服务器端是否有业务数据传输过来
      if (newDataArr.length > 0) {
        if (this.$options.diagrameType[0] === 'pie' || this.$options.diagrameType[0] === 'rosepie' || this.$options.diagrameType[0] === 'ciclepie') {
          //如果是单柱状图,只需要第一条的值
          this.uBizData = [newDataArr[0]]
        }
        if (this.$options.diagrameType[0] === 'multiciclepie') {
          newDataArr.sort(function (a, b) {
            return b[0] - a[0]
          })
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
      //玫瑰饼图，普通饼图，环状图的多色设置
      if (this.$options.diagrameType[0] === 'pie' || this.$options.diagrameType[0] === 'ciclepie') {
        let data = d[0]
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
      }
      if (this.$options.diagrameType[0] === 'multiciclepie') {
        let data = d
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
            data[i][1]['itemStyle'] = itemStyle
            data[i][2]['itemStyle'] = this.placeHolderStyle
          }
        }
      }
    },

    /**
     * 初始化图表
     * @param d
     */
    initSeries(d) {
      //如果是多环图，则设置实际大小
      if (this.$options.diagrameType[0] === 'multiciclepie'){
        let compWidth = parseInt(this.uStyle.width)
        let compHeight = parseInt(this.uStyle.height)
        let minSize = Math.min(compHeight, compWidth)
        this.componentConfig.diagramSize = minSize - 40
      }
      if (d instanceof Array) {
        let series = []
        let count = d.length;
        let pieConfig = this.componentConfig
        for (let i = 0; i < count; i++) {
          let serie = $.extend(true, {}, this.serieTemp)
          if (this.$options.diagrameType[0] === 'pie' || this.$options.diagrameType[0] === 'ciclepie' || this.$options.diagrameType[0] === 'rosepie') {
            serie.name = d[i][0].name
            serie.data = d[i]
            if (this.$options.diagrameType[0] === 'pie' || this.$options.diagrameType[0] === 'rosepie'){
              serie.radius = pieConfig.pieRadius
              this.computeRealSize(parseInt(pieConfig.pieRadius) / 100)
            }
            if (this.$options.diagrameType[0] === 'ciclepie'){
              serie.radius = [pieConfig.pieInnerRadius,pieConfig.pieOutRadius]
              this.computeRealSize(parseInt(pieConfig.pieOutRadius) / 100)
            }
            if (this.$options.diagrameType[0] === 'rosepie'){
              serie.itemStyle.normal.color = pieConfig.roseColor
            }

            //设置标注的格式、位置
            serie.label.normal.position = pieConfig.labelPosition.value
            serie.label.normal.formatter = pieConfig.labelFormatter
            serie.labelLine.normal.length = pieConfig.lineLength
            serie.labelLine.normal.length2 = pieConfig.lineLength2
            serie.labelLine.normal.smooth = pieConfig.lineSmoth
            if (pieConfig.isLabel) {
              serie.label.normal.show = true
              serie.labelLine.normal.show = true
              if (pieConfig.labelColor === 'auto') {
                delete serie.labelLine.normal.lineStyle
                delete serie.label.normal.textStyle
              } else {
                let lineStyle = {
                  color: pieConfig.labelColor
                }
                let textStyle = {
                  color: pieConfig.labelColor
                }
                serie.labelLine.normal['lineStyle'] = lineStyle
                serie.label.normal['textStyle'] = textStyle
              }
            } else {
              serie.label.normal.show = false
              serie.labelLine.normal.show = false
            }
            if (pieConfig.fontSize) {
              if (!serie.label.normal['textStyle'])
                serie.label.normal['textStyle'] = {}
              $.extend(serie.label.normal['textStyle'], {fontSize: pieConfig.fontSize})
            } else {
              if (!serie.label.normal['textStyle'])
                serie.label.normal['textStyle'] = {}
              $.extend(serie.label.normal['textStyle'], {fontSize: 12})
            }
            if (pieConfig.lineWidth) {
              if (!serie.labelLine.normal['lineStyle'])
                serie.labelLine.normal['lineStyle'] = {}
              $.extend(serie.labelLine.normal['lineStyle'], {width: pieConfig.lineWidth})
            } else {
              if (!serie.labelLine.normal['lineStyle'])
                serie.labelLine.normal['lineStyle'] = {}
              $.extend(serie.labelLine.normal['lineStyle'], {width: 1})
            }

          }

          //初始化多换图各种属性
          if (this.$options.diagrameType[0] === 'multiciclepie'){

            let realSize = this.componentConfig.diagramSize
            let cicleWidth = parseInt(this.componentConfig.cicleWidth)
            let radius1 = realSize / 2 - (i * cicleWidth)
            let radius2 = radius1 - cicleWidth
            let radius = [radius1, radius2]
            serie['radius'] = radius
            serie['data'] = [d[i][1], d[i][2]]
            serie.name = serie.name + i
          }

          series.push(serie)
        }
        this.componentOptions.series = series
      } else {
        console.log('数据处理过程中发生错误')
      }
    },

    /**
     * 初始化图实际大小
     */
    computeRealSize(p) {
      //初始化环状图实际大小
      let compWidth = parseInt(this.uStyle.width)
      let compHeight = parseInt(this.uStyle.height)
      let minSize = Math.min(compHeight, compWidth)
      this.componentConfig.diagramSize = minSize * p
    },

  }
}
