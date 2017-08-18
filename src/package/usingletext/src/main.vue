<template>
  <div @click.stop="selectComponent"
       :class="[{ismouseover: !isProduct},{utext: true},{isselected:Config.isSelected && !isProduct}]"
       :style="uStyle">
    {{uData}}
    <div v-show="Config.isMoving" class="usingletextmovetips">
      <div>top:{{Config.style.top}},left:{{Config.style.left}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../assets/styles/main";
  @import "../../../assets/styles/common";

  .utext {
    position: absolute;
    color: $commonColor;
    font-size: 24px;
    cursor: pointer;
  }

  .usingletextmovetips {
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
  import api from '../../../util/api'
  import axios from 'axios'

  export default {
    name: 'USingleText',
    props: ['Config', 'isProduct'],
    data() {
      return {
        uData: "",
        uStyle: null,
        onConnected: false,
        onDBConnected: false,
      }
    },
    created() {
      this.uStyle = this.Config.style
      this.getComponentData()
    },
    watch: {
      'Config.datasource': {
        handler(curVal, oldVal){
          this.getComponentDataByChange()
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
    mounted(){
      //当页面挂载的时候,绑定鼠标可以拖动组件的事件
      let compStyle = this.uStyle
      let _Config = this.Config
      $(this.$el).mousedown(
        function (event) {
          if (true) {
            let isMove = true;
            _Config.isMoving = true;

            let abs_x = event.pageX - parseInt(compStyle.left)
            let abs_y = event.pageY - parseInt(compStyle.top)
            $(document).mousemove(function (event) {
                if (isMove) {
                  compStyle.left = (event.pageX - abs_x) + "px"
                  compStyle.top = (event.pageY - abs_y) + "px"
                }
              }
            ).mouseup(
              function () {
                isMove = false;
                if (_Config.isMoving)
                  _Config.isMoving = false
              }
            );
          }
        }
      )
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
        setComponentStatus: [types.SET_COMPONENTSELECTED]
      }),
      getComponentData() {
        let datatype = this.Config.datasource.type
        switch (datatype) {
          case "json":
            this.uData = this.Config.datasource.value.value[0]
            break
        }
      },

      getComponentDataByBatch(d,cid) {
        let dstype = this.Config.datasource.type
        let data = JSON.parse(d[cid])
        if (dstype === "REST API"){
          let result = data
          this.uData = result.value[0]
        }
        if (dstype === "数据库"){
          let result = data.datas[cid]
          this.uData = result.value[0]
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
            this.uData = this.Config.datasource.value.value[0]
            break
          case "REST API":
            this.getComponentDataByURL()
            break
          case "数据库":
            this.getComponentDataByDB()
            break
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
            url = 'http://localhost:8000/udatav/getdemo?type=USingleText'
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
                that.uData = result.value[0]
//                that.uData = response.data.value[0]
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
              that.uData = result.value[0]
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
       * 选择组件
       */
      selectComponent(){
        let that = this
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
