import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/buttons.css'
import './assets/font/font.css'
import './assets/icon/font_4liw0pf3k13/iconfont.css'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css'
import swal from 'sweetalert'
import 'animate.css'
import moment from 'moment'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$layer = layer(Vue)
Vue.prototype.$swal = swal
Vue.prototype.$moment = moment
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
