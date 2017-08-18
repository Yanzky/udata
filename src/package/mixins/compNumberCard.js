import comp from './comp'
export default {
  mixins: [comp],
  data() {
    return {
      uxAxisData: [],
      uBizData: null,
      cardStyle: {}
    }
  },
  methods: {

    /**
     * 处理图的业务数据，这里的所有数据统一格式为：
     */
    convertData(d) {
      if (d.hasOwnProperty('value')) {

        //初始化轴数组
        this.initBizData(d)

        //初始化翻牌器样式
        this.initCardStyle(this.uBizData)
      } else {
        console.log('数据格式错误,请检查数据格式')
      }
    },

    /**
     * 初始化图表数据
     * @param d
     */
    initBizData(d) {
      let numberLength = this.componentConfig.numberLength
      let newData = d.value[0] + ""
      let newDataArr = newData.split('')
      let count = newDataArr.length
      if(numberLength > count){
        let diffCount = numberLength - count
        for (let i = 0 ; i < diffCount ; i++){
          newDataArr.unshift("0")
        }
      }
      this.uBizData = newDataArr
    },

    /**
     * 初始化多色柱的颜色
     */
    initCardStyle(d) {
      let newDataArr = []
      let count = d.length
      for (let i = 0 ; i < count ; i++){
        let style = {}
        style['position'] = 'absolute'
        style['float'] = 'left'
        style['left'] = ((parseInt(this.componentConfig.width) * i) + (i * parseInt(this.componentConfig.itemMargin))) + "px"
        style['top'] = 0
        style['fontSize'] = this.componentConfig.fontSize
        style['color'] = this.componentConfig.fontColor
        style['width'] = this.componentConfig.width
        style['height'] = this.componentConfig.height
        style['lineHeight'] = this.componentConfig.height
        style['textAlign'] = 'center'
        style['backgroundImage'] = this.componentConfig.backgroundImage
        style['backgroundRepeat'] = this.componentConfig.backgroundRepeat
        style['backgroundPosition'] = this.componentConfig.backgroundPosition
        style['backgroundSize'] = this.componentConfig.backgroundSize

        let cornerStyle1 = {
          width: this.componentConfig.cornerWidth,
          height: this.componentConfig.cornerHeight,
          borderLeft: this.componentConfig.cornerSize + " solid " + this.componentConfig.borderColor,
          borderTop: this.componentConfig.cornerSize + " solid " + this.componentConfig.borderColor,
        }
        let cornerStyle2 = {
          width: this.componentConfig.cornerWidth,
          height: this.componentConfig.cornerHeight,
          borderTop: this.componentConfig.cornerSize + " solid " + this.componentConfig.borderColor,
          borderRight: this.componentConfig.cornerSize + " solid " + this.componentConfig.borderColor,
        }
        let cornerStyle3 = {
          width: this.componentConfig.cornerWidth,
          height: this.componentConfig.cornerHeight,
          borderRight: this.componentConfig.cornerSize + " solid " + this.componentConfig.borderColor,
          borderBottom: this.componentConfig.cornerSize + " solid " + this.componentConfig.borderColor,
        }
        let cornerStyle4 = {
          width: this.componentConfig.cornerWidth,
          height: this.componentConfig.cornerHeight,
          borderBottom: this.componentConfig.cornerSize + " solid " + this.componentConfig.borderColor,
          borderLeft: this.componentConfig.cornerSize + " solid " + this.componentConfig.borderColor,
        }

        let dataItem = {
          style: style,
          value: d[i],
          cornerStyle: [cornerStyle1,cornerStyle2,cornerStyle3,cornerStyle4]
        }
        newDataArr.push(dataItem)
      }
      this.uBizData = newDataArr
    },


  }
}
