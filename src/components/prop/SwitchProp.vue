<template>
  <div>
    <div class="txtcontainer">
      <div>{{Config.label}}</div>
      <div>
        <el-switch
          v-model="Config.value[Config.propName]"
          on-text=""
          off-text="">
        </el-switch>
      </div>
    </div>
    <div style="clear: both"></div>
  </div>
</template>
<style lang="scss" scoped>
  .txtcontainer {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #EFF2F7;
    > div {
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      color: #475669;
      float: left;
    }
    > div:nth-child(1) {
      padding-left: 5px;
      width: 70px;
    }
    > div:nth-child(2) {
      width: 160px;
      padding-right: 20px;
    }
  }
</style>
<script>
  export default {
    data() {
      return {}
    },
    props: ['Config'],
    created(){

    },
    methods: {
    }
  }
</script>
