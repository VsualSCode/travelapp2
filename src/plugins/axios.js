// // import Vue from 'vue';
// import axios from 'axios';
// import store from '../store';
// import * as types from '../store/types';
// // Vue.use(axios);//不是所有的插件都支持 use安装
// // windown.axios=axios;//全局暴露
// // Vue.prototype.$http=axios;
// axios.interceptors.request.use(function(config){
//     // store == this.$store
//     store.dispatch(types.VIEW_COOM,true)
//     return config;
// },function(error){
//     return Promise.reject(error);
// });

// axios.interceptors.response.use(function(response){
//     store.dispatch(types.VIEW_COOM,false)
//     return response;
// },function(error){
//     return Promise.reject(error);
// });

// export default {
//     install: function (Vue) {
//         Vue.prototype.$http = axios;
//         window.axios = axios; //全局暴露
        
//     }
// }