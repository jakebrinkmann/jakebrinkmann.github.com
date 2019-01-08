import Vue from 'vue'
// Style using Purecss
import 'purecss'
import 'purecss/build/grids-responsive-min.css'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
