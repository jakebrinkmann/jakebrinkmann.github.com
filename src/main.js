import Vue from 'vue'
// Style using Purecss
import 'purecss'
import 'purecss/build/grids-responsive-min.css'
// TODO: only import the icons used to reduce bundle size
import 'vue-awesome'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
