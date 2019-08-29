import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import Header from './components/myheader.vue';
import MyChart from './components/myChart.vue';
import From from './components/from.vue';
import Dialog from "./components/dialog.vue"
import ElementUI from 'element-ui';
import "../node_modules/element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts 


Vue.component('Header',Header);
Vue.component('MyChart',MyChart);
Vue.component('From',From);
Vue.component('Dialog',Dialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
