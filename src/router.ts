import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Visual from './views/visual.vue'
import StatisticalTable from "./views/statisticalTable.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/visual',
      name: 'visual',
      component: Visual
    },
    {
      path: '/statisticalTable',
      name: 'statisticalTable',
      component:StatisticalTable
    }
  ]
})
