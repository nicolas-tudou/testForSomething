import Vue from 'vue'
import VueRouter from 'vue-router'
import testRoutes from './testRoutes'

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/home')
    },
    {
      name: 'test',
      path: '/test',
      component: () => import('@/views/test'),
      children: testRoutes
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
