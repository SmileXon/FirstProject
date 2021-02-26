import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import AppIndex from '@/components/home/AppIndex'
import LibraryIndex from '@/components/library/LibraryIndex'
import Login from '@/components/Login'
import Home from '@/components/Home'

// 路由
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // 把项目部署在 nginx服务器的时候，为了在已登录的状态下输入地址能够默认打开 /index，而不是登录页
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: AppIndex,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // Home 是导航栏的父组件，无需访问
      redirect: '/index',
      children: [
        // {
        //   path: '/',
        //   name: 'index',
        //   redirect: '/index',
        //   component: AppIndex,
        //   meta: {
        //     requireAuth: true
        //   }
        // },
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
