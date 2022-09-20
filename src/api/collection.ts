import request from '../utils/request'
import { useUserStore } from 'store/modules/user'

const URL = {
    GET_COLLECTION: '/collection/openseaRetrieveCollections/',
    GET_COLLECTION_DETAIL: '/collection/retrieveOneCollection',
    GET_THREE_SECTION: '/collection/latestActivity',
    GET_COLLECTION_SECTION: '/collection/allSection',
    GET_COLLECTION_BUY_NOW_LIST: '/collection/buyNowList',
    GET_NFT_DETAIL: '/asset/detail',
    GET_COLLECTION_ACTIVITY: '/collection/events',
    GET_NFT_ACTIVITY: '/activity',
    GET_FAVORITE_LIST: '/favorite/retrieveCollections',
    ADD_FAVORITE: '/favorite/add',
    DELETE_FAVORITE: 'favorite/deleteOne',
    GET_COLLECTION_OWNED: '/collection/ownedList',
    ADD_CART_NFT: '/cart/add',
    GET_CART_LIST: '/cart/list',
    DELETE_CART_NFT: '/cart/deleteOne',
    CLEAN_CART: '/cart/clean/',
    ADD_WATCH_NFT: '/watchlist/add',
    DELETE_WATCH_NFT: '/watchlist/deleteOne',
    GET_WATCH_LIST: '/watchlist/list',
    CLEAN_WATCH: '/watchlist/clean/',
    GET_USED_COLLECTION: '/collection/usedCollection',
    SEARCH_COLLECTION: '/collection/search',
    GET_NFT_METADATA: '/asset/metadata',
    DEPOSIT_CHECK_NFT: '/deposit/checkNFT',
    GET_ETH_USD: '/currency/ethusdt',
    GET_BANNER_LIST: '/asset/banner',
    BUY_FLOOR: '/collection/buyFloor/',
    CANCEL_BUY_FLOOR: '/collection/cancelFloor/',
    WITHDRAW_DELETE: '/withdraw/completedWithdraw',
    GET_COLLECTION_IMG: '/collection/getPicture/',
    GET_COLLECTION_TARGET: '/metadata/target/',
    GET_COLLECTION_TRAIT: '/collection/traits/',
    GET_NFT_TRAIT: '/asset/traits',
    GET_FLOOR_ITEM: '/collection/getFloor/'
}


export default {
    getCollection(pageNum: number, rows: number, sort: any, userCode: any, searchParam: any) {
        return request.post(`${URL.GET_COLLECTION + pageNum + '/' + rows}`, {
            column: sort.value,
            sortType: sort.status === 0 ? 1 : sort.status,
            userCode: userCode,
            searchParam: searchParam
        })
    },
    buyFloor(formData: any) {
        return request.get(URL.BUY_FLOOR + formData.tokenAddress + '/' + formData.userCode)
    },
    cancelBuyFloor(formData: any) {
        return request.get(URL.CANCEL_BUY_FLOOR + formData.tokenAddress + '/' + formData.userCode)
    },
    getFavoriteCollection(formData: any, filterData: any) {
        return request.post(URL.GET_FAVORITE_LIST + '/' + formData.pageNum + '/' + formData.rows, filterData)
    },
    getCollectionDetail(formData: any) {
        return request.post(URL.GET_COLLECTION_DETAIL, formData)
    },
    getThreeSection(address: any) {
        return request.post(URL.GET_THREE_SECTION, {}, {params: {accountAddress: address}})
    },
    getSectionAll(formData: any) {
        return request.post(URL.GET_COLLECTION_SECTION, formData)
    },
    getCollectionBuyNowList(formData: any) {
        return request.post(URL.GET_COLLECTION_BUY_NOW_LIST, formData)
    },
    getNFTDetail(formData: any) {
        return request.post(URL.GET_NFT_DETAIL, formData)
    },
    getActivity(address: any) {
        return request.post(URL.GET_COLLECTION_ACTIVITY, {}, {params: {accountAddress: address}})
    },
    getNFTActivity(formData: any) {
        return request.post(URL.GET_NFT_ACTIVITY, formData)
    },
    addFavorite(formData: any) {
        return request.post(URL.ADD_FAVORITE, formData)
    },
    deleteFavorite(formData: any) {
        return request.delete(URL.DELETE_FAVORITE, {data: {...formData}})
    },
    getCollectionOwned(userCode: any) {
        return request.get(URL.GET_COLLECTION_OWNED + '/' + userCode)
    },
    addCart(formData: any) {
        const UserStore = useUserStore()
        UserStore.setCartVisible(true)
        return request.post(URL.ADD_CART_NFT, formData)
    },
    getCartList(formData: any) {
        return request.get(URL.GET_CART_LIST + '/' + formData.userCode + '/' + formData.pageNum + '/' + formData.rows)
    },
    getWatchList(formData: any) {
        return request.get(URL.GET_WATCH_LIST + '/' + formData.userCode + '/' + formData.pageNum + '/' + formData.rows)
    },
    deleteCartItem(formData: any) {
        return request.delete(URL.DELETE_CART_NFT, {data: {...formData}})
    },
    cleanCart(userCode: any) {
        return request.delete(URL.CLEAN_CART + userCode)
    },
    addWatchNFT(formData: any) {
        const UserStore = useUserStore()
        UserStore.setCollectVisible(true)
        return request.post(URL.ADD_WATCH_NFT, formData)
    },
    deleteWatchNFT(formData: any) {
        return request.delete(URL.DELETE_WATCH_NFT, {data: {...formData}})
    },
    cleanWatch(userCode: any) {
        return request.delete(URL.CLEAN_WATCH + userCode)
    },
    getUsedCollection(userCode: any) {
        return request.post(URL.GET_USED_COLLECTION, {}, {params: {userCode: userCode}})
    },
    getSearchCollection(name: any) {
        return request.post(URL.SEARCH_COLLECTION, {}, {params: {name: name}})
    },
    getNFTMetadata(formData: any) {
        return request.post(URL.GET_NFT_METADATA, formData)
    },
    getDepositCheckNFT(formData: any) {
        return request.post(URL.DEPOSIT_CHECK_NFT, formData)
    },
    getETHUSD() {
        return request.get(URL.GET_ETH_USD)
    },
    getBannerList() {
        return request.post(URL.GET_BANNER_LIST, {})
    },
    withdrawDelete(formData: any) {
        return request.post(URL.WITHDRAW_DELETE, formData)
    },
    getCollectionImg(address: any) {
        return request.get(URL.GET_COLLECTION_IMG + address)
    },
    getCollectionTarget(address: any) {
        return request.get(URL.GET_COLLECTION_TARGET + address)
    },
    getCollectionTrait(address: any) {
        return request.post(URL.GET_COLLECTION_TRAIT, {}, {
            params: {
                address: address
            }
        })
    },
    getNFTTrait(formData: any) {
        return request.post(URL.GET_NFT_TRAIT, formData)
    },
    getFloorItem(address: any) {
        return request.get(URL.GET_FLOOR_ITEM + address)
    }
}