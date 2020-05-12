import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 引入重置样式表
import 'assets/css/main.css'
// 引入element-ui
import './element'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
