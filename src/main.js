import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

// Vue.config.productionTip = false

import './assets/css/base.css' //公共资源  css本身暴露
import './assets/css/style.css'
// import './assets/css/LArea.css'
// import './assets/css/LCalendar.css'
// import './assets/css/mobileSelect.css'

// import './assets/js/jquery-1.7.2'
import './assets/js/flexible.min.js'
// import './assets/js/AreaData.json'
// import './assets/js/LArea.js'
// import './assets/js/LCalendar.js'
// import './assets/js/LAreaData2.js'
// import './assets/js/mobileSelect.js'
// import './assets/js/tab.js'






//路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// import routes from './router/router.config';
// const router = new VueRouter(routes);

//交互axios
import axios from 'axios'
axios.defaults.withCredentials=true; //全局配置携带跨源凭证
//配置拦截器
// axios.interceptors.request.use(function (config) {
//   // 在发出正确请求之前做点事
//   store.dispatch('showLoading');
//   return config;// 返回现在配置给拦截器,一定要反绘制
// }, function (error) {
//   // 在发出错误请求之前做点事
//   return Promise.reject(error);
// });

// axios.interceptors.response.use(function (response) {
//   // 在响应之后做点事
//   store.dispatch('hideLoading');
//   return response;  // 回来的数据对象
// }, function (error) {
//   return Promise.reject(error);
// });
// Vue.prototype.$http=axios;


// Vue.prototype.axios=axios;

// import store from './store'








// import axios from './plugins/axios';
// Vue.use(axios);

//注册全局过滤器
// import fillters from './filters'

// Object.keys(fillters).forEach(key=>Vue.filter(key,fillters[key]))
import fillters from './filters'
Object.keys(fillters).forEach(key=>Vue.filter(key,fillters[key]))

import local from './services/local'
Vue.use(local)

new Vue({
  // router,
  // store,
  el:'#app',
  render: h => h(App),
  router,
  store
}).$mount('#app')
