import request from '../utils/request'

const URL = {
    REGISTER_EMAIL: '/registerFromEmail',
    LOGIN: '/auth/login',
    GET_EMAIL_CODE: '/sendEmail',
    LOGIN_EMAIL: '/loginFormEmail',
    EMAIL_VERIFICATION: '/loginValidate',
    RESET_PASSWORD_EMAIL_CODE: '/retrievePassword',
    GET_USER_INFO: '/getUserInfo/',
    GET_USER_NFT: '/user/items',
    GET_USER_ACTIVITY: '/activity',
    GET_USER_BALANCE: 'personAsset/getWallet/',
    GET_DEPOSIT_HISTORY: '/personAsset/withdraw/',
    USER_WITHDRAW: '/personAsset/withdraw',
    USER_WITHDRAW_HISTORY: '/withdraw/withdrawList',
    GET_USER_AVATAR: '/headPortrait/getListByUserCode/',
    GET_USER_WALLET: '/personAsset/getWallet/',
    USER_BALANCE_EXCHANGE: '/personAsset/exchange/',
    LOGOUT: '/logout/',
    SET_AVATAR_IMG: '/headPortrait/replacePicture/',
    CANCEL_SELL: '/order/cancel/',
    SET_NEW_PASSWORD: '/setupPassword',
    GET_COOKIE: '/metadata/session/refresh',
    GET_NFT_DEPOSIT_HISTORY: '/user/deposits',
    GET_USER_COLLECTION: '/collection/userCollection'
}

export interface UserInfo {
    username: string
    password: string
}

export default {
    login({username, password}: UserInfo) {
        return request.post(URL.LOGIN, {username, password})
    },
    logOut(formData: any) {
        return request.get(URL.LOGOUT + formData.userCode + '/' + formData.emailAddress)
    },
    getEmailCode(email: string) {
        return request.get(URL.GET_EMAIL_CODE, {params: {emailAddress: email, useType: 4}})
    },
    registerEmail(data: any) {
        return request.post(URL.REGISTER_EMAIL, data)
    },
    loginEmail(data: any) {
        return request.post(URL.LOGIN_EMAIL, data)
    },
    emailVerification(data: any) {
        return request.post(URL.EMAIL_VERIFICATION, data)
    },
    getResetPasswordCode(email: any) {
        return request.get(URL.GET_EMAIL_CODE, {
            params: {
                emailAddress: email,
                useType: 2
            }
        })
    },
    resetPasswordEmailCode(formData: any) {
        return request.get(URL.RESET_PASSWORD_EMAIL_CODE, {
            params: {
                emailAddress: formData.email,
                code: formData.code
            }
        })
    },
    getUserInfo(userCode: any) {
        return request.get(URL.GET_USER_INFO + userCode)
    },
    getUserNFT(formData: any) {
        return request.post(URL.GET_USER_NFT, formData)
    },
    getUserActivity(formData: any) {
        return request.post(URL.GET_USER_ACTIVITY, formData)
    },
    getUserBalance(userCode: any) {
        return request.get(URL.GET_USER_BALANCE + userCode)
    },
    getUserDepositHistory(userCode: any, type: any) {
        return request.get(URL.GET_DEPOSIT_HISTORY + userCode, {
            params: {
                type: type
            }
        })
    },
    userWithdraw(formData: any) {
        return request.post(URL.USER_WITHDRAW, formData)
    },
    getNFTWithdraw(userCode: any) {
        return request.post(URL.USER_WITHDRAW_HISTORY, {userCode: userCode})
    },
    getUserAvatar(formData: any) {
        return request.get(URL.GET_USER_AVATAR + formData.userCode + '/' + formData.pageNum + '/' + formData.rows)
    },
    getUserWallet(userCode: any) {
        return request.get(URL.GET_USER_WALLET + userCode)
    },
    userBalanceExchange(formData: any, userCode: any) {
        return request.post(URL.USER_BALANCE_EXCHANGE + userCode, formData)
    },
    saveAvatarImg(formData: any) {
        return request.post(URL.SET_AVATAR_IMG + formData.userCode, {imageUrl: formData.imageUrl})
    },
    cancelSells(id: any) {
        return request.get(URL.CANCEL_SELL + id)
    },
    setNewPassword(formData: any) {
        return request.post(URL.SET_NEW_PASSWORD, formData)
    },
    getCookie() {
        return request.get(URL.GET_COOKIE)
    },
    getNFTDepositHistory(formData: any) {
        return request.post(URL.GET_NFT_DEPOSIT_HISTORY, formData)
    },
    getUserCollection(formData: any) {
        return request.post(URL.GET_USER_COLLECTION, {}, {
            params: {
                userCode: formData.userCode,
                searchStr: formData.searchStr
            }
        })
    }
}