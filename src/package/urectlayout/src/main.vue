<template>
  <div @click.stop="selectComponent" :class="[{ismouseover: !isProduct},{urectlayout: true},{isselected:Config.isSelected && !isProduct}]"
       :style="uStyle">
    <div class="rectcontainer" v-if="uRectStyle.rectTypeProp.value === '矩形框-横向'"
         :style="[rectStyle.borderTop,rectStyle.borderBotomm,rectStyle.bgColor]">
      <div class="upoint lefttoppoint" :style="[rectStyle.borderPointLeft,rectStyle.borderPointTop]"></div>
      <div class="upoint leftbottompoint" :style="[rectStyle.borderPointLeft,rectStyle.borderPointBotomm]"></div>
      <div class="upoint righttoppoint" :style="[rectStyle.borderPointRight,rectStyle.borderPointTop]"></div>
      <div class="upoint rightbottompoint" :style="[rectStyle.borderPointRight,rectStyle.borderPointBotomm]"></div>
    </div>
    <div class="rectcontainer" v-if="uRectStyle.rectTypeProp.value === '矩形框-竖向'"
         :style="[rectStyle.borderLeft,rectStyle.borderRight,rectStyle.bgColor]">
      <div class="upointvector lefttoppoint" :style="[rectStyle.borderPointLeft,rectStyle.borderPointTop]"></div>
      <div class="upointvector leftbottompoint" :style="[rectStyle.borderPointLeft,rectStyle.borderPointBotomm]"></div>
      <div class="upointvector righttoppoint" :style="[rectStyle.borderPointRight,rectStyle.borderPointTop]"></div>
      <div class="upointvector rightbottompoint"
           :style="[rectStyle.borderPointRight,rectStyle.borderPointBotomm]"></div>
    </div>
    <div class="rectcontainer" v-if="uRectStyle.rectTypeProp.value === '矩形框-封闭'"
         :style="[rectStyle.borderLeft,rectStyle.borderRight,rectStyle.borderTop,rectStyle.borderBotomm,rectStyle.bgColor]">
      <div class="upoint lefttoppoint" :style="[rectStyle.borderPointLeft,rectStyle.borderPointTop]"></div>
      <div class="upoint leftbottompoint" :style="[rectStyle.borderPointLeft,rectStyle.borderPointBotomm]"></div>
      <div class="upoint righttoppoint" :style="[rectStyle.borderPointRight,rectStyle.borderPointTop]"></div>
      <div class="upoint rightbottompoint" :style="[rectStyle.borderPointRight,rectStyle.borderPointBotomm]"></div>
    </div>
    <div class="rectcontainer" v-if="uRectStyle.rectTypeProp.value === '普通矩形框'"
         :style="[rectStyle.border,rectStyle.bgColor]"></div>
    <div class="rectcontainer" v-if="uRectStyle.rectTypeProp.value === '科幻矩形框'">
      <div class="movieborder">
        <canvas id="cline" width="100px" height="18px"></canvas>
      </div>
      <div class="moviebordertop" :style="rectStyle.movieBorderTop"></div>
      <div class="movieborderleft" :style="rectStyle.movieBorderLeft"></div>
      <div class="movieborderright" :style="rectStyle.movieBorderRight"></div>
      <div class="movieborderbottom" :style="rectStyle.movieBorderBottom"></div>
      <div class="movielefttop">
        <canvas id="ctopleft" width="60px" height="60px"></canvas>
      </div>
      <div class="movierightbottom">
        <canvas id="crightbottom" width="200px" height="100px"></canvas>
      </div>
    </div>
    <div class="rectcontainer" v-if="uRectStyle.rectTypeProp.value === '告警矩形框'" :style="[rectStyle.bgColor]">
      <div class="alertrect" :style="[rectStyle.topRectBgColor]"></div>
      <div class="alerticon" :style="[rectStyle.alertIconColor]"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>
      <div class="alerttopborder" :style="[rectStyle.topBorderColor]"></div>
      <div class="alerttopborderright" :style="[rectStyle.topBorderRightColor]"></div>
      <div class="alertbottomborderleft" :style="[rectStyle.bottomBorderLeftColor]"></div>
      <div class="alertbottomborder" :style="[rectStyle.bottomBorderBottomColor]"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../assets/styles/main";
  @import "../../../assets/styles/common";

  .urectlayout {
    cursor: pointer;
  }

  .rectcontainer {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .upoint {
    position: absolute;
    width: 20px;
    height: 12px;
  }

  .upointvector {
    position: absolute;
    width: 12px;
    height: 20px;
  }

  .lefttoppoint {
    left: 0;
    top: 0;

  }

  .leftbottompoint {
    left: 0;
    bottom: 0;
  }

  .righttoppoint {
    right: 0;
    top: 0;
  }

  .rightbottompoint {
    right: 0;
    bottom: 0;
  }

  .movielefttop {
    position: absolute;
    left: 0;
    top: 0;
    height: 60px;
    width: 60px;
  }

  .movierightbottom {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100px;
    width: 200px;
  }

  .movieborder {
    position: absolute;
    width: 120px;
    height: 8px;
    left: 60px;
    top: 26px;
  }

  .moviebordertop {
    position: absolute;
    width: calc(100% - 175px);
    height: 2px;
    left: 160px;
    top: 29px;
  }

  .movieborderleft {
    position: absolute;
    width: 2px;
    height: calc(100% - 75px);
    left: 30px;
    top: 60px;
  }

  .movieborderright {
    position: absolute;
    width: 2px;
    height: calc(100% - 74px);
    right: 15px;
    top: 29px;
  }

  .movieborderbottom {
    position: absolute;
    width: calc(100% - 60px);
    height: 2px;
    left: 30px;
    bottom: 15px;
  }

  .alertrect{
    position: absolute;
    width: 100px;
    height: 100px;
    border-right: 100px solid transparent;
  }
  .alerticon{
    position: absolute;
    transform: scale(2);
    top: 20px;
    left: 20px;
  }
  .alerttopborder{
    height: 10px;
    width: 100px;
    position: absolute;
    right: -5px;
    top: -5px;
  }
  .alerttopborderright{
    height: 100px;
    width: 10px;
    position: absolute;
    right: -5px;
    top: -5px;
  }
  .alertbottomborderleft{
    height: 100px;
    width: 10px;
    position: absolute;
    left: -5px;
    bottom: -5px;
  }
  .alertbottomborder{
    height: 10px;
    width: 100px;
    position: absolute;
    left: -5px;
    bottom: -5px;
  }
</style>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import * as types from '../../../store/mutation-types'
  import PropConfig from '../../../components/js/PropConfig'

  export default {
    name: 'URectLayout',
    props: ['Config','isProduct'],
    data() {
      return {
        uData: "",
        uStyle: {},
        //从配置文件里获取的原始样式对象，需要转换后才能应用到具体的dom上
        uRectStyle: {},
        //边框类型:普通矩形框,矩形框-横向,矩形框-竖向,科幻矩形框
        uRectType: "",
        //边框类型数组,在配置时需要将类型的options传递过去当下拉菜单原始数据:矩形框,科幻矩形框
        uRectTypeOptions: [
          {
            key: "普通矩形框",
            value: "普通矩形框"
          },
          {
            key: "矩形框-横向",
            value: "矩形框-横向"
          },
          {
            key: "矩形框-竖向",
            value: "矩形框-竖向"
          },
          {
            key: "科幻矩形框",
            value: "科幻矩形框"
          },
          {
            key: "告警矩形框",
            value: "告警矩形框"
          }
        ],
        //实际应用到边框上的样式
        rectStyle: {},
        uTransfObject: {},
        timer: null,
      }
    },
    created() {
      this.uStyle = this.Config.style
      this.uRectStyle = this.Config.componentStyle.uRectStyle
      this.uRectType = this.Config.componentStyle.uRectStyle.rectTypeProp.value
      this.initComponentStyle()
    },
    watch: {
      'Config.isSelected': {
        handler(curVal, oldVal){
          if (curVal) {
            this.setPropConfig()
          }
        },
        deep: true
      },
      'uTransfObject': {
        handler(curVal, oldVal){
          if (oldVal.borderColor) {
            this.rectStyle = {}
            clearInterval(this.timer)
            this.initComponentStyle()
          }
        },
        deep: true
      }
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
       * 选择组件
       */
      selectComponent(){
        let that = this
        this.Config.isSelected = false
        this.Config.isSelected = true

        let layouts = this.definition.layouts
        let count = layouts.length
        for (let i = 0; i < count; i++) {
          layouts[i].isSelected = false
          layouts[i].isSubComponentSelected = false

          //deselect no selecte component
          let components = layouts[i].components
          let compcount = components.length
          for (let j = 0; j < compcount; j++) {
            if (components[j].id !== this.Config.id) {
              components[j].isSelected = false
            }
            //给选中的组件外图层增加被选中标志
            if (components[j].id === this.Config.id) {
              layouts[i].isSubComponentSelected = true
            }
          }
        }

        this.setComponentStatus(false)
        setTimeout(function () {
          that.setComponentStatus(true)
        })
      },

      /**
       * 初始化组件样式
       */
      initComponentStyle() {
        let _uRectStyle = this.uRectStyle
        let _uRectType = this.uRectStyle.rectTypeProp.value
        if (_uRectType.indexOf("普通矩形框") >= 0) {
          let styleBorder = {
            border: "1px solid " + _uRectStyle.borderColor
          }
          let styleBgColor = {
            backgroundImage: _uRectStyle.bgColor,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100%",
          }
          this.rectStyle['border'] = styleBorder
          this.rectStyle['bgColor'] = styleBgColor
        }
        if (_uRectType.indexOf("矩形框-") >= 0) {
          let styleBorderBottom = {
            borderBottom: "1px solid " + _uRectStyle.borderColor
          }
          let styleBorderTop = {
            borderTop: "1px solid " + _uRectStyle.borderColor
          }
          let styleBorderLeft = {
            borderLeft: "1px solid " + _uRectStyle.borderColor
          }
          let styleBorderRight = {
            borderRight: "1px solid " + _uRectStyle.borderColor
          }

          //设置四角边框样式
          let stylePointBorderBottom = {
            borderBottom: "3px solid " + _uRectStyle.borderColor
          }
          let stylePointBorderTop = {
            borderTop: "3px solid " + _uRectStyle.borderColor
          }
          let stylePointBorderLeft = {
            borderLeft: "3px solid " + _uRectStyle.borderColor
          }
          let stylePointBorderRight = {
            borderRight: "3px solid " + _uRectStyle.borderColor
          }

          let styleBgColor = {
            backgroundImage: _uRectStyle.bgColor,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100%",
          }
          this.rectStyle['borderBotomm'] = styleBorderBottom
          this.rectStyle['borderTop'] = styleBorderTop
          this.rectStyle['borderLeft'] = styleBorderLeft
          this.rectStyle['borderRight'] = styleBorderRight

          this.rectStyle['borderPointBotomm'] = stylePointBorderBottom
          this.rectStyle['borderPointTop'] = stylePointBorderTop
          this.rectStyle['borderPointLeft'] = stylePointBorderLeft
          this.rectStyle['borderPointRight'] = stylePointBorderRight

          this.rectStyle['bgColor'] = styleBgColor
        }
        if (_uRectType === '科幻矩形框') {
          this.rectStyle['leftCicleColor'] = this.uRectStyle.leftCicleColor
          this.rectStyle['movieBorderTop'] = {
              borderTop: "1px solid " + this.uRectStyle.borderColor
          }
          this.rectStyle['movieBorderBottom'] = {
            borderBottom: "1px solid " + this.uRectStyle.borderColor
          }
          this.rectStyle['movieBorderLeft'] = {
            borderLeft: "1px solid " + this.uRectStyle.borderColor
          }
          this.rectStyle['movieBorderRight'] = {
            borderRight: "1px solid " + this.uRectStyle.borderColor
          }
          this.rectStyle['sepcBorderColor'] = this.uRectStyle.specBorderColor
          let that = this
          setTimeout(function () {
            that.drawMovie()
          })
        }
        if (_uRectType === '告警矩形框') {
          let styleBgColor = {
            backgroundImage: _uRectStyle.bgColor,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100%",
          }
          this.rectStyle['bgColor'] = styleBgColor

          //左上角三角形颜色
          this.rectStyle['topRectBgColor'] = {
              borderTop: "100px solid " + _uRectStyle.alertRectColor
          }

          //右上角线条颜色
          this.rectStyle['topBorderColor'] = {
            borderTop: "2px solid " + _uRectStyle.alertRectColor
          }

          //右侧线条颜色
          this.rectStyle['topBorderRightColor'] = {
            borderRight: "2px solid " + _uRectStyle.alertRectColor
          }

          //左下角左侧线条颜色
          this.rectStyle['bottomBorderLeftColor'] = {
            borderLeft: "2px solid " + _uRectStyle.alertRectColor
          }

          //左下角下侧线条颜色
          this.rectStyle['bottomBorderBottomColor'] = {
            borderBottom: "2px solid " + _uRectStyle.alertRectColor
          }

          this.rectStyle['alertIconColor'] = {
              color: _uRectStyle.alertIconColor
          }
        }
      },

      /**
       * 设置组件属性
       */
      setPropConfig() {
        this.uTransfObject = this.uRectStyle
        let propertyArr = []
        let propertyObject = $.extend(true, {}, PropConfig.props)
        propertyObject.type = 'uRectLayout-rectStyle'
        propertyObject.title = '矩形框设置'
        propertyObject.props = this.uTransfObject
        propertyArr.push(propertyObject)
        this.addPublicPropConfig(propertyArr)
      },

      drawMovie(){

        let movieStrokeColor = this.rectStyle.leftCicleColor
        let stroke1 = movieStrokeColor.substr(0,(movieStrokeColor.length - 2)) + "0.6)"
        let stroke2 = movieStrokeColor.substr(0,(movieStrokeColor.length - 2)) + "0.5)"
        let stroke3 = movieStrokeColor.substr(0,(movieStrokeColor.length - 2)) + "0.3)"
        let stroke4 = movieStrokeColor.substr(0,(movieStrokeColor.length - 2)) + "0.2)"
        let stroke5 = movieStrokeColor.substr(0,(movieStrokeColor.length - 2)) + "0.16)"

        let sepcBorderColor = this.rectStyle.sepcBorderColor
        //左上角canvas
//        let clt = document.getElementById('ctopleft')
//        let ctxClt = clt.getContext('2d')

        //绘制右上角几个圆弧
        let cicleCenter = {
          x: 30,
          y: 30
        }
        let r1 = 29
        let r2 = 22
        let r3 = 16
        let r4 = 12
        let r5 = 5
        //第一圈
        this.drawCicle(cicleCenter.x,cicleCenter.y,r1,0.8 * Math.PI, 1.3 * Math.PI,1,stroke1)

        //第二圈
        let that = this
        let speed1 = 0.8
        let speed2 = 1.4
        let speed3 = 0
        let speed4 = 0.9
        this.timer = setInterval(function () {
          speed1 += 0.1
          speed2 += 0.1
          speed3 -= 0.1
          speed4 -= 0.1
          that.drawCicleAmination(cicleCenter.x,cicleCenter.y,r2,speed1, speed2,5,stroke1)
          that.drawCicle(cicleCenter.x,cicleCenter.y,r2,0.8 * Math.PI, 1.4 * Math.PI,5,stroke1)
          that.drawCicle(cicleCenter.x,cicleCenter.y,r2,0.4 * Math.PI, 0.8 * Math.PI,5,stroke4)
          that.drawCicle(cicleCenter.x,cicleCenter.y,r2,1.4 * Math.PI, 1.8 * Math.PI,5,stroke4)
          that.drawCicle(cicleCenter.x,cicleCenter.y,r2,1.9 * Math.PI, 0.3 * Math.PI,5,stroke4)

          //第三圈
          that.drawCicle(cicleCenter.x,cicleCenter.y,r3,0, 2 * Math.PI,3,stroke5)
          that.drawCicle(cicleCenter.x,cicleCenter.y,r3,0.4 * Math.PI, Math.PI,1,stroke1)

          //第三圈
          that.drawCicle(cicleCenter.x,cicleCenter.y,r4,1.6 * Math.PI, 0,3,stroke3)
          that.drawCicle(cicleCenter.x,cicleCenter.y,r4,0, 0.9 * Math.PI,3,stroke2)
          that.drawCicle(cicleCenter.x,cicleCenter.y,r4,speed3, speed4,3,stroke2)

          //画中心园
          that.drawCileFill(cicleCenter.x,cicleCenter.y,r5,stroke3)

          //画线
          that.drawPath(0,4,50,4,8,sepcBorderColor)
          that.drawPath(50,4,80,4,6,sepcBorderColor)
          that.drawPath(80,4,100,4,4,sepcBorderColor)

          //画右下角的线
          that.drawRightBotoomPath(185,55,155,85,1,movieStrokeColor)
          that.drawRightBotoomPath(180,60,160,80,4,sepcBorderColor)
          //右侧主斜线
          that.drawRightBotoomPath(162,93,190,65,1,movieStrokeColor)
          that.drawRightBotoomPath(190,65,190,40,1,movieStrokeColor)
          that.drawRightBotoomPath(190,40,190,35,3,sepcBorderColor)

          that.drawRightBotoomPath(165,90,85,90,1,movieStrokeColor)
          that.drawRightBotoomPath(162,93,82,93,1,movieStrokeColor)

          that.drawRightBotoomPath(85,90,70,105,1,movieStrokeColor)
          that.drawRightBotoomPath(75,99,78,99,4,sepcBorderColor)
        },50)
      },

      //画圆弧
      drawCicle(x,y,r,from,to,lw,strokeColor) {
        let clt = $($(this.$el).children().children()[5]).children()[0]
        let ctx = clt.getContext('2d')
        ctx.beginPath()
        ctx.strokeStyle = strokeColor
        ctx.lineWidth = lw
        ctx.arc(x, y, r, from, to, false)
        ctx.stroke()
      },

      drawCicleAmination(x,y,r,from,to,lw,strokeColor) {
        let clt = $($(this.$el).children().children()[5]).children()[0]
        let ctx = clt.getContext('2d')
        ctx.clearRect(0,0,clt.width,clt.height)
        ctx.beginPath()
        ctx.strokeStyle = strokeColor
        ctx.lineWidth = lw
        ctx.arc(x, y, r, from, to, false)
        ctx.stroke()
      },

      //画填充圆
      drawCileFill(x,y,r,fillColor) {
        let clt = $($(this.$el).children().children()[5]).children()[0]
        let ctx = clt.getContext('2d')
        ctx.beginPath()
        ctx.fillStyle = fillColor
        ctx.arc(x, y, r, 0, 2 * Math.PI, false)
        ctx.fill()
      },

      //画线
      drawPath(x,y,x1,y1,lw,strokeColor) {
        let clt = $($(this.$el).children().children()[0]).children()[0]
        let ctx = clt.getContext('2d')
        ctx.beginPath()
        ctx.strokeStyle = strokeColor
        ctx.lineWidth = lw
        ctx.moveTo(x,y)
        ctx.lineTo(x1,y1)
        ctx.stroke()
      },

      //画右下角线
      drawRightBotoomPath(x,y,x1,y1,lw,strokeColor) {
        let clt = $($(this.$el).children().children()[6]).children()[0]
        let ctx = clt.getContext('2d')
        ctx.strokeStyle = strokeColor
        ctx.beginPath()
        ctx.lineWidth = lw
        ctx.moveTo(x,y)
        ctx.lineTo(x1,y1)
        ctx.stroke()
      },
    }
  }
</script>
