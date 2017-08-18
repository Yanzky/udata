import URadar from './src/main.vue'

URadar.install = function (Vue) {
  Vue.component(URadar.name,URadar)
}

export default URadar
