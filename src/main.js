import 'bootstrap/dist/css/bootstrap.min.css';


var $ = require('jquery');
window.$ = $;
require('bootstrap');

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
