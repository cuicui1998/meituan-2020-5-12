import Vue from 'vue'
import VueRouter from 'vue-router'
import MtDefault from 'views/MtDefault'

Vue.use(VueRouter)

  const routes = [
  {
    // 1.进入页面的 默认打开的路径是 "/" 我们设置该路径对应的路由是MtDefault
    //   所以当我们进入网站最先看到的是MtDefault组件的内容
    //   设置好之后 一定要在App.vue中设置router-view 否则不会显示内容
    path: '/',
    name: 'home',
    component: MtDefault
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
