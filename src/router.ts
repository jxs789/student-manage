import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    
    {
      path: '/',
      name: 'login',
      meta: {
        title: '重点学生日周考成绩录入管理系统',
        LinkName: "登录与注册"
      },
      component: () => import('./views/login.vue')
    },
    {
      path: '/visual',
      name: 'visual',
      meta: {
        title: '重点关注学生考试成绩统计图',
        LinkName: '可视化展示'
      },
      component: () => import('./views/visual.vue')
    },
    {
      path: '/statisticalTable',
      name: 'statisticalTable',
      meta: {
        title: '所有成绩',
        LinkName: '所有成绩'
      },
      component: () => import('./views/statisticalTable.vue')
    },
    {
      path: '/charts',
      name: 'charts',
      meta: {
        title: '重点关注学生考试成绩统计图',
        LinkName: '院长视角'
      },
      component: () => import('./views/charts.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  console.log(to)
  if (to.path === '/login') {
    if (localStorage.getItem('userinfo')) {
      next({
        path: '/visual',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    if (!localStorage.getItem('userinfo')) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }

  // if (to.matched.some(record => record.meta.title)) {
  //   if (!localStorage.getItem('userinfo')) {
  //     next({
  //       path: '/login',
  //       query: {
  //         redirect: to.fullPath
  //       }
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next()
  // }
})

export default router;