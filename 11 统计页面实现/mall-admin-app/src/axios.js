import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});

// 请求拦截器
instance.interceptors.request.use((config) => config, // console.log(config)
  (error) => Promise.reject(error));

// 响应拦截器
instance.interceptors.response.use((response) => {
  // console.log(response);
  if (response.data.status === 'fail') { // 账号密码错误
    return Promise.reject(response.data.msg);
  } // 账号密码正确
  return response.data.data; // 把响应的数据返回
}, (error) => Promise.reject(error));

export default instance;

// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   return response;
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });
