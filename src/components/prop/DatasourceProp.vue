<template>
  <div>
    <div v-if="isDatasourceConfig" class="dscontainer">
      <div class="borderbtm">
        <div class="dsrow">
          <div>接口类型</div>
          <div>
            <el-select size="small" v-model="Config.rawDatasource.type" placeholder="请选择">
              <el-option
                v-for="item in dataType"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <!--静态json数据配置-->
      <div v-if="Config.rawDatasource.type === 'json'" class="borderbtm">
        <div class="dsrow">
          <div>json内容</div>
          <div style="margin: 5px 0">
            <textarea rows="15" class="rowinput" v-model="dsValue"></textarea>
          </div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <!--URL接口方式配置-->
      <div v-if="Config.rawDatasource.type === 'REST API'" class="borderbtm">
        <div class="dsrow urlitem">
          <div>URL</div>
          <div>
            <div>
              <el-input size="small" v-model="Config.rawDatasource.url.value" placeholder="请输入接口地址"></el-input>
            </div>
            <div>
              <el-select size="small" v-model="Config.rawDatasource.url.reqtype" placeholder="请选择">
                <el-option
                  v-for="item in reqType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <!--数据库接口方式配置-->
      <div v-if="Config.rawDatasource.type === '数据库'" class="borderbtm">
        <div class="dsrow urlitem">
          <div>配置项</div>
          <div>
            <div><span>已选:</span><br/><span style="color: red;"
                                            v-if="userDBInstance.id >= 0">{{userDBInstance.host}}:{{userDBInstance.port}}({{userDBInstance.dbtype}})</span>
              <span style="color: red;" v-if="userDBInstance.id === -1">您还未选择数据库</span>
            </div>
            <div>
              <el-select size="small" v-model="selectedDBItemId" placeholder="请选择数据库">
                <el-option
                  v-for="item in userDBList"
                  :key="item.host"
                  :label="item.host + ':' + item.port"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
            <div @click="OpenDBInstanceModal" class="adddbbtn">
              <i class="fa fa-plus-square fa-lg" style="color: #20A0FF;margin-top: 5px;" aria-hidden="true"></i>
              <span>添加数据库连接</span>
            </div>
            <div>
              <textarea rows="3" v-model="dataLegend" placeholder="请输入系列名称数组"
                        class="rowinput"></textarea>
            </div>
            <div>
              <textarea rows="5" v-model="Config.rawDatasource.sql" placeholder="请输入sql语句" class="rowinput"></textarea>
            </div>
          </div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div class="btnrow">
        <el-button @click="onUpdateComponentDatasource" type="primary" size="small">应用新配置</el-button>
      </div>
      <div style="clear: both;"></div>
    </div>
    <div v-if="!isDatasourceConfig" class="nodsrow">该组件无需配置数据源</div>

    <sweet-modal modal-theme="light" ref="addUserDBModal" overlay-theme="light">
      <div class="addusermodal">
        <div>
          <el-select v-model="userDBInstanceForm.dbtype" placeholder="请选择数据库类型(必填)">
            <el-option
              v-for="item in dbTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div>
          <el-input v-model="userDBInstanceForm.dbinstance" placeholder="数据库实例"></el-input>
        </div>
        <div>
          <el-input v-model="userDBInstanceForm.host" placeholder="IP/主机名(必填)"></el-input>
        </div>
        <div>
          <el-input v-model="userDBInstanceForm.port" placeholder="端口(必填)"></el-input>
        </div>
        <div>
          <el-input v-model="userDBInstanceForm.username" placeholder="用户名(必填)"></el-input>
        </div>
        <div>
          <el-input v-model="userDBInstanceForm.passwd" type="password" placeholder="密码"></el-input>
        </div>
        <div>
          <el-button type="primary" @click="testConnection">测试连接</el-button>
        </div>
        <div>
          <el-button @click="addUDBI" style="float: right" type="success">保 存</el-button>
          <el-button @click="cancleAddUDBI" style="float: right;margin-right: 10px;" type="danger">取 消</el-button>
        </div>
      </div>
    </sweet-modal>

  </div>
