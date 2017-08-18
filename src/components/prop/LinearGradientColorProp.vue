<template>
  <div>
    <div class="txtcontainer">
      <div>{{Config.label}}</div>
      <div>
        <div>
          <el-select size="small" v-model="bgColorType" placeholder="选择色式">
            <el-option
              v-for="item in bgColorTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled">
            </el-option>
          </el-select>
        </div>
        <div>
          <el-select v-if="bgColorType === '渐变色'" size="small" @change="onColorTypeChange" v-model="bgColorLineType"
                     placeholder="选择方向">
            <el-option
              v-for="item in bgColorLineTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div v-if="bgColorType === '纯色'">
          <!--<el-color-picker v-model="colorValue" show-alpha></el-color-picker>-->
          <div style="float: left">
            <el-color-picker v-model="colorValue" show-alpha></el-color-picker>
          </div>
          <div style="float: left;padding-left: 5px;width: 90px;">
            <el-input v-model="colorValue"></el-input>
          </div>
          <div style="clear: both;"></div>
        </div>
        <div v-if="bgColorType === '渐变色'">
          <div class="multicolorbox">
            <div>从:</div>
            <el-color-picker v-model="colorValue[0]" @change="startColorChange" show-alpha></el-color-picker>
            <div style="float: left;padding-left: 5px;width: 80px;">
              <el-input v-model="colorValue[0]" @change="startColorChange"></el-input>
            </div>
          </div>
          <div style="clear: left;"></div>
          <div class="multicolorbox">
            <div>到:</div>
            <el-color-picker v-model="colorValue[1]" @change="endColorChange" show-alpha></el-color-picker>
            <div style="float: left;padding-left: 5px;width: 80px;">
              <el-input v-model="colorValue[1]" @change="endColorChange"></el-input>
            </div>
          </div>
          <div style="clear: left;"></div>
        </div>
        <div>
          <picture-prop @onSelectImg="onSelectImg" v-if="bgColorType === '图片'"></picture-prop>
        </div>
      </div>
      <div style="clear: both;"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .txtcontainer {
    width: 100%;
    border-bottom: 1px solid #EFF2F7;
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
      float: left;
      width: 160px;
      > div {
        margin-top: 5px;
      }
      > div:nth-child(1) {
        padding-right: 20px;
      }
      > div:nth-child(2) {
        padding-right: 20px;
      }
    }
    .multicolorbox {
      height: 40px;
      line-height: 40px;
      > div {
        float: left;
      }
      > div:nth-child(2) {
        float: left;
      }
      > div:nth-child(3) {
        float: left;
      }
      > div:nth-child(4) {
        float: left;
      }
    }
  }
