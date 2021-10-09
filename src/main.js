import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vconsole from 'vconsole';
// new Vconsole();
import {showloading,hideloading} from "./utils/common.js"
Vue.prototype.$showloading = showloading
Vue.prototype.$hideloading = hideloading

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
