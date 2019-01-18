import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import Mock from 'mockjs'
import App from './App.vue'
import Home from './Home.vue'
import Login from './Login.vue'

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(Mock)

import Test1 from './components/test1.vue'
import Test2 from './components/test2.vue'
/* 所有的路由都放到这里了，看起来可能会很麻烦，在考虑要不要挪到其他的js里面去 */
const routes = [
  {
    path:'/',
    name:'Login',
    component:Login
  },
  {
    path:'/home',
    name:'Home',
    component:Home,
    children:[
      {
        path:'/home/test1',
        name:'Test1',
        component:Test1
      },
      {
        path:'/home/test2',
        name:'Test2',
        component:Test2
      }
    ]
  }
]
const router = new Router ({
  routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
