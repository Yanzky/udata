import UBar from './src/main.vue'

UBar.install = function (Vue) {
  Vue.component(UBar.name,UBar)
}

export default UBar
