import Vue from 'vue'
import App from './App.vue'
// import {
//   MdButton,
//   MdContent,
//   MdTabs,
//   MdApp
// } from 'vue-material/dist/components'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Default from "./layouts/Default.vue";
import Login from "./layouts/Login.vue";
import router from './router';

Vue.component("default-layout", Default);
Vue.component("login-layout", Login);

Vue.config.productionTip = false

// Vue.use(MdButton)
// Vue.use(MdContent)
// Vue.use(MdTabs)
// Vue.use(MdApp)
Vue.use(VueMaterial)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
