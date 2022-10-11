import { createRouter, createWebHistory } from "vue-router"
const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../view/index.vue')
    },
    {
        path: '/game_shop_original',
        name: 'game_shop_original',
        component: () => import('../view/game_shop_original.vue')
    },
    {
        path: '/game_shop_tool',
        name: 'game_shop_tool',
        component: () => import('../view/game_shop_tool.vue')
    },
    {
        path: '/game_information',
        name: 'game_information',
        component: () => import('../view/game_information.vue')
    },
    {
        path: '/pillow_information',
        name: 'pillow_information',
        component: () => import('../view/pillow_information.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

