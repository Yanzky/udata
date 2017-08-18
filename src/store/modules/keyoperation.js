import * as types from '../mutation-types';

const state = {
  //左侧Slider状态
  isLeftSlider: false,
  //右侧Slider状态
  isRightSlider: false,
  //组件列表状态
  isComponentList: false,
}

const getters = {
  state: state => state,
  leftSlider: state => state.isLeftSlider,
  rightSlider: state => state.isRightSlider,
  componentList: state => state.isComponentList
}

const mutations = {
  [types.SET_LEFTSLIDER](state,status) {
    state.isLeftSlider = status
  },

  [types.SET_RIGHTSLIDER](state,status) {
    state.isRightSlider = status
  },

  [types.SET_COMPONENTLIST](state,status) {
    state.isComponentList = status
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
