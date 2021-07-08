import Vue from 'vue'
import App from './App.vue'
import Flutterwave from 'vue-flutterwave'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(Flutterwave, { publicKey: 'FLWPUBK-f92a354d64f5b330062fe7928f4321f6-X' });

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