</style>
<script>
  import PictureProp from './PictureProp.vue'

  export default {
    data() {
      return {
        bgColorType: '纯色',
        bgColorLineType: 'toptobottom',
        bgColorTypeList: [
          {
            value: '纯色',
            label: '纯色'
          }, {
            value: '渐变色',
            label: '渐变色'
          }, {
            value: '图片',
            label: '图片',
            disabled: false
          }
        ],
        bgColorLineTypeList: [
          {
            value: 'toptobottom',
            label: '上->下'
          }, {
            value: 'lefttoright',
            label: '左->右'
          },
          {
            value: 'bottomtotop',
            label: '下->上'
          }, {
            value: 'rightleft',
            label: '右->左'
          }
        ]
      }
    },
    props: ['Config'],
    created(){
      if (this.Config.condition === 'noimage') {
        this.bgColorTypeList[2].disabled = true
      }
    },
    computed: {
      colorValue: {
        get: function () {
          let color = this.Config.value[this.Config.propName]
          if (this.bgColorType === '纯色') {
            if (color.indexOf('linear-gradient') >= 0) {
              let gColorArray = color.split(',');
              let startColor = (gColorArray[1] + "," + gColorArray[2] + "," + gColorArray[3] + "," + gColorArray[4]).trim()
              let endColor = (gColorArray[5] + "," + gColorArray[6] + "," + gColorArray[7] + "," + gColorArray[8]).trim()
              endColor = endColor.substr(0, endColor.length - 1)
              return startColor
            } else {
              return color
            }
          }
          if (this.bgColorType === '渐变色') {
            if (color.indexOf('linear-gradient') >= 0) {
              let gColorArray = color.split(',');
              let startColor = (gColorArray[1] + "," + gColorArray[2] + "," + gColorArray[3] + "," + gColorArray[4]).trim()
              let endColor = (gColorArray[5] + "," + gColorArray[6] + "," + gColorArray[7] + "," + gColorArray[8]).trim()
              endColor = endColor.substr(0, endColor.length - 1)
              return [startColor, endColor]
            } else {
              return [color, color]
            }
          }
          return null
        },
        set: function (newValue) {
          if (this.bgColorType === '纯色') {
            this.Config.value[this.Config.propName] = 'linear-gradient(to bottom, ' + newValue + ', ' + newValue + ')'
          }
        }
      }
    },
    methods: {

      //设置开始色,通过计算后赋值给色值变量
      startColorChange(newValue) {
        switch (this.bgColorLineType) {
          case "toptobottom":
            this.Config.value[this.Config.propName] = 'linear-gradient(to bottom, ' + newValue + ', ' + this.colorValue[1] + ')'
            break;
          case "lefttoright":
            this.Config.value[this.Config.propName] = 'linear-gradient(to right, ' + newValue + ', ' + this.colorValue[1] + ')'
            break;
          case "bottomtotop":
            this.Config.value[this.Config.propName] = 'linear-gradient(to top, ' + newValue + ', ' + this.colorValue[1] + ')'
            break;
          case "rightleft":
            this.Config.value[this.Config.propName] = 'linear-gradient(to left, ' + newValue + ', ' + this.colorValue[1] + ')'
            break;
          default:
            this.Config.value[this.Config.propName] = 'linear-gradient(to bottom, ' + newValue + ', ' + this.colorValue[1] + ')'
            break;
        }
      },

      //设置结束色,通过计算后赋值给色值变量
      endColorChange(newValue) {
        switch (this.bgColorLineType) {
          case "toptobottom":
            this.Config.value[this.Config.propName] = 'linear-gradient(to bottom, ' + this.colorValue[0] + ', ' + newValue + ')'
            break;
          case "lefttoright":
            this.Config.value[this.Config.propName] = 'linear-gradient(to right, ' + this.colorValue[0] + ', ' + newValue + ')'
            break;
          case "bottomtotop":
            this.Config.value[this.Config.propName] = 'linear-gradient(to top, ' + this.colorValue[0] + ', ' + newValue + ')'
            break;
          case "rightleft":
            this.Config.value[this.Config.propName] = 'linear-gradient(to left, ' + this.colorValue[0] + ', ' + newValue + ')'
            break;
          default:
            this.Config.value[this.Config.propName] = 'linear-gradient(to bottom, ' + this.colorValue[0] + ', ' + newValue + ')'
            break;
        }
      },

      //当渐变颜色类型改变是，更新色值
      onColorTypeChange() {
        switch (this.bgColorLineType) {
          case "toptobottom":
            this.Config.value[this.Config.propName] = 'linear-gradient(to bottom, ' + this.colorValue[0] + ', ' + this.colorValue[1] + ')'
            break;
          case "lefttoright":
            this.Config.value[this.Config.propName] = 'linear-gradient(to right, ' + this.colorValue[0] + ', ' + this.colorValue[1] + ')'
            break;
          case "bottomtotop":
            this.Config.value[this.Config.propName] = 'linear-gradient(to top, ' + this.colorValue[0] + ', ' + this.colorValue[1] + ')'
            break;
          case "rightleft":
            this.Config.value[this.Config.propName] = 'linear-gradient(to left, ' + this.colorValue[0] + ', ' + this.colorValue[1] + ')'
            break;
          default:
            this.Config.value[this.Config.propName] = 'linear-gradient(to bottom, ' + this.colorValue[0] + ', ' + this.colorValue[1] + ')'
            break;
        }
      },

      onSelectImg(imgUrl) {
        this.Config.value[this.Config.propName] = "url(" + imgUrl + ")"
      }
    },
    components: {
      PictureProp
    }
  }
</script>
