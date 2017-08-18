<template>
  <div class="bgcontainer">
    <div class="ubanner">
      <img src="../../static/img/uinnova_logo.png"/>
    </div>
    <div class="unav">
      <div @click="openUrl('guid')">教程</div>
      <div @click="openUrl('data')">数据接口</div>
      <div @click="openUrl('component')">组件</div>
      <div @click="openUrl('update')">更新记录</div>
    </div>
    <div>
      <div class="cbtncontainer">
        <el-button @click.stop="newScene" type="primary">创建新场景</el-button>
      </div>
      <div class="container">
        <div class="row" v-if="scceneIsloading">
          <div style="text-align: center;">
            <i class="el-icon-loading"></i>
          </div>
          <div style="text-align: center;">场景列表正在加载...</div>
        </div>
        <div class="row">
          <div v-for="item in sceneList" class="col-xs-6 col-md-4">
            <div class="itemcontainer">
              <div @click="openSceneToView(item)" class="imgcontainer">
                <img :src="item.snapshot"/>
              </div>
              <div class="titlecontainer">{{item.name}}</div>
              <div class="toolbox viewbtn">
                <i @click.stop="openSceneToView(item)" class="fa fa-eye" aria-hidden="true"></i>
              </div>
              <!--<div class="toolbox1 deletebtn">-->
              <!--<i @click.stop="deleteScene(item)" class="fa fa-trash" aria-hidden="true"></i>-->
              <!--</div>-->
              <div class="toolbox editbtn">
                <i @click.stop="openSceneToEdit(item)" class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/styles/main";

  .ubanner {
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-bottom: 20px;
    img {
      width: 68px;
      height: 30px;
    }
  }

  .unav {
    position: absolute;
    top: 0;
    right: 20px;
    width: 320px;
    height: 50px;
    > div {
      float: left;
      width: 80px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
    }
    > div:hover {
      background-color: #EEE;
    }
  }

  .cbtncontainer {
    position: absolute;
    left: 30px;
    margin-top: 5px;
  }

  .bgcontainer {
    /*padding-top: 10px;*/
    position: absolute;
    min-height: 100%;
    width: 100%;
    background-color: #f8f8f8;
  }

  .itemcontainer {
    position: relative;
    background-color: #fff;
    margin: 5px;
    padding-top: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  .imgcontainer {
    cursor: pointer;
    height: 180px;
    margin: 10px;
    margin-top: 0px;
    > img {
      width: 330px;
      height: 180px;
    }
  }

  .titlecontainer {
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #475669;
  }

  .toolbox {
    cursor: pointer;
    position: absolute;
    > i {
      transform: scale(1.4);
      color: #20a0ff;
    }
    > i:hover {
      transform: scale(1.5);
      color: #2AB9FF;
    }
  }

  .editbtn {
    right: 15px;
    bottom: 5px;
  }

  .toolbox1 {
    cursor: pointer;
    position: absolute;
    > i {
      transform: scale(1.4);
      color: #666;
    }
    > i:hover {
      transform: scale(1.5);
      color: #666;
    }
  }

  .deletebtn {
    left: 15px;
    bottom: 5px;
  }

  .viewbtn {
    right: 50px;
    bottom: 5px;
  }
</style>

<script>
  import api from '../util/api'

  export default {
    data () {
      return {
        sceneList: [],
        scceneIsloading: true,
      }
    },
    created() {
      this.getSceneList()
    },
    mounted() {
    },
    methods: {
      getSceneList() {
        let that = this
        let promise = api.getSceneList()
        promise.then(function (response) {
          that.sceneList = response.data
          that.scceneIsloading = false
        })
      },

      /**
       * 编辑模式打开场景
       * @param sceneObj
       */
      openSceneToEdit(sceneObj) {
        window.open('/editor?id=' + sceneObj.id)
      },

      /**
       * 查看模式打开场景
       * @param sceneObj
       */
      openSceneToView(sceneObj) {
        window.open('/viewer?id=' + sceneObj.id)
      },

      /**
       * 创建新场景
       */
      newScene(){
        window.open('/editor')
      },

      /**
       * 删除场景
       */
      deleteScene(sceneObj) {
        let that = this
        this.$confirm('此操作将永久删除该场景, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let promise = api.deleteScene(sceneObj.id)
          promise.then(() => {
            this.$message({
              type: 'success',
              message: '场景已经删除!'
            });
            this.getSceneList()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },

      openUrl(g) {
        if (g === 'guid') {
          window.open('/useguid')
        }
        if (g === 'data') {
          window.open('/datadoc')
        }
        if (g === 'component') {
          window.open('/component')
        }
        if (g === 'update') {
          window.open('/updatelist')
        }
      }
    }
  }
</script>
