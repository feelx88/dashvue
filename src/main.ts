import '../node_modules/vuetify/src/stylus/app.styl';

import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

import VueCookie from 'vue-cookie';
Vue.use(VueCookie);

import ConfigurableFlex from "./App/ConfigurableFlex.vue";
Vue.component('c-flex', ConfigurableFlex);

import App from './App/App.vue';

import HttpOutput from './App/datasources/outputs/Http.vue'
Vue.component('output-http', HttpOutput);
import HttpInput from './App/datasources/inputs/Http.vue'
Vue.component('input-http', HttpInput);

import Switch from "./App/widgets/switch/Switch.vue";
Vue.component('widget-switch', Switch);
import Text from "./App/widgets/text/Text.vue";
Vue.component('widget-text', Text);
import MediaController from "./App/widgets/media-controller/MediaController.vue";
Vue.component('widget-media-controller', MediaController);

new Vue({
  el: '#app',
  render: h => h(App)
});
