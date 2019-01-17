import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Home from './Home.vue'
import Router from 'vue-router'
import Login from './Login.vue'

Vue.use(ElementUI)
Vue.use(Router)

import Test1 from './components/test1.vue'
import Test2 from './components/test2.vue'
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
