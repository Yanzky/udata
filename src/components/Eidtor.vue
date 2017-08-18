<template>
  <div>
    <!--画布及画布容器-->
    <div @mousewheel="onMouseZoom" @click.stop="deSelectAllLayout" id="container" :style="containerStyle"
         :class="{ canvas: !isFullScreen }">
      <div id="canvas" :style="[canvasStyle, zoomStyle]">
        <div @click.stop="selectLayout(item)" v-for="item in definition.layouts" :style="item.style" class="cbox"
             :class="{isselected : item.isSelected}">
          <div style="position: relative;height: 100%;width:100%">
            <component v-if="subcomponent.type && !item.isChange" v-for="subcomponent in item.components"
                       :is="subcomponent.type"
                       :Config="subcomponent"
                       :isProduct="false"></component>
            <div v-show="item.isResizing" class="resizetips">w:{{item.style.width}},h:{{item.style.height}}</div>
            <div v-show="item.isMoving" class="movetips">top:{{item.style.top}},left:{{item.style.left}}</div>
            <div v-show="item.isSelected" class="laytools">
              <i @click.stop="item.style.isShow = !item.style.isShow" v-show="item.style.isShow" class="fa fa-eye"
                 aria-hidden="true"></i>
              <i @click.stop="item.style.isShow = !item.style.isShow" v-show="!item.style.isShow"
                 class="fa fa-eye-slash" aria-hidden="true"></i>
              <i @click.stop="item.style.isLock = !item.style.isLock" v-show="item.style.isLock"
                 class="fa fa-lock" aria-hidden="true"></i>
              <i @click.stop="item.style.isLock = !item.style.isLock" v-show="!item.style.isLock"
                 class="fa fa-unlock" aria-hidden="true"></i>
              <div>{{item.id}}</div>
            </div>
            <div v-show="item.isSelected" class="resizebtn"></div>
          </div>
        </div>
      </div>
    </div>

    <!--左侧Sliderbar-->
    <div class="leftslider">
      <layout-slider @onSelectBackgroundLayout="onSelectBackgroundLayout"
                     v-on:openComponentAction="onOpenComponentList"></layout-slider>
    </div>

    <!--右侧Sliderbar-->
    <div class="rightslider">
      <right-slider :Config="propertyObjectArray"></right-slider>
    </div>

    <!--组件列表-->
    <div v-show="isComponentList" id="componentListContainer" class="componentcontainer">
      <div id="componentTitle" class="ctitlediv">
        <span>组件列表</span>
        <i @click="onCloseComponentList" class="el-icon-close"></i>
      </div>
      <div class="ctable">
        <component-list></component-list>
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
      <el-tooltip class="item" effect="dark" content="预 览" placement="top-start">
        <div class="toolbutton"><i @click="onFullScreen" class="fa fa-expand" aria-hidden="true"></i></div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="打 开" placement="top-start">
        <div class="toolbutton">
          <el-upload
            class="avatar-uploader"
            action="/datav/openscene"
            :http-request="onOpenScene"
            :show-file-list="false">
            <i class="fa fa-folder-open" aria-hidden="true"></i>
          </el-upload>
        </div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="导 出" placement="top-start">
        <div class="toolbutton"><i @click="onExportScene" class="fa fa-share-square-o" aria-hidden="true"></i></div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="保 存" placement="top-start">
        <div class="toolbutton"><i @click="saveScene" class="fa fa-floppy-o" aria-hidden="true"></i></div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="帮 助" placement="top-start">
        <div class="toolbutton"><i @click="dialogKeyHelpVisible = true" class="fa fa-keyboard-o" aria-hidden="true"></i>
        </div>
      </el-tooltip>
    </div>

    <div @click="dialogKeyHelpVisible = false" v-show="dialogKeyHelpVisible" class="udialog">
      <div>
        <div>键盘快捷键</div>
        <div>
          <div>打开左侧图层管理器: ctrl + l</div>
          <div>打开右侧属性管理器: ctrl + r</div>
          <div>打开组件面板: ctrl + p</div>
        </div>
      </div>
    </div>
    <div v-if="isLoadingData" class="loadingcontainer">
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

  .cbox:hover {
    border: 2px dashed #fff;
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
        //layouts的复制，为了检测layout顺序的改变
        isDestroy: false,
        //可以设置的属性对象
        propertyObjectArray: [],
        //帮助面板显示变量
        dialogKeyHelpVisible: false,
        //组件是否在移动
        isComponentMoving: false,
        //窗口高度
        windowHeight: 0,
        //窗口宽度
        windowWidth: 0,
        //判断是否正在加载数据
        isLoadingData: false
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

      //组件列表移动
      $("#componentTitle").mousedown(
        function (event) {
          if (event.target.id === 'componentTitle') {
            let isMove = true;
            let abs_x = event.pageX - $("#componentListContainer").offset().left;
            let abs_y = event.pageY - $("#componentListContainer").offset().top;
            $(document).mousemove(function (event) {
                if (isMove) {
                  let obj = $("#componentListContainer");
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
        isLeftSlider: 'leftSlider',
        isRightSlider: 'rightSlider',
        isComponentList: 'componentList',
        definition: 'editorDefinition',
        componentSelectedStatus: 'componentSelectedStatus',
        publicPropConfig: 'propConfig',
        publicDatasourceConfig: 'datasourceConfig',
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
      //监控层和组件
      'definition.layouts': {
        handler(curVal, oldVal){
          let that = this
          setTimeout(function () {
            let compNodes = $("#canvas").children()
            let count = compNodes.length
            for (let i = 0; i < count; i++) {
              $(compNodes[i]).mousedown(
                function (event) {
                  //获取放大缩小的按钮区域
                  let resizeBtn = ($($(compNodes[i]).children()[0]).children()[$($(compNodes[i]).children()[0]).children().length - 1])

                  //给移动图层增加移动事件
                  if (event.target === $(compNodes[i]).children()[0] || $(event.target)[0].className.indexOf('rectcontainer') >= 0 || $(event.target)[0].className === 'movelayer' || $(event.target)[0].tagName === 'CANVAS') {
                    if (!curVal[i].style.isLock){
                      let isMove = true
                      if (curVal[i] !== undefined)
                        curVal[i].isMoving = true
                      let abs_x = event.pageX - parseInt(curVal[i].style.left)
                      let abs_y = event.pageY - parseInt(curVal[i].style.top)
                      $(document).mousemove(function (event) {
                          if (isMove) {
                            curVal[i].style.left = (event.pageX - abs_x) + "px"
                            curVal[i].style.top = (event.pageY - abs_y) + "px"
                          }
                        }
                      ).mouseup(
                        function () {
                          isMove = false;
                          if (curVal[i] !== undefined)
                            curVal[i].isMoving = false
                        }
                      );
                    }
                  }

                  //给放大缩小按钮增加事件
                  if (event.target === resizeBtn) {
                    let isMove = true
                    if (curVal[i] !== undefined)
                      curVal[i].isResizing = true
                    let abs_x = event.pageX - parseInt(curVal[i].style.width)
                    let abs_y = event.pageY - parseInt(curVal[i].style.height)
                    $(document).mousemove(function (event) {
                        if (isMove) {
                          curVal[i].style.width = (event.pageX - abs_x) + "px"
                          curVal[i].style.height = (event.pageY - abs_y) + "px"
                        }
                      }
                    ).mouseup(
                      function () {
                        isMove = false;
                        if (curVal[i] !== undefined)
                          curVal[i].isResizing = false
                      }
                    );
                  }
                }
              )
            }
          }, 100)

          //当图层或者组件被选中以后，更新右侧的属性面板内容
          let layouts = curVal
          let layoutsCount = layouts.length
          let changeCount = 0
          this.propertyObjectArray = []
          //清空数据源配置项
          this.clearPublicDSConfig()
          this.clearEventConfig()
          for (let i = 0; i < layoutsCount; i++) {
            if (layouts[i].isSelected === true) {
              let propertyObject = {}
              propertyObject = $.extend(true, {}, PropConfig.props)
              propertyObject.type = 'layout'
              propertyObject.title = '层属性设置'
              propertyObject.props = layouts[i].style
              changeCount += 1
              this.propertyObjectArray.push(propertyObject)
              this.setEventConfig(layouts[i])
              break;
            }
            let components = layouts[i].components
            let compCount = components.length
            for (let j = 0; j < compCount; j++) {
              if (components[j].isSelected === true) {
                let propertyObject = {}
                let type = components[j].type
                propertyObject = $.extend(true, {}, PropConfig.props)
                propertyObject.type = type + '-style'
                propertyObject.title = '基础属性'
                propertyObject.props = components[j].style
                this.propertyObjectArray.push(propertyObject)
                changeCount += 1

                //设置数据源配置
                if (components[j].datasource.type === 'none') {
                  this.clearPublicDSConfig()
                } else {
                  this.clearPublicDSConfig()
                  this.setPublicDSConfig(components[j])
                }
                break;
              }
            }
          }
          this.setPublicPropConfig(this.propertyObjectArray)
        },
        deep: true
      }
    },
    methods: {
      ...mapMutations({
        setLeftSlider: [types.SET_LEFTSLIDER],
        setRightSlider: [types.SET_RIGHTSLIDER],
        setComponentList: [types.SET_COMPONENTLIST],
        setDefinition: [types.SET_EDITORDEF],
        setComponentStatus: [types.SET_COMPONENTSELECTED],
        setPublicPropConfig: [types.SET_PROPCONFIG],
        clearPublicPropConfig: [types.CLEAR_PROPCONFIG],
        setPublicDSConfig: [types.SET_DSCONFIG],
        clearPublicDSConfig: [types.CLEAR_DSCONFIG],
        setEventConfig: [types.SET_EVENTCONFIG],
        clearEventConfig: [types.CLEAR_EVENTCONFIG],
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
        let delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        this.zoomValue = Math.max(0.2, Math.min(2, this.zoomValue + (delta / 10)))
      },

      /**
       * 全屏动作
       */
      onFullScreen() {
        let el = document.getElementById("canvas")
        el.webkitRequestFullScreen()
      },

      /**
       * 按下快捷键所执行的操作
       * @param event
       */
      onKeyAction(event) {
        if (event.ctrlKey && event.keyCode === 76) {
          this.setLeftSlider(!this.isLeftSlider)
        }
        if (event.ctrlKey && event.keyCode === 82) {
          this.setRightSlider(!this.isRightSlider)
        }
        if (event.ctrlKey && event.keyCode === 80) {
          this.setComponentList(!this.isComponentList)
        }
      },

      /**
       * 关闭组件列表
       */
      onCloseComponentList() {
        this.setComponentList(false)
      },

      /**
       * 打开组件列表
       */
      onOpenComponentList() {
        this.setLeftSlider(false)
        this.setComponentList(true)
      },

      /**
       * 选择图层
       * @param obj 图层对象
       */
      selectLayout(obj) {
        obj.isSelected = true
        let layouts = this.definition.layouts
        let count = layouts.length
        for (let i = 0; i < count; i++) {
          layouts[i].isSubComponentSelected = false
          if (obj.id !== layouts[i].id) {
            layouts[i].isSelected = false
          }

          //deselect component
          let components = layouts[i].components
          let compcount = components.length
          for (let j = 0; j < compcount; j++) {
            components[j].isSelected = false
          }
        }
        let that = this
        this.setComponentStatus(false)
        setTimeout(function () {
          that.setComponentStatus(true)
        })
      },

      /**
       * 当点击画布时，取消选择所有图层
       * 并且清空所有属性设置的操作,清空属性设置数组
       * @param obj 图层对象
       */
      deSelectAllLayout() {
        let layouts = this.definition.layouts
        let count = layouts.length
        for (let i = 0; i < count; i++) {
          layouts[i].isSubComponentSelected = false
          layouts[i].isSelected = false

          //deselect component
          let components = layouts[i].components
          let compcount = components.length
          for (let j = 0; j < compcount; j++) {
            components[j].isSelected = false
          }
        }

        //清空属性设置数组
        this.propertyObjectArray = []
        this.clearPublicPropConfig()
        this.clearPublicDSConfig()
        this.clearEventConfig()
      },

      /**
       * 画布被选择后，右侧属性设置面板通过store的方法设置被动接受通知
       */
      onSelectBackgroundLayout() {

        this.propertyObjectArray = []
        this.clearPublicDSConfig()
        this.clearEventConfig()
        let propertyObject = {}
        propertyObject = $.extend(true, {}, PropConfig.props)
        propertyObject.type = 'canvas-style'
        propertyObject.title = '画布设置'
        propertyObject.props = this.definition.canvas.style

        this.propertyObjectArray.push(propertyObject)
        let propertyHeartBitObject = {}
        propertyHeartBitObject = $.extend(true, {}, PropConfig.props)
        propertyHeartBitObject.type = 'canvas-common'
        propertyHeartBitObject.title = '画布刷新设置'
        propertyHeartBitObject.props = this.definition.canvas

        this.propertyObjectArray.push(propertyHeartBitObject)

        this.setPublicPropConfig(this.propertyObjectArray)

        let that = this
        this.setComponentStatus(false)
        setTimeout(function () {
          that.setComponentStatus(true)
        })
      },

      /**
       * 保存场景
       */
      saveScene() {
        let that = this;
        //画布保存前,清空所有已选的组件，因为状态会一起被保存
        this.deSelectAllLayout()
        let oldZoom = this.zoomValue
        this.zoomValue = 0.3
        this.onSliderChange()
        setTimeout(() => {
          if (this.defId && this.sceneObj.id) {
            //先保存截图，再把截图转换成base64编码后一起保存到数据库里
            html2canvas(document.getElementById('canvas'), {
              onrendered: function (canvas) {
                let snapshot = canvas.toDataURL()
                //如果是从服务器端加载的场景
                that.sceneObj.definition = JSON.stringify(that.definition)
                that.sceneObj.snapshot = snapshot
                let promise = api.updateScene(that.sceneObj)
                promise.then(function (response) {
                  that.zoomValue = oldZoom
                  that.onSliderChange()
                  that.$message({
                    type: 'success',
                    message: '已更新场景!'
                  });
                })
              },
              width: $("#canvas").width(),
              height: $("#canvas").height(),
            });
          } else {
            //如果是打开的本地文件场景或者自行打开的空编辑器
            this.$prompt('请输入场景名称', '保存场景', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              inputPattern: /^.*[^\s]+.*$/,
              inputErrorMessage: '场景名称不可以为空'
            }).then(({value}) => {
              //先保存截图，再把截图转换成base64编码后一起保存到数据库里
              html2canvas(document.getElementById('canvas'), {
                  onrendered: function (canvas) {
                    let snapshot = canvas.toDataURL()
                    that.sceneObj.name = value
                    that.sceneObj.definition = JSON.stringify(that.definition)
                    that.sceneObj.publishid = ""
                    that.sceneObj.status = 0
                    that.sceneObj.snapshot = snapshot
                    let promise = api.saveScene(that.sceneObj)
                    promise.then(function (response) {
                      that.zoomValue = oldZoom
                      that.onSliderChange()
                      that.$message({
                        type: 'success',
                        message: '保存已成功'
                      });
                      let sceneId = response.data.resultid
                      window.location.href = '/editor?id=' + sceneId
                    })
                  },
                  width: $("#canvas").width(),
                  height: $("#canvas").height()
                },
              );
            }).catch(() => {
              that.$message({
                type: 'info',
                message: '保存已取消'
              });
            });
          }
        })
      },

      /**
       * 导出场景
       */
      onExportScene() {
        if (this.defId && this.sceneObj.id) {
          window.open('/udatav/exportscene?id=' + this.defId)
        } else {
          this.$message({
            type: 'warning',
            message: '未保存的场景无法导出'
          });
        }
      },

      /**
       * 导出场景
       */
      onOpenScene(e) {
        let that = this
        let promise = api.openScene(e.file)
        promise.then(function (response) {
          let openDef = JSON.parse(response.data.definition)
          that.setDefinition(openDef)
          that.initCanvas(that.definition)
        })
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
                if (!definition.layouts[i].style.hasOwnProperty('isLock')) {
                  definition.layouts[i].style['isLock'] = false
                }
                definition.layouts[i]['isEditLyoutName'] = false
                definition.layouts[i]['isSubComponentSelected'] = false
              }
            }

            that.sceneObj.definition = $.extend(true, {}, definition)
            that.setDefinition(definition)
            that.getComponentData(definition)
            that.initCanvas(that.definition)
          }).catch(function (error) {
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

      /**
       * 获取组件的数据
       */
      getComponentData(def) {
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

        return [_zoomStyle, _boxStyle, _zoomScale]
      },
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
