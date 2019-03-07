import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueScrollto from 'vue-scrollto'
import Lightbox from 'vue-easy-lightbox'

Vue.use(vueScrollto)
Vue.config.productionTip = false
Vue.use(Lightbox)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
