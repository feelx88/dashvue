require('../node_modules/vuetify/src/stylus/app.styl');

import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VDivider,
  VCard,
  VSwitch,
  transitions
} from 'vuetify';
import App from './App/App.vue';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VDivider,
    VCard,
    VSwitch,
    transitions
  }
});

import Switch from "./App/widgets/switch/Switch.vue";
Vue.component('widget-switch', Switch);

new Vue({
  el: '#app',
  render: h => h(App)
});
