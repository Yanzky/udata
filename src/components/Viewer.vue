<template>
  <div>
    <!--画布及画布容器-->
    <div @mousewheel="onMouseZoom" id="container" :style="containerStyle"
         :class="{ canvas: !isFullScreen && !isZoomOneScreen }">
      <div id="canvas" :style="[canvasStyle, zoomStyle]">
        <div @click="layoutEventClick(item.id)" v-for="item in definition.layouts" :style="item.style"
             v-if="item.style.isShow"
             class="cbox">
          <div style="position: relative;height: 100%;width:100%">
            <component v-if="subcomponent.type" v-for="subcomponent in item.components"
                       :is="subcomponent.type"
                       :Config="subcomponent"
                       :isProduct="true"></component>
            <div v-show="item.isResizing" class="resizetips">w:{{item.style.width}},h:{{item.style.height}}</div>
            <div v-show="item.isMoving" class="movetips">top:{{item.style.top}},left:{{item.style.left}}</div>
            <div v-show="item.isSelected" class="resizebtn"></div>
          </div>
        </div>
      </div>
    </div>

    <!--右下角放大缩小和最大化工具栏-->
    <div v-if="isZoomBox" class="zoombox">
      <div>
        <el-slider
          v-model="zoomValue"
          :step="0.1"
          :min="0"
          :max="2"
          :format-tooltip="slideToolTip"
          @change="onSliderChange">
        </el-slider>
      </div>
      <el-tooltip class="item" effect="dark" content="全屏投放" placement="top-start">
        <div class="toolbutton"><i @click="onFullScreen" class="fa fa-expand" aria-hidden="true"></i></div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="标准投放" placement="top-start">
        <div v-if="!isZoomOneScreen" class="toolbutton"><i @click="onZoomToOneSize" class="fa fa-arrows-alt"
                                                           aria-hidden="true"></i></div>
        <div v-if="isZoomOneScreen" class="toolbutton"><i @click="onExitZoomToOneSize" class="fa fa-undo"
                                                          aria-hidden="true"></i></div>
      </el-tooltip>
      <!--<el-tooltip class="item" effect="dark" content="帮 助" placement="top-start">-->
      <!--<div class="toolbutton"><i class="fa fa-keyboard-o" aria-hidden="true"></i>-->
      <!--</div>-->
      <!--</el-tooltip>-->
    </div>
    <div v-if="isLoadingData && loadingCount === 1" class="loadingcontainer">
      <div class="loadingspan">
        <div class="k-ball-holder3">
          <div class="k-ball7a"></div>
          <div class="k-ball7b"></div>
          <div class="k-ball7c"></div>
          <div class="k-ball7d"></div>
        </div>
        <div class="loadingtext">正在加载图表数据...</div>
      </div>
    </div>
    <div v-if="isLoadingData && loadingCount !== 1" style="position: absolute;top: 0;right: 0;text-align: center;font-size: 12px;color:#a7a7a7">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <div>正在刷新数据...</div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/styles/main";
  @import "../assets/styles/common";

  .canvas {
    border-radius: 2px;
    padding: 2px;
    border: 1px dashed #2D81FF;
    box-shadow: 0 1px 4px rgba(0, 0, 255, 0.5);
    position: absolute;
  }

  .leftslider {
    position: absolute;
    height: 100%;
    overflow: hidden;
    z-index: 100;
  }

  .rightslider {
    position: absolute;
    right: 0;
    height: 100%;
    overflow: hidden;
    z-index: 100;
  }

  .componentcontainer {
    position: absolute;
    left: 50px;
    top: 55px;
    width: 200px;
    height: calc(100% - 150px);
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    overflow: hidden;
    z-index: 101;
    .ctitlediv {
      height: 30px;
      width: 100%;
      background-color: #475669;
      border-top-right-radius: 2px;
      border-top-left-radius: 2px;
      cursor: move;
      color: #fff;
      font-size: 12px;
      line-height: 30px;
      padding-left: 5px;
      i {
        float: right;
        padding-top: 9px;
        padding-right: 10px;
        cursor: pointer;
      }
    }
    .ctable {
      height: calc(100% - 30px);
      width: 100%;
      overflow: auto;
      font-size: 12px;
    }
  }

  .resizebtn {
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #fff;
    cursor: nwse-resize;
  }

  .udialog {
    position: fixed;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    > div {
      width: 300px;
      height: 200px;
      background-color: #f8f8f8;
      margin: 0 auto;
      margin-top: 100px;
      border-radius: 2px;
      > div:nth-child(1) {
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        color: #777;
        padding-left: 15px;
      }
      > div:nth-child(2) {
        > div {
          font-size: 12px;
          color: #777;
          padding-left: 20px;
          height: 25px;
          line-height: 25px;
        }
      }
    }
  }

  .avatar-uploader {
    width: 100% !important;
  }

