import "../node_modules/vuetify/src/stylus/app.styl";

import Vue from "vue";
import Vuetify from "vuetify";
Vue.use(Vuetify);

import VueCookie from "vue-cookie";
Vue.use(VueCookie);

import ConfigurableFlex from "./App/ConfigurableFlex.vue";
Vue.component("c-flex", ConfigurableFlex);
import Login from "./App/Login.vue";
Vue.component("login", Login);

import App from "./App/App.vue";

import HttpOutput from "./App/datasources/outputs/Http.vue";
Vue.component("output-http", HttpOutput);
import MqttOutput from "./App/datasources/outputs/Mqtt.vue";
Vue.component("output-mqtt", MqttOutput);
import HttpInput from "./App/datasources/inputs/Http.vue";
Vue.component("input-http", HttpInput);
import MqttInput from "./App/datasources/inputs/Mqtt.vue";
Vue.component("input-mqtt", MqttInput);

import Page from "./App/pages/Page.vue";
Vue.component("page", Page);
import WidgetPage from "./App/pages/WidgetPage/WidgetPage.vue";
Vue.component("page-widgets", WidgetPage);
import EmbedPage from "./App/pages/EmbedPage/EmbedPage.vue";
Vue.component("page-embed", EmbedPage);

import Widget from "./App/widgets/Widget.vue";
Vue.component("widget", Widget);
import Switch from "./App/widgets/switch/Switch.vue";
Vue.component("widget-switch", Switch);
import Text from "./App/widgets/text/Text.vue";
Vue.component("widget-text", Text);
import MediaController from "./App/widgets/media-controller/MediaController.vue";
Vue.component("widget-media-controller", MediaController);

new Vue({
  el: "#app",
  render: h => h(App)
});
