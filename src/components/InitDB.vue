<template>
  <div class="dbcontainer">
    <div>
      <div>数据库主机名</div>
      <div>
        <el-input v-model="paramObj.hostName"></el-input>
      </div>
    </div>
    <div>
      <div>端口</div>
      <div>
        <el-input v-model="paramObj.port"></el-input>
      </div>
    </div>
    <div>
      <div>用户名</div>
      <div>
        <el-input v-model="paramObj.userName"></el-input>
      </div>
    </div>
    <div>
      <div>密码</div>
      <div>
        <el-input v-model="paramObj.passWord"></el-input>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .dbcontainer{
    width: 50%;
    margin: 0 auto;
    >div >div {
      margin: 5px 0;
    }
  }
</style>

<script>
  import api from '../util/api'
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  export default {
    components: {ElInput},
    data() {
      return {
        paramObj: {
          userName: "",
          passWord: "",
          hostName: "",
          port: ""
        }
      }
    },
    created() {
      this.getDbParam()
    },
    methods: {
      getDbParam() {
        let promise = api.getDbParam()
        promise.then((response) => {
          this.paramObj = response.data
        })
      }
    }
  }
</script>
