// src/main.js
import App from './components/App.js';

// FROM: https://markus.oberlehner.net/blog/goodbye-webpack-building-vue-applications-without-webpack/

new Vue({
  render: h => h(App),
}).$mount(`#app`);