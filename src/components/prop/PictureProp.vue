<template>
  <div class="piccontainer">
    <el-upload
      class="upload-demo"
      :http-request="onUploadImage"
      action="http://localhost:8000/udatav/uploadfile"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      list-type="text">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
    </el-upload>
    <div class="piclist">
      <div v-if="!isListChange" class="floatitem" v-for="item in myPictureList">
        <div @click="selectImg(item)" style="position: relative">
          <img :src="item.url"/>
          <i v-show="item.isSelected" class="fa fa-check-circle" aria-hidden="true"></i>
        </div>
        <!--<div>{{item.displayname}}</div>-->
      </div>
      <div style="clear: both;"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .piccontainer {
    width: 100%;
  }

  .upload-demo {
    width: 160px;
  }

  .piclist {
    width: 160px;
    > div {
      width: 80px;
      padding: 0;
      margin: 0;
      > div:nth-child(1) {
        height: 80px;
        width: 100%;
        text-align: center;
        padding: 10px;
        > img {
          width: 60px;
          height: 60px;
          cursor: pointer;
        }
        > i {
          position: absolute;
          right: 15px;
          top: 15px;
          color: #13CE66
        }
      }
      /*>div:nth-child(2){
        height: 20px;
        width: 100%;
        text-align: center;
        line-height: 20px;
      }*/
    }
  }

  .floatitem {
    float: left;
  }
</style>
<script>
  import api from '../../util/api'

  export default {
    data() {
      return {
        myPictureList: [],
        isListChange: false
      }
    },
    props: ['Config'],

    created(){
      this.getUserImageList()
    },
    methods: {
      handleRemove(file, fileList) {
      },
      handlePreview(file) {
      },

      /**
       * 上传图片
       * @param e
       */
      onUploadImage(e) {
        let that = this;
        let promise = api.uploadUserImage('/udatav/uploadfile', e.file)
        promise.then(function (response) {
          that.myPictureList = []
          that.getUserImageList()
        })
      },

      /**
       * 获取用户上传的图片列表
       */
      getUserImageList() {
        let that = this
        let url = '/udatav/getbgimglist'
        let promise = api.getUserImageList(url)
        promise.then(function (response) {
          that.myPictureList = response.data
          let mylist = that.myPictureList
          let count = mylist.length
          for (let i = 0; i < count; i++) {
            mylist[i]['isSelected'] = false
          }
        })
      },

      selectImg(item) {
        this.isListChange = true
        item.isSelected = true
        let mylist = this.myPictureList
        let count = mylist.length
        for (let i = 0; i < count; i++) {
          if (mylist[i].id !== item.id) {
            mylist[i].isSelected = false
          }
        }
        this.isListChange = false

        this.$emit('onSelectImg', item.url)
      }
    }
  }
</script>
