import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import PostPage from '../pages/PostPage.vue'
import About from '../pages/About.vue'
import PostIDPage from '../pages/PostIIDPage.vue'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIDPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;