import { useWallet } from './useWallet'
import { computed } from 'vue'
import { errorHandel } from './utils'
import { contractAbiMap, ContractAbiTypeEnum } from 'src/enums/contractAbiEnum'

const {web3, checkConnect} = useWallet()
const abi = JSON.parse(contractAbiMap.get(ContractAbiTypeEnum.WITHDRAW) as string)
const contract = import.meta.env.VITE_WITHDRAW_CONTRACT_ADDRESS as string

export function useWithdraw() {
    const WithdrawInstance = computed(() => {
        const {Contract} = web3.value.eth
        return new Contract(abi, contract)
    })
    const WithdrawNFT = async (formData: any): Promise<any> => {
        await checkConnect()
        console.log(formData)
        const [account] = await web3.value.eth.getAccounts()
        return new Promise((resolve, reject) => {
            WithdrawInstance.value.methods
                .extractNFT(formData.sign, formData.target)
                .send({value: formData.fee, from: account})
                .then(async (res: any) => {
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
        WithdrawNFT
    }
}