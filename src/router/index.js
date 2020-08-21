import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
    {
        path: "/",
        component: () => import("@/layouts/Default"),
        children: [
            {
                name: "home",
                path: "",
                component: () => import("@/pages/Home")
            }
        ]
    }
];

export default new Router({
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});
