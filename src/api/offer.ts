import request from '../utils/request'

const URL = {
    CREATE_COLLECTION_MAKER_OFFER: '/offer/make/collection',
    CREATE_NFT_MAKER_OFFER: '/offer/make/item',
    GET_NFT_OFFERS: '/offer/get/item',
    GET_USER_OFFERS: '/offer/get/user',
    GET_COLLECTION_FLOORS: '/collection/floors',
    GET_USER_RECEIVE: '/offer/get/receive',
    GET_OFFER_HIGHEST: '/offer/highest',
    CANCEL_OFFER: '/offer/cancel',
    ACCEPT_OFFER: '/offer/accept',
    GET_COLLECTION_BEST: '/offer/collection/best'
}


export default {
    makerOfferCollection(formData: any) {
        return request.post(URL.CREATE_COLLECTION_MAKER_OFFER, formData)
    },
    makerOfferNFT(formData: any) {
        return request.post(URL.CREATE_NFT_MAKER_OFFER, formData)
    },
    getNFTOffers(formData: any) {
        return request.get(URL.GET_NFT_OFFERS + '/' + formData.contractAddress + '/' + formData.tokenId)
    },
    getUserOffers(userCode: any) {
        return request.get(URL.GET_USER_OFFERS, {
            params: {
                userCode: userCode
            }
        })
    },
    getUserReceive(userCode: any, markViewed: any) {
        return request.get(URL.GET_USER_RECEIVE, {
            params: {
                userCode: userCode,
                markViewed: markViewed
            }
        })
    },
    getCollectionFloors(formData: any) {
        return request.post(URL.GET_COLLECTION_FLOORS, formData)
    },
    getOfferHighest(formData: any) {
        return request.post(URL.GET_OFFER_HIGHEST, formData)
    },
    cancelOffer(formData: any) {
        return request.post(URL.CANCEL_OFFER, formData)
    },
    acceptOffer(formData: any) {
        return request.post(URL.ACCEPT_OFFER, formData)
    },
    getCollectionBest(address: any) {
        return request.post(URL.GET_COLLECTION_BEST, {}, {params: {contractAddress: address}})
    }
}