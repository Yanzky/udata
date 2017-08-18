<template>
  <div @click.stop="selectComponent" :class="[{ismouseover: !isProduct},{ubar: true},{isselected:Config.isSelected && !isProduct}]"
       :style="uStyle">
    <div class="movelayer"></div>
    <iframe style="width: 100%;height: 100%;overflow: hidden;z-index: 90" :src="componentConfig.iframeUrl"></iframe>
    <div v-show="Config.isMoving" class="umovetips">
      <div>top:{{Config.style.top}},left:{{Config.style.left}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../assets/styles/main";

  .ubar {
  }

  .umovetips {
    position: relative;
    > div {
      position: absolute;
      bottom: -20px;
      right: 0;
      font-size: 12px;
      color: #fff;
    }
  }
  .movelayer {
    z-index: 100;
    background-color: rgba(0,137,251,0);
    position: absolute;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
  }
</style>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import * as types from '../../../store/mutation-types'
  import PropConfig from '../../../components/js/PropConfig'

  export default {
    name: 'UIframe',
    props: ['Config','isProduct'],
    data() {
      return {
        uStyle: null,
        componentConfig: ""

      }
    },
    watch: {
      'componentConfig': {
        handler(curVal, oldVal){
            console.log(curVal)
        },
        deep: true
      },
      'Config.isSelected': {
        handler(curVal, oldVal){
          if (curVal) {
            let propertyArr = []
            let propertyObject = $.extend(true, {}, PropConfig.props)
            propertyObject.type = 'uIframe-iframeconfig'
            propertyObject.title = 'iframe设置'
            propertyObject.props = this.componentConfig
            propertyArr.push(propertyObject)
            this.addPublicPropConfig(propertyArr)
          }
        },
        deep: true
      },
    },
    created() {
      this.uStyle = this.Config.style
      this.componentConfig = this.Config.componentStyle.uComponentConfig
    },

    mounted(){

    },

    computed: {
      ...mapGetters({
        definition: 'editorDefinition',
        publicPropConfig: 'propConfig'
      }),
    },
    methods: {
      ...mapMutations({
        setComponentStatus: [types.SET_COMPONENTSELECTED],
        setPublicPropConfig: [types.SET_PROPCONFIG],
        clearPublicPropConfig: [types.CLEAR_PROPCONFIG],
        addPublicPropConfig: [types.ADD_PROPCONFIG]
      }),

      /**
       * 选择组件
       */
      selectComponent(){
        let that = this
        this.Config.isSelected = false
        this.Config.isSelected = true

        let layouts = this.definition.layouts
        let count = layouts.length
        for (let i = 0; i < count; i++) {
          layouts[i].isSelected = false
          layouts[i].isSubComponentSelected = false

          //deselect no selecte component
          let components = layouts[i].components
          let compcount = components.length
          for (let j = 0; j < compcount; j++) {
            if (components[j].id !== this.Config.id) {
              components[j].isSelected = false
            }
            //给选中的组件外图层增加被选中标志
            if (components[j].id === this.Config.id) {
              layouts[i].isSubComponentSelected = true
            }
          }
        }

        this.setComponentStatus(false)
        setTimeout(function () {
          that.setComponentStatus(true)
        })
      }
    }
  }
</script>
