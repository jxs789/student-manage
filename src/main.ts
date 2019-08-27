import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import "../node_modules/element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
