import api from '../../util/api'
import axios from 'axios'
import componentTemplate from '../../components/js/ComponentTemplate'

import {mapGetters} from 'vuex'

export default {
  props: ['Config', 'isProduct'],
  data() {
    return {
      uData: [],
      uStyle: null,
      uCanvas: null,
      componentConfig: {},
      onConnected: false,
      onDBConnected: false,
      heartBeat: 0,
      eventConfig: [],
      testObj: {}
    }
  },
  computed: {
    ...mapGetters({
      definition: 'editorDefinition',
      publicPropConfig: 'propConfig',
      databaseHost: 'databaseHost',
      componentsDataObj: 'componentsDataObj',
      needReloadData: 'needReloadData'
    }),
  },
  watch: {
    'componentsDataObj':{
      handler(curVal, oldVal){
        let datatype = this.Config.datasource.type
        let cid = this.Config.id
        if (datatype !== 'json' && datatype !== "none"){
          this.getComponentDataByBatch(curVal,cid)
        }
      },
      deep: true
    },
  },
  created() {
    this.uStyle = this.Config.style
    this.componentConfig = this.Config.componentStyle.uComponentConfig
    //这里需要增加一个判断，看看组件是不是有新的配置加入到模板里，如果有，需要将新的配置拷贝到组建立，否则报错
    let cType = this.Config.type
    if (cType === "uPieCicle" || cType === "uPieRose") {
      cType = "uPie"
    }
    if (cType === "uLineMulti" || cType === "uLineArea" || cType === "uLineAreaMulti") {
      cType = "uLine"
    }
    if (cType === "uBarMulti" || cType === "uBarIcon") {
      cType = "uBar"
    }
    let compTemp = componentTemplate[cType].components[0].componentStyle.uComponentConfig
    for (let k in compTemp) {
      if (!this.componentConfig.hasOwnProperty(k)) {
        //给Vue对象赋值必须使用Vue的set方法，否则不能监控对象的变化
        this.$set(this.componentConfig,k,compTemp[k])
        if (compTemp[k].hasOwnProperty('value')) {
          this.$set(this.componentConfig,k,$.extend(true, {}, compTemp[k]))
        }
      }
    }

    //设置图层的事件控制配置
    if (!this.Config.hasOwnProperty('eventConfig')) {
      this.Config['eventConfig'] = []
    }
    this.eventConfig = this.Config.eventConfig

    this.heartBeat = this.definition.canvas.heartbeat

    //根据标志位重新加载组件数据
    setTimeout(() => {
      if (this.needReloadData){
        this.getComponentDataByChange()
      }
    })
  },
  methods: {
    /**
     * 获取组件数据
     */
    getComponentData() {
      let datatype = this.Config.datasource.type
      switch (datatype) {
        case "json":
          this.uData = $.extend(true, [], this.Config.datasource.value)
          this.convertData(this.uData)
          break
      }
    },

    /***
     * 页面组件发生改变是，在编辑状态下的数据单独获取
     *
     */
    getComponentDataByChange() {
      let datatype = this.Config.datasource.type
      switch (datatype) {
        case "json":
          this.uData = $.extend(true, [], this.Config.datasource.value)
          this.convertData(this.uData)
          break
        case "REST API":
          this.getComponentDataByURL()
          break
        case "数据库":
          this.getComponentDataByDB()
          break
      }
    },

    getComponentDataByBatch(d,cid) {
      let dstype = this.Config.datasource.type
      if (dstype === "REST API" || dstype === "数据库"){
        if (d.hasOwnProperty(cid)){
          let data = JSON.parse(d[cid])
          if (dstype === "REST API"){
            this.convertData(data)
          }
          if (dstype === "数据库"){
            this.convertData(data.datas[cid])
          }
        }else {
          console.log("组件:" + cid + "没有获取到正确的数据")
        }
      }
    },

    /**
     * 通过URL获取外部数据
     */
    getComponentDataByURL() {
      if (!this.onConnected) {
        let heartbeat = this.heartBeat * 1000
        let that = this
        this.onConnected = true
        let url = this.Config.datasource.url.value
        //如果没有配置url，则使用内部demourl替代
        if (!url) {
          url = 'http://localhost:8000/udatav/getdemo?type=' + this.Config.type
        }
        let reqType = this.Config.datasource.url.reqtype
        let promise = null
        let bizfunc = function () {
          switch (reqType) {
            case "POST":
              let condition = {
                type: 'post',
                url: url,
                condition: ""
              }
              // promise = axios.post(url)
              promise = api.apiRedirect(condition)
              break
            case "GET":
              let condition1 = {
                type: 'get',
                url: url,
                condition: ""
              }
              // promise = axios.get(url)
              promise = api.apiRedirect(condition1)
              break
          }
          if (promise) {
            promise.then(function (response) {
              let result = JSON.parse(response.data.data)
              that.convertData(result)
              that.onConnected = false
            }).catch(function (error) {
              if (that.isProduct) {
                console.log(error)
              } else {
                that.$message.error('REST API连接错误,请检查URL是否正确')
                console.log(error)
              }
            })
          }
        }
        bizfunc()
        if (that.isProduct) {
          setInterval(function () {
            bizfunc()
          }, heartbeat)
        }
      }
    },

    /**
     * 通过DB获取外部数据
     */
    getComponentDataByDB() {
      if (!this.onDBConnected) {
        this.onDBConnected = true
        let that = this
        let heartbeat = this.heartBeat * 1000
        let connectDBParam = {
          type: that.Config.type,
          heartbeat: that.Config.heartbeat,
          cid: that.Config.id,
          legend: that.Config.datasource.legend,
          datasource: {
            dType: "db",
            sql: that.Config.datasource.sql,
            sourceId: "1",
            dbInfo: {
              dbHost: that.Config.datasource.database.host,
              dbDatabase: that.Config.datasource.database.dbinstance,
              dbType: that.Config.datasource.database.dbtype,
              dbUser: that.Config.datasource.database.username,
              dbPwd: that.Config.datasource.database.passwd,
              dbPort: that.Config.datasource.database.port
            }
          }
        }
        let url = that.databaseHost + '/ds/data/queryDataByComponent'
        let condition = {
          type: 'post',
          url: url,
          condition: JSON.stringify(connectDBParam)
        }
        let promise = null
        let bizfunc = function () {
          promise = api.apiRedirect(condition)
          promise.then(function (response) {
            let result = JSON.parse(response.data.data).datas[that.Config.id]
            that.convertData(result)
            that.onDBConnected = false
          }).catch(function (error) {
            if (that.isProduct) {
              console.log(error)
            } else {
              that.$message.error('连接数据库或数据处理错误,请检查legend和sql是否正确')
              console.log(error)
            }
          })
        }
        bizfunc()
        if (that.isProduct) {
          setInterval(function () {
            bizfunc()
          }, heartbeat)
        }
      }
    },

    /**
     * 颜色转换
     * @param color
     */
    transationColor(color) {
      if (color.indexOf('linear-gradient') >= 0) {
        let gColorArray = color.split(',');
        let startColor = (gColorArray[1] + "," + gColorArray[2] + "," + gColorArray[3] + "," + gColorArray[4]).trim()
        let endColor = (gColorArray[5] + "," + gColorArray[6] + "," + gColorArray[7] + "," + gColorArray[8]).trim()
        endColor = endColor.substr(0, endColor.length - 1)
        //设置渐变方向 1:从上到下,2:从下到上，3.从左到右，4.从右到左，0：什么也不是
        let goal = 0
        if (color.indexOf('to bottom') >= 0) {
          goal = 1
        }
        if (color.indexOf('to top') >= 0) {
          goal = 2
        }
        if (color.indexOf('to right') >= 0) {
          goal = 3
        }
        if (color.indexOf('to left') >= 0) {
          goal = 4
        }
        return [startColor, endColor, goal]
      } else {
        return [color, 0]
      }
    },

    /**
     * 将颜色数组直接转换为echarts所使用的颜色对象
     * @param colorArr
     * @returns {*}
     */
    transationColorToObj(colorArr){
      let rtnColor = null
      if (colorArr.length === 2) {
        rtnColor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: colorArr[0]
        }, {
          offset: 1,
          color: colorArr[0]
        }])
      }
      if (colorArr.length === 3) {
        let goal = colorArr[2]
        let x = 0
        let y = 0
        let x1 = 0
        let y1 = 0
        if (goal === 1) {
          y1 = 1
        }
        if (goal === 2) {
          y = 1
        }
        if (goal === 3) {
          x1 = 1
        }
        if (goal === 4) {
          x = 1
        }
        rtnColor = new echarts.graphic.LinearGradient(x, y, x1, y1, [{
          offset: 0,
          color: colorArr[0]
        }, {
          offset: 1,
          color: colorArr[1]
        }])
      }

      return rtnColor
    },

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
  }
}
