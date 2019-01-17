import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Home from './Home.vue'
import Router from 'vue-router'
import Test from './components/test.vue'

Vue.use(ElementUI)
Vue.use(Router)

const routes = [
  {
    path:'/home',
    name:'Home',
    component:Home,
    children:[
      {
        path:'/home/test',
        name:'Test',
        component:Test
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
export default router
