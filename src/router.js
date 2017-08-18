import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import store from './store/index'
import App from './App.vue'
import Main from './components/Main.vue'
import Editor from './components/Eidtor.vue'
import Viewer from './components/Viewer.vue'
import InitDb from './components/InitDB.vue'
import UserDBManagement from './components/UserDBManagement.vue'


Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [
  {path: '/', component: Main},
  {path: '/editor', component: Editor},
  {path: '/viewer', component: Viewer},
  {path: '/initdb', component: InitDb},
  {path: '/userdbmanagement', component: UserDBManagement},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
