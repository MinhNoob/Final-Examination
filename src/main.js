import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import { router } from "@/routes";
//import { router } from "@/router";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
