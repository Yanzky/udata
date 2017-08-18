/**
 * Created by leiting on 2017/2/18.
 */
import axios from 'axios'

//http 请求拦截,给config添加头信息等
axios.interceptors.request.use(function (config) {

  let token = localStorage.getItem("token");
  if (token){
    config.headers.token = token;
  }

  return config;

}, function (err) {

  return Promise.reject(err);

});

axios.interceptors.response.use(function (response) {
  return response;
}, function (err) {
  if (err.response) {
  } else {
    console.log('Error', err.message);
  }
  return Promise.reject(err);

});
