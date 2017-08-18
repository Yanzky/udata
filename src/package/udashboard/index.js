import UDashboard from './src/main.vue'

UDashboard.install = function (Vue) {
  Vue.component(UDashboard.name,UDashboard)
}

export default UDashboard
