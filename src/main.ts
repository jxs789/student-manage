import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import Header from './components/myheader.vue';
import ElementUI from 'element-ui';
import "../node_modules/element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts 


Vue.component('Header',Header);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
