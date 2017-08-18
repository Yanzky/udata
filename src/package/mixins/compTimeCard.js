import comp from './comp'
export default {
  mixins: [comp],
  data() {
    return {
      uBizData: null,
      cardStyle: []
    }
  },
  methods: {

    /**
     * 处理图的业务数据，这里的所有数据统一格式为：
     */
    convertData() {
      this.initStringFormat()
      //初始化轴数组
      this.initBizData()
      let that = this
      setInterval(function () {
        that.initBizData()
      },1000)

      //初始化翻牌器样式
      this.initCardStyle()
    },

    /**
     * 初始化图表数据
     * @param d
     */
    initBizData() {
      let newData = new Date()
      let newDataArr = []

      let config = this.componentConfig
      let splitStr = config.timeFormat.value
      let ymmStr = ""
      let timeStr = ""
      switch (splitStr) {
        case "年月日":
          ymmStr = newData.getFullYear() + "年" + (newData.getMonth() + 1) + "月" + newData.getDate() + "日"
          timeStr = ((newData.getHours()) + "").PadLeft(2,"0") + ":" + (newData.getMinutes() + "").PadLeft(2,"0") + ":" + (newData.getSeconds() + "").PadLeft(2,"0")
          newDataArr = [ymmStr,timeStr]
          break
        case "-":
          ymmStr = newData.getFullYear() + "-" + (newData.getMonth() + 1) + "-" + newData.getDate()
          timeStr = ((newData.getHours()) + "").PadLeft(2,"0") + ":" + (newData.getMinutes() + "").PadLeft(2,"0") + ":" + (newData.getSeconds() + "").PadLeft(2,"0")
          newDataArr = [ymmStr,timeStr]
          break
        case "/":
          ymmStr = newData.getFullYear() + "/" + (newData.getMonth() + 1) + "/" + newData.getDate()
          timeStr = ((newData.getHours()) + "").PadLeft(2,"0") + ":" + (newData.getMinutes() + "").PadLeft(2,"0") + ":" + (newData.getSeconds() + "").PadLeft(2,"0")
          newDataArr = [ymmStr,timeStr]
          break
      }
      this.uBizData = newDataArr
    },

    /**
     * 初始化多色柱的颜色
     */
    initCardStyle(d) {
      let config = this.componentConfig
      let style1 = {
        fontSize: config.fontSize,
        color: config.fontColor
      }
      let style2 = {
        fontSize: config.fontSize,
        color: config.fontColor,
        marginLeft: config.timeMargin
      }
      this.cardStyle = [style1,style2]
    },

    initStringFormat() {
      String.prototype.PadLeft = function(totalWidth, paddingChar)
      {
        if ( paddingChar != null )
        {
          return this.PadHelper(totalWidth, paddingChar, false);
        } else {
          return this.PadHelper(totalWidth, ' ', false);
        }
      }
      String.prototype.PadRight = function(totalWidth, paddingChar)
      {
        if ( paddingChar != null )
        {
          return this.PadHelper(totalWidth, paddingChar, true);
        } else {
          return this.PadHelper(totalWidth, ' ', true);
        }

      }
      String.prototype.PadHelper = function(totalWidth, paddingChar, isRightPadded)
      {

        if ( this.length < totalWidth)
        {
          var paddingString = new String();
          for (var i = 1; i <= (totalWidth - this.length); i++)
          {
            paddingString += paddingChar;
          }

          if ( isRightPadded )
          {
            return (this + paddingString);
          } else {
            return (paddingString + this);
          }
        } else {
          return this;
        }
      }
    }


  }
}
