import request from '../utils/request'

const URL = {
    CREATE_BUY_NOW_ORDER: '/orderstatus/recordStatus',
    BUY_NOW_NEXT: '/orderstatus/startToBuy/',
    GET_ORDER_STATUS: '/orderstatus/getBuyInfo/',
    CREATE_SELL_ORDER: '/order/createOrder',
    BUY_NOW_ALL: '/cart/buynowInit',
    BUY_NOW_ALL_NEXT: '/cart/buynowStartToBuy'
}


export default {
    createBuyNowOrder(formData: any) {
        return request.post(URL.CREATE_BUY_NOW_ORDER, formData)
    },
    buyNowNext(id: any) {
        return request.get(URL.BUY_NOW_NEXT + id)
    },
    createSellOrder(formData: any) {
        return request.post(URL.CREATE_SELL_ORDER, formData)
    },
    getOrderList(id: any) {
        return request.get(URL.GET_ORDER_STATUS + id)
    },
    buyNowAll(formData: any) {
        return request.post(URL.BUY_NOW_ALL, formData)
    },
    buyNowAllNext(formData: any) {
        return request.post(URL.BUY_NOW_ALL_NEXT, formData)
    }
}