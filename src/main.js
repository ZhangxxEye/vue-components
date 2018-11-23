import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import http from '@/http'
import constant from '@/constant'
import Layout from '@/components/layout'
import '@/stylesheet'
import toast from '@/components/toast/toast.js'

if (__isWap) {  // eslint-disable-line no-undef
  // require('@/common/flexible')
}

Vue.use(http)
Vue.use(constant)
Vue.use(toast)

const app = new Vue({
  router,
  store,
  render: h => h(Layout)
})

app.$mount('#app')

if (module.hot) {
  module.hot.accept();
}
