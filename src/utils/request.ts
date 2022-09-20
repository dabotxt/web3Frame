import Axios, { AxiosResponse } from 'axios'
import { Debounced } from 'src/utils/utils'
import { useUserStore } from 'store/modules/user'
// interface Result<T = any> {
//   code: number
//   type: 'success' | 'error' | 'warning'
//   message: string
//   result: T
// }

const baseURL: any = import.meta.env.VITE_BASE_API

const axios = Axios.create({
    baseURL,
    timeout: 50000,
    withCredentials: true
})
axios.defaults.withCredentials = true

// const responseHandle = {
//   200: () => {}
// }

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
    (config) => {
        config.withCredentials = true
        const token = localStorage.getItem('token')
        /**
         * 根据你的项目实际情况来对 config 做处理
         * 这里对 config 不做任何处理，直接返回
         */
        if (token) {
            // @ts-ignore
            config.headers['token'] = token
        }
        // const token = ''
        // token && (config.headers.Authorization = token)
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
const alertInformation = (async () => {
    const UserStore = useUserStore()
    UserStore.setUserInfo(null)
    UserStore.setUserCode(null)
    localStorage.clear()
    window.$message.warning('Login information expired please log in again')
    let url = location.origin + '/#/collections/trade'
    window.location.href = url
})
const debouncedUse: any = new Debounced().use(alertInformation, 2000)
// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
    (response: AxiosResponse<any>) => {
        /**
         * 根据你的项目实际情况来对 response 和 error 做处理
         * 这里对 response 和 error 不做任何处理，直接返回
         */
        const {status, data}: any = response
        if (data.code !== 200 && data.code !== 401 && data.code !== 403) {
            if (data.msg) {
                window.$message.error(data.msg)
            }
        }
        if (data.code === 401) {
            response.data.data = null
            debouncedUse()
        }
        return response.data
    },
    (error) => {
        if (error.response && error.response.data) {
            const code = error.response.status
            const msg = error.response.data.message
            console.error(`Code: ${code}, Message: ${msg}`)
            console.error('[Axios Error]', error.response)
        } else {
            console.error(`${error}`)
        }
        return Promise.reject(error)
    }
)

export default axios