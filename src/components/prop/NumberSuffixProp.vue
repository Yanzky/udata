<template>
  <div>
    <div class="txtcontainer">
      <div>{{Config.label}}</div>
      <div>
        <el-input-number class="inputfield"
                         v-model="pxValue"
                         :step="stepValue"
                         size="small">
        </el-input-number>
      </div>
      <div>{{Config.suffix}}</div>
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
      width: 140px;
      padding-right: 20px;
    }
    > div:nth-child(3) {
      width: 20px;
    }
  }

  .inputfield {
    margin-top: 4px;
  }
</style>
<script>
  export default {
    data() {
      return {
        stepValue: 10
      }
    },
    props: ['Config'],
    created(){

    },
    computed: {
      pxValue: {
        get: function () {
          return parseInt(this.Config.value[this.Config.propName])
        },
        set: function (newValue) {
          this.Config.value[this.Config.propName] = newValue + this.Config.suffix
        }
      }
    }
  }
</script>
