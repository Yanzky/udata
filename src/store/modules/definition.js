import * as types from '../mutation-types';

const state = {
  editorDefinition: {},
  productDefinition: {},
  //组件是否被选中
  componentSelectedStatus: false,
  //层或者组件设置属性的临时存放,清空改变量就表示当前不在设置属性状态
  propConfig: [],
  datasourceConfig: {},
  eventConfig: {
    activeStatus: false,
    value: []
  },
  //连接数据库服务器的地址,在static中的conf.js可以配置
  databaseHost: UdatavDBHost,
  //画布中所有组件的数据
  componentsDataObj: {},
  //告诉所有的子组件，需要自己单独加载数据.这种情况适合组件合并，移动等.
  needReloadData: false,
}

const getters = {
  definitions: state => state,
  editorDefinition: state => state.editorDefinition,
  productDefinition: state => state.productDefinition,
  componentSelectedStatus: state => state.componentSelectedStatus,
  propConfig: state => state.propConfig,
  datasourceConfig: state => state.datasourceConfig,
  databaseHost: state => state.databaseHost,
  eventConfig: state => state.eventConfig,
  componentsDataObj: state => state.componentsDataObj,
  needReloadData: state => state.needReloadData
}

const mutations = {
  //设置可编辑的定义文件
  [types.SET_EDITORDEF](state, def){
    state.editorDefinition = def
  },

  //设置组件需要重新加载数据
  [types.SET_RELOADDATA](state, arg){
    state.needReloadData = arg
  },

  //设置已发布的定义文件
  [types.SET_PRODEF](state, def){
    state.productDefinition = def
  },

  //设置画布组件的数据集合
  [types.SET_COMPONENTSDATAOBJ](state, obj){
    state.componentsDataObj = obj
  },

  //设置组件的选择状态
  [types.SET_COMPONENTSELECTED](state, status){
    state.componentSelectedStatus = status
  },

  //设置可配置属性
  [types.SET_PROPCONFIG](state, config){
    state.propConfig = config
  },

  //清空可配置属性
  [types.CLEAR_PROPCONFIG](state){
    state.propConfig = []
  },

  //push的方式向现有配置文件里追加配置文件
  [types.ADD_PROPCONFIG](state, config){
    state.propConfig = state.propConfig.concat(config)
  },

  //设置可配置数据源属性
  [types.SET_DSCONFIG](state, config){
    state.datasourceConfig = config
  },

  //清空可配置数据源属性
  [types.CLEAR_DSCONFIG](state){
    state.datasourceConfig = {}
  },

  //设置事件配置属性
  [types.SET_EVENTCONFIG](state, config) {
    state.eventConfig.activeStatus = true
    state.eventConfig.value = config
  },

  //清空事件配置属性
  [types.CLEAR_EVENTCONFIG](state){
    state.eventConfig.activeStatus = false
    state.eventConfig.value = []
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
