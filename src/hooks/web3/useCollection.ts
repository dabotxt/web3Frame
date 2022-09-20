import { useWallet } from './useWallet'
import { computed } from 'vue'
import { useUserStore } from 'store/modules/user'
import { errorHandel } from './utils'
import { contractAbiMap, ContractAbiTypeEnum } from 'src/enums/contractAbiEnum'

const UserStore = useUserStore()
const {web3, checkConnect} = useWallet()
const abi = JSON.parse(contractAbiMap.get(ContractAbiTypeEnum.COLLECTION) as string)
const contract = computed(() => {
    return UserStore.depositCollectionAddress
})

export function useCollection() {
    const CollectionInstance = computed(() => {
        const {Contract} = web3.value.eth
        return new Contract(abi, contract.value)
    })
    const getOwnerOf = async (tokenId: any): Promise<any> => {
        await checkConnect()
        const [account] = await web3.value.eth.getAccounts()
        return new Promise((resolve, reject) => {
            CollectionInstance.value.methods
                .ownerOf(tokenId)
                .call({})
                .then(async (res: any) => {
                    resolve(res)
                    console.log(res)
                })
                .catch((error: Error) => {
                    errorHandel(error, (errorInfo: ErrorInfo) => {
                        reject(errorInfo)
                    })
                })
        })
    }
    const getTokensOfOwner = async (): Promise<any> => {
        await checkConnect()
        const [account] = await web3.value.eth.getAccounts()
        return new Promise((resolve, reject) => {
            CollectionInstance.value.methods
                .tokensOfOwner(account)
                .call()
                .then((res: any) => {
                    resolve(res)
                })
                .catch((error: Error) => {
                    errorHandel(error, (errorInfo: ErrorInfo) => {
                        reject(errorInfo)
                    })
                })
        })
    }
    const getBalanceOf = async (): Promise<any> => {
        await checkConnect()
        const [account] = await web3.value.eth.getAccounts()
        return new Promise((resolve, reject) => {
            CollectionInstance.value.methods
                .balanceOf(account)
                .call()
                .then((res: any) => {
                    resolve(res)
                })
                .catch((error: Error) => {
                    errorHandel(error, (errorInfo: ErrorInfo) => {
                        reject(errorInfo)
                    })
                })
        })
    }
    const tokenOfOwnerByIndexs = async (index: any): Promise<any> => {
        await checkConnect()
        const [account] = await web3.value.eth.getAccounts()
        return new Promise((resolve, reject) => {
            CollectionInstance.value.methods
                .tokenOfOwnerByIndex(account, index)
                .call()
                .then((res: any) => {
                    console.log(res)
                    resolve(res)
                })
                .catch((error: Error) => {
                    errorHandel(error, (errorInfo: ErrorInfo) => {
                        reject(errorInfo)
                    })
                })
        })
    }
    const NFTTransfer = async (tokenId: any, receipt: any): Promise<any> => {
        await checkConnect()
        const [account] = await web3.value.eth.getAccounts()
        console.log(account, receipt, tokenId)
        return new Promise((resolve, reject) => {
            CollectionInstance.value.methods
                .transferFrom(account, receipt, tokenId)
                .send({from: account})
                .then((res: any) => {
                    console.log(res)
                    resolve(res)
                })
                .catch((error: Error) => {
                    errorHandel(error, (errorInfo: ErrorInfo) => {
                        reject(errorInfo)
                    })
                })
        })
    }
    return {
        getOwnerOf,
        getBalanceOf,
        getTokensOfOwner,
        tokenOfOwnerByIndexs,
        NFTTransfer
    }
}
