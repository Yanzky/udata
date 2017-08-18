import ComponentTemplate from './ComponentTemplate'
import api from '../../util/api'

export default {
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
    let definition = {}
    //从服务器端获取
    if (defid) {
      let promise = api.getSceneById(defid)
      promise.then(function (response) {
        let sceneObj = response.data
        definition = JSON.parse(sceneObj.definition)
        return definition
      }).catch(function (error) {
        alert("从服务器端获取数据发生错误,请联系系统管理员")
      })
    } else {
      definition.definition = $.extend(true, {}, ComponentTemplate.definition)
      definition.canvas = $.extend(true, {}, ComponentTemplate.canvas)
      definition.layouts = []
    }

    return definition
  },

  /**
   * 初始化画布样式
   */
  initCanvas(def) {
    let styles = []
    if (def) {
      console.log(def)
      styles.push(def.canvas.style)
    }
    return styles.concat(this.resizeCanvas(this.getCanvasWidth(def), this.getCanvasHeight(def), null))
  },

  /**
   * 重置画布
   * @param canvasWidth
   * @param zoomScale
   * @returns {*}
   */
  resizeCanvas(canvasWidth, canvasHeight, zoomScale) {

    //计算画布样式的缩小比例
    let _zoomScale = zoomScale
    let _zoomStyle = {}
    if (!zoomScale) {
      _zoomScale = 700 / canvasWidth
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
    let _boxTop = (this.getBodyHeight() - _boxHeight) / 2
    let _boxLeft = (this.getBodyWidth() - _boxWidth) / 2
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

  /**
   * 最大化播放画布
   */
  fullScreen(el) {
    el.webkitRequestFullScreen()
  },
}
