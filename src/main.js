import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Home from './Home.vue'
import Router from 'vue-router'

Vue.use(ElementUI)
Vue.use(Router)

const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  }
]
const router = new Router ({
  routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
