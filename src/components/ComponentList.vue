<template>
  <el-menu :default-openeds="['1']" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen"
           @close="handleClose">
    <el-submenu index="1">
      <template slot="title"><i style="margin-right: 10px;" class="fa fa-th" aria-hidden="true"></i>通用</template>
      <div @click="onAddComponent('layout')" class="ccell">
        <div>
          <img src="/static/img/icon_comp_layout.png"/>
        </div>
        <div>图层</div>
      </div>
      <div @click="onAddComponent('rectlayout')" class="ccell">
        <div>
          <img src="/static/img/icon_comp_rect.png"/>
        </div>
        <div>矩形框</div>
      </div>
      <div @click="onAddComponent('usingletext')" class="ccell">
        <div>
          <img src="/static/img/icon_comp_srowtext.png"/>
        </div>
        <div>文本</div>
      </div>
      <div @click="onAddComponent('uiframe')" class="ccell">
        <div>
          <img src="/static/img/icon_comp_iframe.png"/>
        </div>
        <div>iframe</div>
      </div>
      <!--<div class="ccell">-->
        <!--<div>-->
          <!--<img src="/static/img/icon_comp_statuscard.png"/>-->
        <!--</div>-->
        <!--<div>轮询表格</div>-->
      <!--</div>-->
      <div @click="onAddComponent('unumbercard')" class="ccell">
        <div>
          <img src="/static/img/icon_comp_numbercard.png"/>
        </div>
        <div>数字翻牌器</div>
      </div>
      <div @click="onAddComponent('utimecard')" class="ccell">
        <div>
          <img src="/static/img/icon_comp_timecard.png"/>
        </div>
        <div>时间器</div>
      </div>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i style="margin-right: 10px;" class="fa fa-line-chart"></i>常用图表</template>
      <div>
        <div @click="onAddComponent('upie')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_pie.png"/>
          </div>
          <div>饼图</div>
        </div>
        <div @click="onAddComponent('upierose')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_pierose.png"/>
          </div>
          <div>玫瑰饼图</div>
        </div>
        <div @click="onAddComponent('upiecicle')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_ciclebar.png"/>
          </div>
          <div>环状图</div>
        </div>
        <div @click="onAddComponent('upiemulticicle')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_multicicle.png"/>
          </div>
          <div>多环图</div>
        </div>
        <div @click="onAddComponent('ubar')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_bar.png"/>
          </div>
          <div>柱状图</div>
        </div>
        <div @click="onAddComponent('ubarmulti')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_bargroup.png"/>
          </div>
          <div>多柱图</div>
        </div>
        <div @click="onAddComponent('ubarlrhoriz')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_barhoriz.png"/>
          </div>
          <div>双向柱图</div>
        </div>
        <div @click="onAddComponent('ubarbg')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_barbg.png"/>
          </div>
          <div>带底柱图</div>
        </div>
        <div @click="onAddComponent('ubaricon')" class="ccell">
          <div>
            <img src="/static/img/icon_process_baricon.png"/>
          </div>
          <div>图标柱图</div>
        </div>
        <div @click="onAddComponent('ubarprocess')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_barprocess.png"/>
          </div>
          <div>对比横柱</div>
        </div>
        <div @click="onAddComponent('ulinearea')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_linearea.png"/>
          </div>
          <div>区域图</div>
        </div>
        <div @click="onAddComponent('ulineareamulti')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_multiarea.png"/>
          </div>
          <div>多域图</div>
        </div>
        <div @click="onAddComponent('uline')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_line.png"/>
          </div>
          <div>折线图</div>
        </div>
        <div @click="onAddComponent('ulinemulti')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_linegroup.png"/>
          </div>
          <div>多线图</div>
        </div>
        <!--<div class="ccell">-->
          <!--<div>-->
            <!--<img src="/static/img/icon_comp_scatter.png"/>-->
          <!--</div>-->
          <!--<div>气泡图</div>-->
        <!--</div>-->
        <div @click="onAddComponent('uliquidfill')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_waterprocess.png"/>
          </div>
          <div>水位图</div>
        </div>
        <div @click="onAddComponent('uradar')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_radar.png"/>
          </div>
          <div>雷达图</div>
        </div>
        <div @click="onAddComponent('udashboard')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_dashboard.png"/>
          </div>
          <div>仪表盘</div>
        </div>
      </div>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i style="margin-right: 10px;" class="fa fa-map-marker"></i>地图</template>
      <div>
        <div @click="onAddComponent('2dmapchina')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_2dmap.png"/>
          </div>
          <div>2D中国地图</div>
        </div>
        <div @click="onAddComponent('2dmapworld')" class="ccell">
          <div>
            <img src="/static/img/icon_comp_2dmapworld.png"/>
          </div>
          <div>2D世界地图</div>
        </div>
        <!--<div @click="onAddComponent('uglobe')" class="ccell">-->
          <!--<div>-->
            <!--<img src="/static/img/icon_comp_3dmap.png"/>-->
          <!--</div>-->
          <!--<div>3D地球</div>-->
        <!--</div>-->
      </div>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title"><i style="margin-right: 10px;" class="fa fa-video-camera"></i>媒体</template>
      <div>
        <div class="ccell">
          <div>
            <img src="/static/img/icon_comp_audio.png"/>
          </div>
          <div>音频</div>
        </div>
        <div class="ccell">
          <div>
            <img src="/static/img/icon_comp_video.png"/>
          </div>
          <div>视频</div>
        </div>
      </div>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title"><i style="margin-right: 10px;" class="fa fa-video-camera"></i>gis图表</template>
      <div>
        <div class="ccell">
          <div>
            <img src="/static/img/icon_comp_audio.png"/>
          </div>
          <div>1</div>
        </div>
        <div class="ccell">
          <div>
            <img src="/static/img/icon_comp_video.png"/>
          </div>
          <div>2</div>
        </div>
      </div>
    </el-submenu>
  </el-menu>
