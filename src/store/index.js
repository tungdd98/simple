import Vue from "vue";
import Vuex from "vuex";
import axios from "@/utils/axios";

import display from "./modules/display";
import menu from "./modules/menu";
import authenticate from "./modules/authenticate";
Vue.use(Vuex);
Vuex.Store.prototype.$axios = axios;

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    modules: {
        display,
        menu,
        authenticate
    }
});

export default store;
