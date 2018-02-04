import '../node_modules/vuetify/src/stylus/app.styl';

import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

import ConfigurableFlex from "./App/ConfigurableFlex.vue";
Vue.component('c-flex', ConfigurableFlex);

import App from './App/App.vue';

import Switch from "./App/widgets/switch/Switch.vue";
Vue.component('widget-switch', Switch);
import Text from "./App/widgets/text/Text.vue";
Vue.component('widget-text', Text);

new Vue({
  el: '#app',
  render: h => h(App)
});
