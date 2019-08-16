import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'

Vue.use(Router)

// 公用路由
export let constantRouterMap = [
  {
    path: '/',
    component: Index,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          icon: 'fa fa-dashboard',
          title: 'Dashboard'
        }
      }
    ]
  },
  {
    path: '/module',
    component: Index,
    children: [
      {
        path: '/module',
        name: 'Module',
        component: () => import('@/views/module/index'),
        meta: {
          icon: 'fa fa-database',
          title: '组件'
        }
      }
    ]
  },
  {
    path: '/optimize',
    component: Index,
    children: [
      {
        path: '/optimize',
        name: 'Optimize',
        component: () => import('@/views/optimize/index'),
        meta: {
          icon: 'fa fa-rocket',
          title: '优化'
        }
      }
    ]
  },
  {
    path: '/language',
    component: Index,
    children: [
      {
        path: '/language',
        name: 'Language',
        component: () => import('@/views/language/index'),
        meta: {
          icon: 'fa fa-language',
          title: '多语言'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    hidden: true
  }
]

// 动态路由
export let asyncRouterMap = []

export default new Router({
  mode: 'hash',
  routes: constantRouterMap
})