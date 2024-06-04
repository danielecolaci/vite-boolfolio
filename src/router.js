import { createWebHistory, createRouter } from 'vue-router'

import AppHome from "./views/AppHome.vue";
import AppProjects from "./views/AppProjects.vue";
import AppContacts from "./views/AppContacts.vue";
import ProjectShow from "./views/ProjectShow.vue";
import NotFound from "./views/NotFound.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
        {
            path: '/projects/:id',
            name: 'project',
            component: ProjectShow
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        },
    ]
})


export default router;
