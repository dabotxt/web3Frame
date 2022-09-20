import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { setupRouterGuard } from 'src/router/guard'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Root',
        component: () => import('src/view/layout/index.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('src/view/home/index.vue'),
                name: 'Home',
                meta: {
                    title: 'Home'
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
setupRouterGuard(router)
export default router
