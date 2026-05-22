import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import Landing from "../views/Landing.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "landing",
        component: Landing,
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
    },
    {
        path: "/projects",
        name: 'projects',
        component: PortfolioView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    }]
})

export default router