import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {
        title: '重点学生日周考成绩录入管理系统'
      },
      component: () => import('./views/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '重点学生日周考成绩统计表'
      },
      component: () => import('./views/Home.vue')
    },
    {
      path: '/charts',
      name: 'charts',
      meta: {
        title: '重点关注学生考试成绩统计图'
      },
      component: () => import('./views/charts.vue')
    },
    {
      path: '/visual',
      name: 'visual',
      meta: {
        title: '可视化展示'
      },
      component: () => import('./views/visual.vue')
    },
    {
      path: '/statisticalTable',
      name: 'statisticalTable',
      meta: {
        title: '所有成绩'
      },
      component: () => import('./views/statisticalTable.vue')
    }
  ]
})
