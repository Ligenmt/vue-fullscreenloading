import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './index.css' // global css

import loadingUIRegistry from './components/FullscreenLoading/index'
Vue.use(loadingUIRegistry)

new Vue({
  render: h => h(App),
}).$mount('#app')