</template>
<style lang="scss" scoped>
  .ccell {
    float: left;
    width: calc(50% - 10px);
    height: 60px;
    background-color: #324057;
    margin: 5px;
    color: #fff;
    cursor: pointer;

    div {
      width: 100%;
      color: #fff;
      font-size: 12px;
    }
    div:nth-child(1) {
      height: calc(100% - 20px);
      text-align: center;
      img {
        width: 80px;
        height: 40px;
      }
    }
    div:nth-child(2) {
      height: 20px;
      line-height: 20px;
      text-align: center;
    }
  }
</style>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import * as types from '../store/mutation-types'
  import ComponentTemplate from './js/ComponentTemplate'

  export default {
    data() {
      return {
      }
    },
    created() {

    },
    computed: {
      ...mapGetters({
        definition: 'editorDefinition'
      }),
    },
    methods: {
      ...mapMutations({
        setDefinition: [types.SET_EDITORDEF],
      }),

      /***
       * 增加组件
       * compType: 组件类型
       */
      onAddComponent(compType) {
        switch (compType) {
          case 'layout':
            this.addLayout()
            break;
          case 'usingletext':
              this.addUSingleText()
              break;
          case 'upie':
            this.addUPie()
            break;
          case 'upiecicle':
            this.addUPieCicle()
            break;
          case 'upiemulticicle':
            this.addUPieMultiCicle()
            break;
          case 'upierose':
            this.addUPieRose()
            break;
          case 'rectlayout':
            this.addURectLayout()
            break;
          case '2dmapchina':
            this.add2DMapChina()
            break;
          case '2dmapworld':
            this.add2DMapWorld()
            break;
          case 'uglobe':
            this.addUGlobe()
            break;
          case 'uliquidfill':
            this.addULiquidFill()
            break;
          case 'uiframe':
            this.addUIframe()
            break;
          case 'ubar':
            this.addUBar()
            break;
          case 'ubarbg':
            this.addUBarBG()
            break;
          case 'ubarmulti':
            this.addUBarMulti()
            break;
          case 'ubarlrhoriz':
            this.addUBarLRHoriz()
            break;
          case 'uline':
            this.addULine()
            break;
          case 'ulinemulti':
            this.addULineMulti()
            break;
          case 'ulinearea':
            this.addULineArea()
            break;
          case 'ulineareamulti':
            this.addULineAreaMulti()
            break;
          case 'uradar':
            this.addURadar()
            break;
          case 'unumbercard':
            this.addUNumberCard()
            break;
          case 'utimecard':
            this.addUTimeCard()
            break;
          case 'udashboard':
            this.addUDashboard()
            break;
          case 'ubarprocess':
            this.addUBarProcess()
            break;
          case 'ubaricon':
            this.addUBarIcon()
            break;
        }
      },

      /**
       * 增加图层
       */
      addLayout() {
        let layouts = this.definition.layouts
        let tempLayout = $.extend(true,{},ComponentTemplate.layout)
        let layoutId = "layout" + (new Date()).getTime()
        tempLayout.id = layoutId
        layouts.push(tempLayout)
      },

      /**
       * 增加矩形框组件
       */
      addURectLayout() {
        let layouts = this.definition.layouts
        let tempLayout = $.extend(true,{},ComponentTemplate.uRectLayout)
        let layoutId = "rectlayout" + (new Date()).getTime()
        let componentId = "urectlayout" + (new Date()).getTime()
        tempLayout.id = layoutId
        tempLayout.components[0].id = componentId
        layouts.push(tempLayout)
      },

      /**
       * 添加单行文本
       */
      addUSingleText() {
        let layouts = this.definition.layouts
        let tempLayout = $.extend(true,{},ComponentTemplate.uSingleText)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "usingletext" + (new Date()).getTime()
        tempLayout.id = layoutId
        tempLayout.components[0].id = componentId
        tempLayout.components[0].rawDatasource = $.extend(true,{},tempLayout.components[0].datasource)
        layouts.push(tempLayout)
      },

      /**
       * 添加饼图
       */
      addUPie() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uPie)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "upie" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加环状图
       */
      addUPieCicle() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uPie)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "upiecicle" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.name = "环状图"
        tempComponent.components[0].name = "环状图"
        tempComponent.components[0].id = componentId
        tempComponent.components[0].type = 'uPieCicle'
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加多环状图
       */
      addUPieMultiCicle() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uPieMultiCicle)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "upiemulticicle" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加玫瑰图
       */
      addUPieRose() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uPie)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "upierose" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.name = "玫瑰饼图"
        tempComponent.components[0].name = "玫瑰饼图"
        tempComponent.components[0].id = componentId
        tempComponent.components[0].type = 'uPieRose'
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加2D中国地图
       */
      add2DMapChina() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.u2DMapChina)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "u2dmapchina" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加2D世界
       */
      add2DMapWorld() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.u2DMapWorld)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "u2dmapworld" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加3D地球
       */
      addUGlobe() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uGlobe)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "uglobe" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加水位图
       */
      addULiquidFill() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uLiquidFill)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "uliquidfill" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加iframe
       */
      addUIframe() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uIframe)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "uiframe" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        layouts.push(tempComponent)
      },

      /**
       * 添加折线图
       */
      addULine() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uLine)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "uline" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加折线图
       */
      addULineMulti() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uLine)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "ulinemulti" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.name = "多线图"
        tempComponent.components[0].name = "多线图"
        tempComponent.components[0].id = componentId
        tempComponent.components[0].type = 'uLineMulti'
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加折线图
       */
      addULineArea() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uLine)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "uline" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.name = "区域图"
        tempComponent.components[0].name = "区域图"
        tempComponent.components[0].id = componentId
        tempComponent.components[0].type = 'uLineArea'
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加折线图
       */
      addULineAreaMulti() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uLine)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "uline" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.name = "多域图"
        tempComponent.components[0].name = "多域图"
        tempComponent.components[0].id = componentId
        tempComponent.components[0].type = 'uLineAreaMulti'
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加柱状图
       */
      addUBar() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uBar)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "ubar" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加带底柱状图
       */
      addUBarBG() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uBarBG)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "ubarbg" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加多柱状图
       */
      addUBarMulti() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uBar)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "ubarmulti" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.name = "多柱图"
        tempComponent.components[0].name = "多柱图"
        tempComponent.components[0].id = componentId
        tempComponent.components[0].type = 'uBarMulti'
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      addUBarIcon() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uBar)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "ubaricon" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.name = "图标柱图"
        tempComponent.components[0].name = "图标柱图"
        tempComponent.components[0].id = componentId
        tempComponent.components[0].type = 'uBarIcon'
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加进度条
       */
      addUBarProcess() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uBarProcess)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "ubarprocess" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加左右分开多柱状图
       */
      addUBarLRHoriz() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uBarLRHoriz)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "ubarlrhoriz" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        tempComponent.components[0].type = 'uBarLRHoriz'
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加雷达图
       */
      addURadar() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uRadar)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "uradar" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 添加数字翻牌器
       */
      addUNumberCard() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uNumberCard)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "unumbercard" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 时间器
       */
      addUTimeCard() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uTimeCard)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "utimecard" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      /**
       * 仪表盘
       */
      addUDashboard() {
        let layouts = this.definition.layouts
        let tempComponent = $.extend(true,{},ComponentTemplate.uDashboard)
        let layoutId = "layout" + (new Date()).getTime()
        let componentId = "udashboard" + (new Date()).getTime()
        tempComponent.id = layoutId
        tempComponent.components[0].id = componentId
        tempComponent.components[0].rawDatasource = $.extend(true,{},tempComponent.components[0].datasource)
        layouts.push(tempComponent)
      },

      handleOpen() {
      },
      handleClose() {
      }
    }
  }
</script>
