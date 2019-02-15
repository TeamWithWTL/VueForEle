// 引入你需要添加的网页
import Home from './Home.vue'
import Login from './Login.vue'
import Test1 from './components/test1.vue'
import Test2 from './components/test2.vue'
import Tree from './components/system/tree.vue'

import ValueWell from './components/ledger/valuewell.vue'

/* 所有的路由都放到这里了 */
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
      meta: {
        title: '',
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
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
        },
        {
          path:'/home/tree',
          name:'Tree',
          component:Tree
        },
        {
          path:'/home/ledger/valuewell',
          name:'ValueWell',
          component:ValueWell
        }
      ]
    }
  ]
  export default routes