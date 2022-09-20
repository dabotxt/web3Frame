import { defineStore } from 'pinia'
import { useWeb3 } from 'src/utils/useWeb3'
import { store } from '../index'

interface UserState {
    walletAddress: string | null
}

export const useUserStore = defineStore({
    id: 'app-user',
    state: (): UserState => ({
        walletAddress: null,
    }),
    getters: {},
    actions: {
        setWalletAddress(walletAddress: any | null) {
            this.walletAddress = walletAddress
        }
    }
})

export function UserStore() {
    return useUserStore(store)
}
