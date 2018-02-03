import '../node_modules/vuetify/src/stylus/app.styl';

import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

import App from './App/App.vue';

import Switch from "./App/widgets/switch/Switch.vue";
Vue.component('widget-switch', Switch);

new Vue({
  el: '#app',
  render: h => h(App)
});
