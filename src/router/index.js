import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PortfolioView from "../views/PortfolioView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/projects",
        name: 'projects',
        component: PortfolioView,
    }]
})

export default router