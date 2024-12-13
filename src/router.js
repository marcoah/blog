import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import PostView from "./views/PostView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/post/:id', name: 'Post', component: PostView },
]

const router = createRouter({
    history: createMemoryHistory(process.env.BASE_URL),
    routes,
})

export default router;





