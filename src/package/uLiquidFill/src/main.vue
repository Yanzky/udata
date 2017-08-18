<template>
  <div @click.stop="selectComponent"
       :class="[{ismouseover: !isProduct},{ubar: true},{isselected:Config.isSelected && !isProduct}]"
       :style="uStyle">
    <div v-show="Config.isMoving" class="umovetips">
      <div>top:{{Config.style.top}},left:{{Config.style.left}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../assets/styles/main";

  .ubar {
  }

  .umovetips {
    position: relative;
    > div {
      position: absolute;
      bottom: -20px;
      right: 0;
      font-size: 12px;
      color: #fff;
    }
  }
</style>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import * as types from '../../../store/mutation-types'
  import PropConfig from '../../../components/js/PropConfig'
  import api from '../../../util/api'
  import axios from 'axios'

  export default {
    name: 'ULiquidFill',
    props: ['Config', 'isProduct'],
    data() {
      return {
        uData: [],
        onConnected: false,
        onDBConnected: false,
        uStyle: null,
        echartsOptions: null,
        uCanvas: null,
        //地图上影响图层配置信息
        componentConfig: {},
        componentOptions: {
          series: [{
            type: 'liquidFill',
            radius: '98%',
            center: ['50%', '50%'],
            data: [],
            itemStyle: {
              normal: {
                shadowBlur: 0,
                color: '#000',
              }
            },
            outline: {
              borderDistance: 4,
              itemStyle: {
                borderWidth: 4,
                borderColor: '#000',
              }
            },
            backgroundStyle: {
              color: '#000'
            },
            label: {
              normal: {
                textStyle: {
                  color: "#fff"
                }
              }
            }
          }]
        }
      }
    },
    watch: {
      'Config': {
        handler(curVal, oldVal){
          this.uCanvas.resize()
        },
        deep: true
      },
      'Config.datasource': {
        handler(curVal, oldVal){
          this.getComponentDataByChange()

          this.uCanvas.setOption(this.componentOptions);
        },
        deep: true
      },
      'componentConfig': {
        handler(curVal, oldVal){
          if (curVal.range) {
            this.getComponentDataByChange()
            this.uCanvas.setOption(this.componentOptions);
          }
        },
        deep: true
      },
      'Config.isSelected': {
        handler(curVal, oldVal){
          if (curVal) {
            let propertyArr = []
            let propertyObject = $.extend(true, {}, PropConfig.props)
            propertyObject.type = 'uLiquidFill-liquidconfig'
            propertyObject.title = '颜色设置'
            propertyObject.props = this.componentConfig
            propertyArr.push(propertyObject)
            this.addPublicPropConfig(propertyArr)
          }
        },
        deep: true
      },
      'componentsDataObj':{
        handler(curVal, oldVal){
          let datatype = this.Config.datasource.type
          let cid = this.Config.id
          if (datatype !== 'json' && datatype !== "none"){
            this.getComponentDataByBatch(curVal,cid)
          }
        },
        deep: true
      }
    },
    created() {
      this.uStyle = this.Config.style
      this.componentConfig = this.Config.componentStyle.uComponentConfig
      this.initConfig()
    },

    mounted(){
      //初始化地图
      let that = this
      this.uCanvas = echarts.init(this.$el);
      this.uCanvas.setOption(this.componentOptions);
    },

    computed: {
      ...mapGetters({
        definition: 'editorDefinition',
        publicPropConfig: 'propConfig',
        databaseHost: 'databaseHost',
        componentsDataObj: 'componentsDataObj'
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
       * 获取组件数据
       */
      getComponentData() {
        let datatype = this.Config.datasource.type
        switch (datatype) {
          case "json":
            this.uData = $.extend(true, [], this.Config.datasource.value)
            this.initConfigDepData(this.uData)
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
            this.initConfigDepData(this.uData)
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
        let data = JSON.parse(d[cid])
        if (dstype === "REST API"){
          let result = data
          this.convertDBData(result)
        }
        if (dstype === "数据库"){
          let result = data.datas[cid]
          this.convertDBData(result)
        }
      },

      /**
       * 通过URL获取外部数据
       */
      getComponentDataByURL() {
        if (!this.onConnected) {
          let heartbeat = this.definition.canvas.heartbeat * 1000
          let that = this
          this.onConnected = true
          let url = this.Config.datasource.url.value
          //如果没有配置url，则使用内部demourl替代
          if (!url) {
            url = 'http://localhost:8000/udatav/getdemo?type=uLiquidFill'
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
                that.uData = result
                that.initConfigDepData(that.uData)
                that.uCanvas.setOption(that.componentOptions);
                that.onConnected = false
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
          let that = this
          let heartbeat = this.definition.canvas.heartbeat * 1000
          this.onDBConnected = true
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
              that.convertDBData(result)
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
       * 转换DB获取的数据
       */
      convertDBData(d) {
        this.uData = d
        this.initConfigDepData(this.uData)
        this.uCanvas.setOption(this.componentOptions);
      },

      /**
       * 设置组件默认色值
       */
      initConfig() {
        this.getComponentData()
      },

      /**
       * 组件的初始化依赖数据
       */
      initConfigDepData(data) {
        let lfOption = this.componentOptions
        let lConfig = this.componentConfig
        lfOption.series[0].data = [data.value[0]]
        lfOption.series[0].radius = lConfig.radius
        lConfig.diagramSize = this.computeRealSize(parseInt(lConfig.radius) / 100)
        let rangeArr = lConfig.range.split(';')
        if (rangeArr instanceof Array) {
          for (let i = 0; i < rangeArr.length; i++) {
            let itemArr = rangeArr[i].split('-')
            if (itemArr instanceof Array) {
              if (parseFloat(itemArr[0]) <= parseFloat(data.value[0]) && parseFloat(data.value[0]) < parseFloat(itemArr[1])) {
                let colorStr = "liquidColor" + (i + 1)
                lfOption.series[0].itemStyle.normal.color = lConfig[colorStr]
                lfOption.series[0].outline.itemStyle.borderColor = lConfig[colorStr]
                let bgColorArr = lConfig[colorStr].split(',')
                bgColorArr[3] = "0.3)"
                lfOption.series[0].backgroundStyle.color = bgColorArr.join(',')
                break
              }
            }
          }
        }
      },

      /**
       * 计算图真实尺寸
       */
      computeRealSize(p) {
        //初始化环状图实际大小
        let compWidth = parseInt(this.uStyle.width)
        let compHeight = parseInt(this.uStyle.height)
        let minSize = Math.min(compHeight, compWidth)
        return minSize * p
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
      }
    }
  }
</script>
