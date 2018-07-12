// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'; 

Vue.use(MintUI)

Vue.config.productionTip = false

let instance = axios.create()
// 允许跨域传送cookies
// instance.defaults.withCredentials = false
// 请求头控制所有xhr的共通行为
instance.defaults.headers = {
  // 是否自动显示业务错误信息
}

Vue.prototype.$http = instance

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
