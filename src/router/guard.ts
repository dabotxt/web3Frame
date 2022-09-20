import { Router, useRouter } from 'vue-router'
import { useUserStore } from 'store/modules/user'
import { computed } from 'vue'

const userPage = [
    'UserInfo',
    'BulkListing',
    'User Deposit',
    'User Withdraw',
    'NFT Deposit',
    'NFT Withdraw',
    'OrderSchedule'
]
const router = useRouter()
export const setupRouterGuard = (router: Router) => {
    router.beforeEach((to, from, next) => {
        // const UserStore = useUserStore()
        // const userInfo = computed(() => {
        //     return UserStore.userInfo
        // })
        // let routerName: any = to.name
        // if (userPage.includes(routerName) && !userInfo.value) {
        //     router.push({ name: 'UserLogin' })
        // } else {
        //
        // }
        // @ts-ignore
        document.title = to.meta.title
        next()
        window.scrollTo(0, 0)
    })
}