</template>
<style lang="scss" scoped>
  .dscontainer {
    width: 100%;
    padding-top: 5px;
  }

  .borderbtm {
    border-bottom: 1px solid #EFF2F7;
  }

  .dsrow {
    width: 100%;
    > div {
      float: left;
      min-height: 40px;
      font-size: 13px;
      color: #475669;
    }
    > div:nth-child(1) {
      padding-left: 5px;
      width: 70px;
      line-height: 40px;
    }
    > div:nth-child(2) {
      width: calc(100% - 75px);
    }
  }

  .nodsrow {
    padding-left: 5px;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    color: #475669;
  }

  .rowinput {
    font-size: 12px;
    color: #475669;
    border: 1px solid #bfcbd9;
    border-radius: 4px;
    width: 100%;
  }

  .btnrow {
    padding-top: 5px;
    padding-bottom: 5px;
    float: right;
    padding-right: 5px;
  }

  .urlitem {
    width: 100%;
    > div {
      margin-top: 5px;
      > div {
        margin-bottom: 5px;
      }
    }
  }

  .adddbbtn {
    cursor: pointer;
  }

  .addusermodal {
    width: 100%;
    > div {
      width: 70%;
      text-align: left;
      margin: 5px auto;
    }
  }
</style>
<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import * as types from '../../store/mutation-types'
  import util from '../../util/common'
  import api from '../../util/api'
  import {SweetModal, SweetModalTab} from 'sweet-modal-vue'

  export default {
    data() {
      return {
        dataType: [
          {
            value: "json",
            label: "json"
          },
          {
            value: "REST API",
            label: "REST API"
          },
          {
            value: "数据库",
            label: "数据库"
          }
        ],
        reqType: [
          {
            value: "GET",
            label: "GET"
          },
          {
            value: "POST",
            label: "POST"
          }
        ],
        isDatasourceConfig: false,
        dsValue: "",
        dsAreaObj: {minRows: 2, maxRows: 10},
        userDBInstance: {
          id: -1,
          host: "",
          port: "",
          username: "",
          passwd: ""
        },
        userDBList: [],
        selectedDBItemId: null,
        dbTypeList: [
          {
            value: "mysql",
            label: "mysql"
          },
          {
            value: "oracle",
            label: "oracle"
          },
          {
            value: "sqlserver",
            label: "sqlserver"
          },
          {
            value: "db2",
            label: "db2"
          }
        ],
        userDBInstanceForm: {
          dbtype: null,
          dbinstance: "",
          host: "",
          port: "",
          username: "",
          passwd: ""
        }
      }
    },
    created() {
      if (this.Config.hasOwnProperty('datasource')) {
        this.isDatasourceConfig = true
        this.dsValue = util.formatJson(JSON.stringify(this.Config.rawDatasource.value))
        this.getUserDBlist()
      }
    },
    watch: {
      'Config.rawDatasource.type': {
        handler(curVal, oldVal){
          if (curVal === '数据库') {
            this.getUserDBlist()
          }
        },
        deep: true
      },

      //当用户选择userdb改变时，给已选择变量赋值
      'selectedDBItemId': {
        handler(curVal, oldVal){
          for (let i = 0; i < this.userDBList.length; i++) {
            if (curVal === this.userDBList[i].id) {
              this.userDBInstance = this.userDBList[i]
            }
          }
        },
        deep: true
      }
    },
    computed: {
      ...mapGetters({
        Config: 'datasourceConfig',
        databaseHost: 'databaseHost'
      }),
      dataLegend: {
        get: function () {
          let newStr = ""
          if (this.Config.rawDatasource.legend instanceof Array) {
            newStr = this.Config.rawDatasource.legend.join(",")
          }
          return newStr
        },
        set: function (newValue) {
          this.Config.rawDatasource.legend = newValue.split(",")
        }
      }
    },
    methods: {

      /**
       * 按照用户选择的数据接口方式更新数据
       */
      onUpdateComponentDatasource() {
        let newData = JSON.parse(this.dsValue)
//        if (this.Config.type === 'USingleText' || this.Config.type === 'uLiquidFill') {
        this.Config.rawDatasource.value = newData
        this.Config.datasource.value = newData
//        }
        this.Config.rawDatasource.database = this.userDBInstance
        this.Config.datasource = this.Config.rawDatasource
      },

      /**
       * 获得用户数据库配置列表
       */
      getUserDBlist() {
        let that = this
        let promise = api.getUserDBList()
        promise.then(function (response) {
          let result = response.data.data
          if (result instanceof Array) {
            that.userDBList = result
          }
          that.getUserDBListById(that.userDBList)
        })
      },

      /**
       * 根据用户选择的userdb的id获取该项的详细信息，每次打开都要同步，因为用户很可能在后台改了用户名和密码
       */
      getUserDBListById(_userDBList) {
        if (this.Config.hasOwnProperty('rawDatasource')) {
          let dbinstanceId = this.Config.rawDatasource.database.id
          if (dbinstanceId > 0) {
            for (let i = 0; i < _userDBList.length; i++) {
              if (dbinstanceId === _userDBList[i].id) {
                this.userDBInstance = _userDBList[i]
                this.selectedDBItemId = dbinstanceId
              }
            }
          }
        }

      },

      /**
       * 添加数据库连接实例
       */
      OpenDBInstanceModal() {
        this.$refs.addUserDBModal.open()
      },

      /**
       * 取消添加用户数据库连接
       */
      cancleAddUDBI() {
        this.$refs.addUserDBModal.close()
        this.userDBInstanceForm.dbtype = null
        this.userDBInstanceForm.dbinstance = ""
        this.userDBInstanceForm.host = ""
        this.userDBInstanceForm.port = ""
        this.userDBInstanceForm.username = ""
        this.userDBInstanceForm.passwd = ""
      },

      /**
       * 添加数据库连接
       */
      addUDBI() {
        if (this.userDBInstanceForm.dbtype === null) {
          this.$message.error('数据库类型为必填项');
          return;
        }
        if (this.userDBInstanceForm.host === "") {
          this.$message.error('IP/主机名为必填项');
          return;
        }
        if (this.userDBInstanceForm.port === "") {
          this.$message.error('端口为必填项');
          return;
        }
        if (this.userDBInstanceForm.username === "") {
          this.$message.error('用户名为必填项');
          return;
        }

        let that = this
        let promise = api.saveUserDB(this.userDBInstanceForm)
        promise.then(function (response) {
          that.$refs.addUserDBModal.close()
          that.userDBInstanceForm.dbtype = null
          that.userDBInstanceForm.dbinstance = ""
          that.userDBInstanceForm.host = ""
          that.userDBInstanceForm.port = ""
          that.userDBInstanceForm.username = ""
          that.userDBInstanceForm.passwd = ""
          that.$message.success('已保存成功')
          that.getUserDBlist()
        })
      },
      testConnection() {
        let that = this
        let connParam = {
          dbHost: that.userDBInstanceForm.host,
          dbDatabase: that.userDBInstanceForm.dbinstance,
          dbType: that.userDBInstanceForm.dbtype,
          dbUser: that.userDBInstanceForm.username,
          dbPwd: that.userDBInstanceForm.passwd,
          dbPort: that.userDBInstanceForm.port
        }
        let url = this.databaseHost + '/ds/conn/testConn'
        let condition = {
          type: 'post',
          url: url,
          condition: JSON.stringify(connParam)
        }
        let promise = api.apiRedirect(condition)
        promise.then(function (response) {
          that.$message.success('连接成功')
        }).catch(function (error) {
          that.$message.error('连接数据库失败')
        })
      }
    },
    components: {
      SweetModal,
      SweetModalTab
    }
  }
</script>
