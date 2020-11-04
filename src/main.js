// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'; //引入elementUI
import 'element-ui/lib/theme-chalk/index.css'
import NormailizeCss from 'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import '@/assets/icon-font/iconfont.js' // iconfont
import '@/assets/icon-font/iconfont.css' // iconfont
import '@/util';
Vue.component('icon', Icon)
Vue.config.productionTip = false
Vue.use(Element);//使用elementUI
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render:h => h(App)
})
