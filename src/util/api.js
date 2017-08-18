import axios from 'axios'

function getInitCanvasTemplate(url, condition) {
  return axios.get(url, condition);
}

/**
 * 上传图片
 * @param url
 * @param file
 * @returns {AxiosPromise}
 */
function uploadUserImage(url, file) {
  let form = new FormData()
  form.append('file', file)
  return axios.post(url, form, {
    method: 'post',
    headers: {'Content-Type': 'multipart/form-data'}
  })
}

/**
 * 获取用户上传的图片列表
 * @param url
 * @returns {AxiosPromise}
 */
function getUserImageList(url) {
  return axios.post(url)
}

/**
 * 保存用户场景
 * @param url
 * @param condition
 * @returns {AxiosPromise}
 */
function saveScene(condition) {
  let url = '/udatav/savescene'
  return axios.post(url, condition)
}

/**
 * 更新场景
 * @param url
 * @param condition
 * @returns {AxiosPromise}
 */
function updateScene(condition) {
  let url = '/udatav/updatescene'
  return axios.post(url, condition)
}

/**
 * 删除场景
 * @param condition
 * @returns {AxiosPromise}
 */
function deleteScene(condition) {
  let url = '/udatav/deletescene'
  return axios.post(url,condition,{'Content-Type': 'text/plain'})
}

/**
 * 发布场景
 * @param condition
 * @returns {AxiosPromise}
 */
function publishScene(condition) {
  let url = '/udatav/publishscene'
  return axios.post(url,condition,{'Content-Type': 'text/plain'})
}

/**
 * 获取场景列表
 * @returns {AxiosPromise}
 */
function getSceneList() {
  let url = '/udatav/getscenelist'
  return axios.post(url)
}

/**
 * 通过场景ID获取场景对象文件
 * @param url
 * @param condition
 * @returns {AxiosPromise}
 */
function getSceneById(condition) {
  let url = '/udatav/getscenebyid'
  return axios.post(url,condition,{'Content-Type': 'text/plain'})
}

/**
 * 场景导出
 * @param condition
 * @returns {AxiosPromise}
 */
function exportScene(condition) {
  let url ="/udatav/exportscene?id=" + condition
  return axios.get(url)
}

/**
 * 打开场景
 * @param file
 * @returns {AxiosPromise}
 */
function openScene(file) {
  let url="/udatav/openscene"
  let form = new FormData()
  form.append('file', file)
  return axios.post(url, form, {
    method: 'post',
    headers: {'Content-Type': 'multipart/form-data'}
  })
}

/**
 * rest api转发
 * @param condition
 * @returns {AxiosPromise}
 */
function apiRedirect(condition) {
  let url = "/udatav/apiredirect"
  return axios.post(url,condition,{'Content-Type': 'text/plain'})
}

function apiRedirectBatch(condition) {
  let url = "/udatav/apiredirectbatch"
  return axios.post(url,condition)
}

/**
 * 保存用户的数据库连接信息
 * @param condition
 * @returns {AxiosPromise}
 */
function saveUserDB(condition) {
  let url = "/udatav/saveuserdb"
  return axios.post(url,condition)
}

function updateUserDB(condition) {
  let url = "/udatav/updateuserdb"
  return axios.post(url,condition)
}

function deleteUserDB(condition) {
  let url = "/udatav/deleteuserdb"
  return axios.post(url,condition,{'Content-Type': 'text/plain'})
}

function getUserDBList() {
  let url = "/udatav/getuserdblist"
  return axios.post(url)
}

function getUserDBById(condition) {
  let url = "/udatav/getuserdbbyid"
  return axios.post(url,condition,{'Content-Type': 'text/plain'})
}

function getDbParam() {
  let url = "/udatav/getdbparam"
  return axios.post(url)
}

function saveDbParam(condition) {
  let url = "/udatav/savedbparam"
  return axios.post(url,condition)
}


export default {
  getInitCanvasTemplate,
  uploadUserImage,
  getUserImageList,
  saveScene,
  updateScene,
  deleteScene,
  publishScene,
  getSceneList,
  getSceneById,
  exportScene,
  openScene,
  apiRedirect,
  saveUserDB,
  updateUserDB,
  deleteUserDB,
  getUserDBList,
  getUserDBById,
  getDbParam,
  saveDbParam,
  apiRedirectBatch
}
