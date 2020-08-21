import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

// Store
import store from "./store";

// Axios
import axios from "@/utils/axios";
Vue.prototype.$axios = axios;

// Components
import Modal from "@/plugins/modal";
Vue.use(Modal);

// Lazyload
import VueLazyload from "vue-lazyload";
import noimage from "@/assets/no-image.png";
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: noimage,
    loading: noimage,
    attempt: 1
});

// i18n
import i18n from "@/utils/i18n";

new Vue({
    el: "#app",
    router,
    i18n,
    store,
    components: { App },
    template: "<App/>"
});
