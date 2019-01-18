import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import Mock from 'mockjs'
import App from './App.vue'
import routes from './allrouter' //所有路由的存放处，毕竟是单页面路由嵌套比较多，暂时没有相出更好的书写方法先放这里吧

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(Mock)

const router = new Router ({
  routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
