import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vulidate from 'vuelidate'
import phone from './directives/maskPhone'

Vue.directive('phone', phone)

Vue.use(Vulidate)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  data: {
    phone: ''
  },
  render: h => h(App)
}).$mount('#app')