<template>
  <div>
    <div v-for="propItem in propsGroup">
      <div class="lptitle" v-show="propItem.propObjArray.length > 0">{{propItem.title}}</div>
      <div v-for="item in propItem.propObjArray">
        <text-prop v-if="item.propType === 'text'" :Config="item" @onValueChange="onTextValueChange"></text-prop>
        <text-area-prop v-if="item.propType === 'textarea'" :Config="item" @onValueChange="onTextValueChange"></text-area-prop>
        <number-prop v-if="item.propType === 'number'" :Config="item"></number-prop>
        <number-suffix-prop v-if="item.propType === 'numbersuffix'" :Config="item"></number-suffix-prop>
        <color-prop v-if="item.propType === 'color'" :Config="item"></color-prop>
        <l-g-color-prop v-if="item.propType === 'lgcolor'" :Config="item"></l-g-color-prop>
        <select-prop v-if="item.propType === 'select'" :Config="item"></select-prop>
        <switch-prop v-if="item.propType === 'switch'" :Config="item"></switch-prop>
        <label-prop v-if="item.propType === 'label'" :Config="item"></label-prop>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .lptitle {
    height: 35px;
    line-height: 34px;
    padding-left: 5px;
    font-size: 13px;
    background-color: #8492A6;
    color: #fff;
  }
</style>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import * as types from '../../store/mutation-types'

  import TextProp from './TextProp.vue'
  import NumberProp from './NumberProp.vue'
  import NumberSuffixProp from './NumberSuffixProp.vue'
  import ColorProp from './ColorProp.vue'
  import PictureProp from './PictureProp.vue'
  import LGColorProp from './LinearGradientColorProp.vue'
  import PropConfig from '../js/PropConfig'
  import SelectProp from './SelectProp.vue'
  import SwitchProp from './SwitchProp.vue'
  import LabelProp from './LabelProp.vue'
  import TextAreaProp from './TextAreaProp.vue'

  import compTemp from '../js/ComponentTemplate'


  export default {
    data() {
      return {
        propsGroup: []
      }
    },
//    props: ['Config'],
    created() {
      this.initConfig()
    },
    computed: {
      ...mapGetters({
        Config: 'propConfig'
      }),
    },
    components: {
      TextProp,
      NumberProp,
      NumberSuffixProp,
      ColorProp,
      PictureProp,
      LGColorProp,
      SelectProp,
      SwitchProp,
      LabelProp,
      TextAreaProp
    },
    methods: {
      onTextValueChange(newValue){
      },
      initConfig() {
        let localConfig = this.Config
        let lcCount = localConfig.length
        for (let i = 0; i < lcCount; i++) {
          //需要配置的组件项的对象，包含，type，title，和配置组件本身对象
          let configItem = localConfig[i]
          //按照配置组件类型获取该组件哪些属性可以配置的数组,包含组件名称和组件类型
          let typeArray = configItem.type.split('-')
          let propConfigObjArray = []
          if (typeArray.length === 1) {
            propConfigObjArray = PropConfig.propsConfigList[typeArray[0]]
          }
          if (typeArray.length === 2) {
            propConfigObjArray = PropConfig.propsConfigList[typeArray[0]][typeArray[1]]
          }
//          let propConfigObjArray = PropConfig.propsConfigList[configItem.type]
          //计算配置组件数组的长度，后续循环使用，循环获得配置组件每一项配置属性的label
          let propConfigObjArrayCount = propConfigObjArray.length
          //配置组件组的抬头
          let propConfigTitle = configItem.title
          //获取所有组件可配置属性的label对应表/数组
          let propLabelObj = PropConfig.propertyLabel
          for (let j = 0; j < propConfigObjArrayCount; j++) {
            let propName = propConfigObjArray[j].propName
            let label = propLabelObj[propName]
            propConfigObjArray[j]['label'] = label
            propConfigObjArray[j]['propName'] = propConfigObjArray[j].propName

            //判断是否新增加的属性，在老的组件里没有，如果没有，则从原始配置文件中获取
            /*if (!localConfig[i].props.hasOwnProperty(propConfigObjArray[j].propName)) {
              let rawType = typeArray[0]
              //判断是否从别的图表类集成过来的，如果是，则从别的图表原始配置文件中获取
              if (configItem.hasOwnProperty('rawType')) {
                rawType = configItem.rawType
              }
              let newProp = compTemp[rawType].components[0].componentStyle.uComponentConfig[propName]
              if (newProp.hasOwnProperty('value')) {
                newProp = $.extend(true, {}, compTemp[rawType].components[0].componentStyle.uComponentConfig[propName])
              }
              configItem.props[propName] = newProp
            }*/
            propConfigObjArray[j]['value'] = localConfig[i].props
          }

          let propItem = {
            title: propConfigTitle,
            propObjArray: propConfigObjArray
          }
          this.propsGroup.push(propItem)
        }
      }
    }
  }
</script>
