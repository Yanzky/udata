<template>
  <div>
    <div class="txtcontainer">
      <div>{{Config.label}}</div>
      <div>
        <div style="float: left">
          <el-color-picker @change="valueChange" v-model="Config.value[Config.propName]" show-alpha></el-color-picker>
        </div>
        <div style="float: left;padding-left: 5px;width: 90px;">
          <el-input v-model="Config.value[Config.propName]"></el-input>
        </div>
        <div style="clear: both;"></div>
      </div>
      <div style="clear: both;"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .txtcontainer {
    width: 100%;
    border-bottom: 1px solid #EFF2F7;
    padding-top: 5px;
    > div {
      font-size: 13px;
      color: #475669;
    }
    > div:nth-child(1) {
      float: left;
      height: 40px;
      line-height: 40px;
      padding-left: 5px;
      width: 70px;
    }
    > div:nth-child(2) {
      /*width: 160px;*/
    }
  }
</style>
<script>
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";

  export default {
    data() {
      return {
      }
    },
    props:['Config'],
    created(){
    },
    methods: {
      valueChange() {
      }
    },
    components: {
      ElInput
    }
  }
</script>
