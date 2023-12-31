import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsList from './pages/ProjectsList.vue';
import ErrorPage from './pages/ErrorPage.vue'
import SingleProject from './pages/SingleProject.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: AppHome
        },
        {
            path: "/about-us",
            name: "about",
            component: AppAbout
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsList
        },
        {
            path: "/projects/:id",
            name: "single-projects",
            component: SingleProject
        },
        {
            path: "/error/:code",
            name: "error",
            component: ErrorPage
        }
    ]
});

export { router };