</style>

<script>
  import ComponentTemplate from './js/ComponentTemplate'
  import api from '../util/api'
  import draggable from 'vuedraggable'
  import LayoutSlider from './LayoutSlider.vue'
  import RightSlider from './RightSlider.vue'
  import ComponentList from './ComponentList.vue'
  import {
    USingleText,
    UPie,
    UPieCicle,
    URectLayout,
    U2DMapChina,
    U2DMapWorld,
    UGlobe,
    ULiquidFill,
    UIframe,
    UBar,
    ULine,
    UPieRose,
    UPieMultiCicle,
    UBarMulti,
    UBarLRHoriz,
    ULineMulti,
    ULineArea,
    ULineAreaMulti,
    UBarBG,
    URadar,
    UNumberCard,
    UTimeCard,
    UDashboard,
    UBarProcess,
    UBarIcon
  } from '../package/index'
  import PropConfig from './js/PropConfig'

  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import * as types from '../store/mutation-types'

  export default {
    data() {
      return {
        //定义文件ID，从url获取
        defId: null,
        //场景对象
        sceneObj: {},
        //是否全屏，这里是控制样式，全屏时虚线和阴影不显示
        isFullScreen: false,
        //是否标准投放
        isZoomOneScreen: false,
        //画布样式
        canvasStyle: {},
        //容器样式
        containerStyle: {},
        //放大缩小画布的样式
        zoomStyle: {},
        //当前是不是显示toolbox
        isZoomBox: true,
        //画布放大缩小的值
        zoomValue: 0,
        //窗口高度
        windowHeight: 0,
        //窗口宽度
        windowWidth: 0,
        //点击事件函数数组
        eventClickList: [],
        //存放画布中图层的哈希对象
        layoutsHash: {},
        //周期事件存放数组
        eventCircleList: [],
        //判断是否正在加载数据
        isLoadingData: false,
        //页面加载数据次数
        loadingCount: 0
      }
    },
    created() {
      this.windowHeight = this.getBodyHeight()
      this.windowWidth = this.getBodyWidth()
      this.defId = this.$route.query.id
      //初始化画布
      //1.初始化定义文件
      this.initDefinitions(this.defId)
    },
    mounted() {
      let that = this
      //画布移动
      $("#container").mousedown(
        function (event) {
          if (event.target.id === 'canvas' || event.target.id === 'container') {
            let isMove = true;
            let abs_x = event.pageX - $("#container").offset().left;
            let abs_y = event.pageY - $("#container").offset().top;
            $(document).mousemove(function (event) {
                if (isMove) {
                  let obj = $("#container");
                  obj.css({'left': event.pageX - abs_x, 'top': event.pageY - abs_y});
                }
              }
            ).mouseup(
              function () {
                isMove = false;
              }
            );
          }
        }
      )

      document.addEventListener('webkitfullscreenchange', function (e) {
        let width = window.screen.width
        let height = window.screen.height
        if (!document.webkitIsFullScreen) {
          let styles = that.resizeCanvas(that.getCanvasWidth(that.definition), that.getCanvasHeight(that.definition), null)
          that.zoomStyle = styles[0]
          that.containerStyle = styles[1]
          that.zoomValue = styles[2]
        }
        else {
          that.isFullScreen = true
          let _zoomValue = width / parseInt(that.canvasStyle.width)
          that.zoomStyle = {
            'transform': 'scale(' + _zoomValue + ')',
            '-webkit-transform': 'scale(' + _zoomValue + ')',
            'transform-origin': 'center center',
            '-webkit-transform-origin': 'center center',
            'top': '0px',
            'left': '0px',
          }
        }
      })

      window.onresize = function () {
        if (!that.isFullScreen) {
          that.windowHeight = that.getBodyHeight()
          that.windowWidth = that.getBodyWidth()

          let styles = that.resizeCanvas(that.getCanvasWidth(that.definition), that.getCanvasHeight(that.definition), null)
          that.zoomStyle = styles[0]
          that.containerStyle = styles[1]
          that.zoomValue = styles[2]
        }

      }

      document.onkeydown = this.onKeyAction
    },
    computed: {
      ...mapGetters({
        definition: 'editorDefinition',
        databaseHost: 'databaseHost'
      }),
    },
    watch: {
      'definition.canvas': {
        handler(curVal, oldVal){
          this.onSliderChange()
        },
        deep: true
      },
    },
    methods: {
      ...mapMutations({
        setDefinition: [types.SET_EDITORDEF],
        setComponentsDataObj: [types.SET_COMPONENTSDATAOBJ]
      }),

      /**
       * 放大缩小动作
       */
      onSliderChange() {
        let styles = this.resizeCanvas(this.getCanvasWidth(this.definition), this.getCanvasHeight(this.definition), this.zoomValue)
        this.zoomStyle = styles[0]
        this.containerStyle = styles[1]
      },

      /**
       * 把放大缩小杆的提示从小数点格式化为%
       */
      slideToolTip(value) {
        return (value * 100).toFixed(0) + "%"
      },

      /**
       * TODO:使用鼠标滚轮放大缩小画布
       */
      onMouseZoom(event) {
      },

      /**
       * 全屏投放动作
       */
      onFullScreen() {
        let el = document.getElementById("canvas")
        el.webkitRequestFullScreen()
      },

      /**
       * 1倍标准投放动作
       */
      onZoomToOneSize() {
        this.zoomValue = 1
        this.isZoomOneScreen = true
        this.isZoomBox = false
        let styles = this.resizeCanvas(this.getCanvasWidth(this.definition), this.getCanvasHeight(this.definition), this.zoomValue)
        this.zoomStyle = styles[0]
        this.containerStyle = styles[1]
      },

      onExitZoomToOneSize() {
        this.isZoomOneScreen = false
        this.isZoomBox = true
        let styles = this.resizeCanvas(this.getCanvasWidth(this.definition), this.getCanvasHeight(this.definition), null)
        this.zoomStyle = styles[0]
        this.containerStyle = styles[1]
      },

      /**
       * 按下ESC判断是否在全屏状态，如果是，就退出全屏
       * @param event
       */
      onKeyAction(event) {
        if (event.keyCode === 27 && this.isZoomOneScreen) {
          this.onExitZoomToOneSize()
        }
      },


      /**
       * 获取窗口高度
       * @returns {number}
       */
      getBodyHeight() {
        return document.documentElement.clientHeight
      },

      /**
       * 获取窗口宽度
       * @returns {number}
       */
      getBodyWidth() {
        return document.documentElement.clientWidth
      },

      /**
       * 获取画布宽度
       * @param def
       * @returns {Number}
       */
      getCanvasWidth(def) {
        return parseInt(def.canvas.style.width)
      },

      /**
       * 获取画布高度
       */
      getCanvasHeight(def){
        return parseInt(def.canvas.style.height)
      },

      /**
       * 初始化定义文件，有几种情况
       * 1.当前有ID，直接按照ID从服务器端获取
       * 2.当前无ID，为新建画布，直接初始化模板数据
       * 3.从文件打开,这种情况暂时todo
       */
      initDefinitions(defid) {
        let that = this
        let definition = {}
        //从服务器端获取
        if (defid) {
          let promise = api.getSceneById(defid)
          promise.then(function (response) {
            let sceneObj = response.data
            that.sceneObj = sceneObj
            definition = JSON.parse(sceneObj.definition)

            //patch:控制图层是否显示，原来的定义文件中没有该项，所以需要默认添加成显示
            if (definition.layouts instanceof Array) {
              let count = definition.layouts.length
              for (let i = 0; i < count; i++) {
                if (!definition.layouts[i].style.hasOwnProperty('isShow')) {
                  definition.layouts[i].style['isShow'] = true
                }
              }
            }

            that.sceneObj.definition = $.extend(true, {}, definition)
            that.setDefinition(definition)
            that.getComponentData(definition)

            //定时器，定时执行获取数据
            let heartbit = definition.canvas.heartbeat
            setInterval(() => {
              that.getComponentData(definition)
            }, (heartbit * 1000))
            that.initCanvas(that.definition)
            that.initLayoutsHash(that.definition)
            that.initEventConfig(that.definition)
            that.runCircleEvent()
          }).catch(function (error) {
            console.log(error)
            alert("从服务器端获取数据发生错误,请联系系统管理员")
          })
        } else {
          definition.definition = $.extend(true, {}, ComponentTemplate.definition)
          definition.canvas = $.extend(true, {}, ComponentTemplate.canvas)
          definition.layouts = []
          this.setDefinition(definition)
          this.initCanvas(this.definition)
        }

      },

      getComponentData(def) {
        this.loadingCount += 1
        this.isLoadingData = true
        let conditionArr = []
        let layouts = def.layouts
        let layoutsLength = layouts.length
        for (let i = 0; i < layoutsLength; i++) {
          let components = layouts[i].components
          if (components instanceof Array) {
            let componentsLength = components.length
            for (let j = 0; j < componentsLength; j++) {
              let cid = components[j].id
              let datasource = components[j].datasource
              let dstype = datasource.type
              if (dstype === "REST API") {
                let condition = {
                  type: datasource.url.reqtype,
                  url: datasource.url.value,
                  condition: "",
                  cid: cid
                }
                if (!condition.url)
                  condition.url = 'http://localhost:8000/udatav/getdemo?type=' + components[j].type
                conditionArr.push(condition)
              }
              if (dstype === "数据库") {
                let dbParam = {
                  type: components[j].type,
                  heartbeat: components[j].heartbeat,
                  cid: components[j].id,
                  legend: datasource.legend,
                  datasource: {
                    dType: "db",
                    sql: datasource.sql,
                    sourceId: "1",
                    dbInfo: {
                      dbHost: datasource.database.host,
                      dbDatabase: datasource.database.dbinstance,
                      dbType: datasource.database.dbtype,
                      dbUser: datasource.database.username,
                      dbPwd: datasource.database.passwd,
                      dbPort: datasource.database.port
                    }
                  }
                }
                let url = this.databaseHost + '/ds/data/queryDataByComponent'
                let condition = {
                  type: "POST",
                  url: url,
                  condition: JSON.stringify(dbParam),
                  cid: cid
                }
                conditionArr.push(condition)
              }
            }
          }

        }
        let promise = api.apiRedirectBatch(conditionArr)
        promise.then((response) => {
          let data = response.data.data
          this.setComponentsDataObj(data)
          this.isLoadingData = false
        })
      },


      /**
       * 初始化画布样式
       */
      initCanvas(def) {
        let styles = []
        if (def) {
          styles.push(def.canvas.style)
        }
        styles = styles.concat(this.resizeCanvas(this.getCanvasWidth(def), this.getCanvasHeight(def), null))
        //3.给一系列样式赋值
        this.canvasStyle = styles[0]
        this.zoomStyle = styles[1]
        this.containerStyle = styles[2]
        this.zoomValue = styles[3]
      },

      /**
       * 重置画布
       * @param canvasWidth
       * @param zoomScale
       * @returns {*}
       */
      resizeCanvas(canvasWidth, canvasHeight, zoomScale) {

        this.isFullScreen = false
        //计算画布样式的缩小比例
        let _zoomScale = zoomScale
        let _zoomStyle = {}
        if (!zoomScale) {
          _zoomScale = (this.windowWidth * 0.7) / canvasWidth
        }
        if (_zoomScale) {
          _zoomStyle = {
            'transform': 'scale(' + _zoomScale + ')',
            'transform-origin': '0 0',
            '-webkit-transform': 'scale(' + _zoomScale + ')',
            '-webkit-transform-origin': '0 0',
          }
        }

        //计算容器大小
        let _boxHeight = canvasHeight * _zoomScale + 8
        let _boxWidth = canvasWidth * _zoomScale + 8
        let _boxTop = (this.windowHeight - _boxHeight) / 2
        let _boxLeft = (this.windowWidth - _boxWidth) / 2
        if (_boxTop < 0) {
          _boxTop = 0
        }
        if (_boxLeft < 0) {
          _boxLeft = 0
        }
        let _boxStyle = {
          height: _boxHeight + "px",
          width: _boxWidth + "px",
          top: _boxTop + "px",
          left: _boxLeft + "px"
        }
        this.zoomValue = _zoomScale

        return [_zoomStyle, _boxStyle, _zoomScale]
      },

      /**
       * 初始化事件
       */
      initEventConfig(def){
        this.eventClickList = []
        this.eventCircleList = []
        let that = this
        let count = def.layouts.length
        for (let i = 0; i < count; i++) {
          let eventItem = def.layouts[i].eventConfig
          if (eventItem && eventItem instanceof Array) {
            let lyoutId = def.layouts[i].id
            let eCount = eventItem.length
            for (let j = 0; j < eCount; j++) {
              let eventType = eventItem[j].eventType
              let actionType = eventItem[j].actionType
              let runnerObjId = eventItem[j].runnerObjId
              let toX = eventItem[j].toX
              let toY = eventItem[j].toY
              let isRepeat = eventItem[j].isRepeat
              let lifeTime = eventItem[j].lifeTime
              if (eventType === "单击") {
                switch (actionType) {
                  case "隐藏":
                    let hiddenFunc = function () {
                      let layoutObj = that.layoutsHash[runnerObjId]
                      if (layoutObj) {
                        layoutObj.style.isShow = false
                      }
                    }
                    let eventHiddenObj = {
                      id: lyoutId,
                      event: hiddenFunc
                    }
                    this.eventClickList.push(eventHiddenObj)
                    break
                  case "显示":
                    let showFunc = function () {
                      let layoutObj = that.layoutsHash[runnerObjId]
                      if (layoutObj) {
                        layoutObj.style.isShow = true
                      }
                    }
                    let eventShowObj = {
                      id: lyoutId,
                      event: showFunc
                    }
                    this.eventClickList.push(eventShowObj)
                    break
                  case "移动":
                    let moveFunc = function () {
                      let layoutObj = that.layoutsHash[runnerObjId]
                      if (layoutObj) {
                        layoutObj.style.top = toY + "px"
                        layoutObj.style.left = toX + "px"
                      }
                    }
                    let eventMoveObj = {
                      id: lyoutId,
                      event: moveFunc
                    }
                    this.eventClickList.push(eventMoveObj)
                    break
                }
              }

              //周期执行
              if (eventType === "周期") {
                switch (actionType) {
                  case "隐藏":
                    let hiddenFunc = function () {
                      if (isRepeat) {
                        setInterval(function () {
                          let layoutObj = that.layoutsHash[runnerObjId]
                          if (layoutObj) {
                            layoutObj.style.isShow = false
                          }
                        }, lifeTime * 1000)
                      } else {
                        setTimeout(function () {
                          let layoutObj = that.layoutsHash[runnerObjId]
                          if (layoutObj) {
                            layoutObj.style.isShow = false
                          }
                        }, lifeTime * 1000)
                      }
                    }
                    let eventHiddenObj = {
                      id: lyoutId,
                      event: hiddenFunc
                    }
                    this.eventCircleList.push(eventHiddenObj)
                    break
                  case "显示":
                    let showFunc = function () {
                      if (isRepeat) {
                        setInterval(function () {
                          let layoutObj = that.layoutsHash[runnerObjId]
                          if (layoutObj) {
                            layoutObj.style.isShow = true
                          }
                        }, lifeTime * 1000)
                      } else {
                        setTimeout(function () {
                          let layoutObj = that.layoutsHash[runnerObjId]
                          if (layoutObj) {
                            layoutObj.style.isShow = true
                          }
                        }, lifeTime * 1000)
                      }
                    }
                    let eventShowObj = {
                      id: lyoutId,
                      event: showFunc
                    }
                    this.eventCircleList.push(eventShowObj)
                    break
                  case "移动":
                    let moveFunc = function () {
                      if (isRepeat) {
                        setInterval(function () {
                          let layoutObj = that.layoutsHash[runnerObjId]
                          if (layoutObj) {
                            layoutObj.style.top = toY + "px"
                            layoutObj.style.left = toX + "px"
                          }
                        }, lifeTime * 1000)
                      } else {
                        setTimeout(function () {
                          let layoutObj = that.layoutsHash[runnerObjId]
                          if (layoutObj) {
                            layoutObj.style.top = toY + "px"
                            layoutObj.style.left = toX + "px"
                          }
                        }, lifeTime * 1000)
                      }
                    }
                    let eventMoveObj = {
                      id: lyoutId,
                      event: moveFunc
                    }
                    this.eventCircleList.push(eventMoveObj)
                    break
                }
              }
            }
          }
        }
      },

      /**
       * 把画布中图层对象做成哈希，后续event可以直接通过id调用哈希对象:{id:***,layoutsobj:{}}
       */
      initLayoutsHash(def){
        this.layoutsHash = {}
        let count = def.layouts.length
        for (let i = 0; i < count; i++) {
          this.layoutsHash[def.layouts[i].id] = def.layouts[i]
        }
      },

      /**
       * 图层单击事件，这里的单击事件执行函数从eventClickList获取，数组中的每一项都对应到具体的执行函数
       */
      layoutEventClick(id) {
        let evl = this.eventClickList
        let count = evl.length
        for (let i = 0; i < count; i++) {
          if (evl[i].id === id) {
            evl[i].event()
          }
        }
      },

      /**
       * 执行周期性事件
       */
      runCircleEvent() {
        let evl = this.eventCircleList
        let count = evl.length
        for (let i = 0; i < count; i++) {
          evl[i].event()
        }
      }
    },

    components: {
      draggable,
      LayoutSlider,
      RightSlider,
      ComponentList,
      USingleText,
      UPie,
      UPieCicle,
      URectLayout,
      U2DMapChina,
      U2DMapWorld,
      UGlobe,
      ULiquidFill,
      UIframe,
      UBar,
      ULine,
      UPieRose,
      UPieMultiCicle,
      UBarMulti,
      UBarLRHoriz,
      ULineMulti,
      ULineArea,
      ULineAreaMulti,
      UBarBG,
      URadar,
      UNumberCard,
      UTimeCard,
      UDashboard,
      UBarProcess,
      UBarIcon
    }
  }
</script>
