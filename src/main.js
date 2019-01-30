import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import Mock from 'mockjs'
import App from './App.vue'
import routes from './allrouter' //所有路由的存放处，毕竟是单页面路由嵌套比较多，暂时没有相出更好的书写方法先放这里吧
import axios from 'axios';

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(Mock)
Vue.prototype.$ajax = axios // 添加axios请求

axios.defaults.baseURL='http://localhost:8081' // 设置后端请求地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  
const router = new Router ({
  routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
