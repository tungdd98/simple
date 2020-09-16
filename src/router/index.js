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
    },
    {
        path: "/admin",
        component: () => import("@/layouts/Admin"),
        children: [
            {
                name: "dashboard",
                path: "",
                component: () => import("@/pages/admin/Dashboard")
            }
        ]
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/pages/Login")
    }
];

const router = new Router({
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});

export default router;
