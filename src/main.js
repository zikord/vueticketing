import Vue from "vue";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import App from "./App.vue";
import router from './router'
import VueSession from 'vue-session'

Vue.use(VueSession)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')