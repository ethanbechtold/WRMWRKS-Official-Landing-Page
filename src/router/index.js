import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PhotoView from "../views/PhotoView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ServiceView from "../views/ServiceView.vue";
import TestView from "../views/TestView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/test",
        name: "test",
        component: TestView,
    },
    {
        path: "/photos",
        name: "photos",
        component: PhotoView,
        
    },
    {
        path: "/projects",
        name: 'projects',
        component: PortfolioView,
    },
    {
        path: "/services",
        name: "services",
        component: ServiceView,
    }]
})

export default router