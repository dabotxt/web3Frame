import { UserStore } from 'store/modules/user'

export function useWeb3() {
    const user = UserStore()

    async function getAccount(): Promise<any> {
        return new Promise((async (resolve, reject) => {
            await isMetamask()
                .then((res: string) => {
                    console.log(res)
                    window.ethereum
                        .request({method: 'eth_requestAccounts'})
                        .then((res: string[]) => {
                            onEvents()
                            resolve(res)
                        })
                        .catch((res: string[]) => {
                            reject(res)
                        })
                })
                .catch((res: string) => {
                    reject(res)
                })
        }))
    }

    function isMetamask(): Promise<string> {
        return new Promise((resolve, reject) => {
            if (typeof window.ethereum !== 'undefined') {
                resolve('MetaMask is installed!')
            } else {
                reject('MetaMask is uninstalled!')
            }
        })
    }

    async function onEvents() {
        //  一旦切换账号这里就会执行
        window.ethereum.on("accountsChanged", function (accounts: string[]) {
            if (accounts.length > 0) {
                user.setWalletAddress(accounts[0])
            }
        })
    }

    async function getBalance(account: string | null) {
        const balance = window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
            .then((res: any) => {
                console.log(res);
            })
        console.log(balance)
    }

    return {
        getAccount,
        getBalance
    }
}
