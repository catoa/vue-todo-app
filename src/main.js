import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import VueFeather from 'vue-feather'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueFeather)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
