import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "vuetify/dist/vuetify.min.css";
import StoryblokVue from "storyblok-vue";

Vue.config.productionTip = false;
Vue.use(StoryblokVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
