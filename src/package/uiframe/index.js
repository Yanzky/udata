import UIframe from './src/main.vue'

UIframe.install = function (Vue) {
  Vue.component(UIframe.name,UIframe)
}

export default UIframe
