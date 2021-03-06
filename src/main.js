/*
      入口js
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.devtools = true

new Vue({
  el:'#app',
  components: { App },
  template: '<App/>',
  router,
})
