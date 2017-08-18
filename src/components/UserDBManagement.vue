<template>
  <div class="bgcontainer">
    <div class="dbcontainer">
      <div>
        <table class="table table-striped table-bordered table-hover">
          <thead>
          <td style="height: 40px;">实例名称</td>
          <td>数据库类型</td>
          <td>服务器IP/hostname</td>
          <td>端口号</td>
          <td>用户名</td>
          <td>操作
            <el-button type="primary" size="small" icon="plus"
                       @click="newItem()"></el-button>
          </td>
          </thead>
          <tbody>
          <tr v-for="(item,index) in userDBList">
            <td v-if="!item.isedit">{{item.dbinstance}}</td>
            <td v-if="item.isedit">
              <el-input v-model="item.dbinstance"></el-input>
            </td>
            <td v-if="!item.isedit">{{item.dbtype}}</td>
            <td v-if="item.isedit">
              <el-input v-model="item.dbtype"></el-input>
            </td>
            <td v-if="!item.isedit">{{item.host}}</td>
            <td v-if="item.isedit">
              <el-input v-model="item.host"></el-input>
            </td>
            <td v-if="!item.isedit">{{item.port}}</td>
            <td v-if="item.isedit">
              <el-input v-model="item.port"></el-input>
            </td>
            <td v-if="!item.isedit">{{item.username}}</td>
            <td v-if="item.isedit">
              <el-input size="small" placeholder="用户名" v-model="item.username"></el-input>
              <el-input size="small" placeholder="密码" type="password" v-model="item.passwd"></el-input>
            </td>
            <td>
              <el-button v-show="!item.isedit" type="primary" size="small" @click="editItem(item,index)"
                         icon="edit"></el-button>
              <el-button v-show="!item.isedit" type="primary" size="small" @click="deleteItem(item,index)"
                         icon="delete"></el-button>
              <el-button v-show="item.isedit && !item.isnew" type="primary" size="small" icon="check"
                         @click="updateItem(item,index)"></el-button>
              <el-button v-show="item.isedit && !item.isnew" type="primary" size="small" icon="close"
                         @click="cancleEdit(item,index)"></el-button>
              <el-button v-show="item.isnew" type="primary" size="small" icon="check"
                         @click="saveItem(item,index)"></el-button>
              <el-button v-show="item.isnew" type="primary" size="small" icon="close"
                         @click="deleteNew(item,index)"></el-button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bgcontainer {
    position: absolute;
    min-height: 100%;
    width: 100%;
    background-color: #f8f8f8;
  }

  .dbcontainer {
    width: 79%;
    margin: 0 auto;
  }
</style>

<script>
  import api from '../util/api'
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";

  export default {
    components: {ElInput},
    data(){
      return {
        userDBList: []
      }
    },
    created() {
      this.getUserDBlist()
    },
    methods: {
      getUserDBlist() {
        let promise = api.getUserDBList()
        promise.then((response) => {
          this.userDBList = response.data.data
          let count = this.userDBList.length
          for (let i = 0; i < count; i++) {
            this.userDBList[i]['isedit'] = false
          }
        })
      },

      editItem(item, index) {
        item.isedit = true
        this.$set(this.userDBList, index, item)
      },

      deleteItem(item, index){
        let promise = api.deleteUserDB(item.id)
        promise.then((response) => {
          item.isedit = false
          this.$set(this.userDBList, index, item)
          this.$message({
            showClose: true,
            message: '数据已删除',
            type: 'success'
          });
          this.getUserDBlist()
        })
      },
      updateItem(item, index){
        let promise = api.updateUserDB(item)
        promise.then((response) => {
          item.isedit = false
          this.$set(this.userDBList, index, item)
          this.$message({
            showClose: true,
            message: '数据已更新',
            type: 'success'
          });
        })
      },
      cancleEdit(item, index){
        item.isedit = false
        this.$set(this.userDBList, index, item)
      },
      newItem(){
          let obj = {
            dbtype: "mysql",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: "",
            isedit: true,
            isnew: true
          }
          this.userDBList.push(obj)
      },
      saveItem(item,index){
        let promise = api.saveUserDB(item)
        promise.then((response) => {
          item.isedit = false
          delete item.isnew
          this.$set(this.userDBList, index, item)
          this.$message({
            showClose: true,
            message: '数据已保存',
            type: 'success'
          });
        })
      },

      deleteNew(item,index){
          this.userDBList.splice(index,1)
      }
    }
  }
</script>
