import request from '../utils/request'

const URL = {
    GET_NFT_WITHDRAW_FEE: '/withdraw/charges',
    CREATE_WITHDRAW: '/withdraw/createOrder',
    GET_NFT_WITHDRAW_SIGN: '/withdraw/confirmWithdrawal',
    GET_NFT_WITHDRAW_ORDER_ID: '/withdraw/withdrawRecord'
}


export default {
    getNFTWithdrawFee(formData: any) {
        return request.post(URL.GET_NFT_WITHDRAW_FEE, formData)
    },
    createNFTWithdraw(formData: any) {
        return request.post(URL.CREATE_WITHDRAW, formData)
    },
    getNFTWithdrawSign(formData: any) {
        return request.post(URL.GET_NFT_WITHDRAW_SIGN, formData)
    },
    getNFTOrderId(formData: any) {
        return request.post(URL.GET_NFT_WITHDRAW_ORDER_ID, formData)
    }
}