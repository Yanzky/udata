import UPie from './src/main.vue'

UPie.install = function (Vue) {
  Vue.component(UPie.name,UPie)
}

export default UPie
