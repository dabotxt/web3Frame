import CryptoJS from 'crypto-js'
import { computed, ref } from 'vue'

export const getSrc = (name: string) => {
    const path = `../../src/assets/images/${name}`
    const modules = import.meta.globEager('../../src/assets/images/**/*')
    return name ? modules[path].default : ''
}
export const toFixedTwo = (val: number) => {
    let result: any = ''
    if (val) {
        result = val
    }
    if (parseInt(result) < 1000) {
        const num = val
        const s = num.toString()
        if (s.includes('.')) {
            result = s.substring(0, s.indexOf(".") + 3)
        } else {
            result = s
        }
    } else if (parseInt(result) >= 1000 && parseInt(result) < 1000000) {
        result = parseInt(result) / 1000
        const s = result.toString()
        if (s.indexOf('.') !== -1) {
            result = s.substring(0, s.indexOf(".") + 2) + 'K'
        } else {
            result = s + 'K'
        }
    } else if (parseInt(result) >= 1000000) {
        result = parseInt(result) / 1000000
        const s = result.toString()
        if (s.indexOf('.') !== -1) {
            result = s.substring(0, s.indexOf(".") + 2) + 'M'
        } else {
            result = s + 'M'
        }
    }
    if (val === 0) {
        result = 0
    }
    if (val === undefined || val === null) {
        result = '-'
    }
    return result
}
export const toFixeds = (val: number) => {
    let result: any = ''
    if (val) {
        result = val
    }
    if (parseInt(result) < 1000) {
        const num = val
        const s = num.toString()
        if (s.includes('.')) {
            let index = s.indexOf('.')
            let newStr = s.slice(index + 1)
            if (newStr.length > 3) {
                let newNumber = parseFloat(s)
                result = newNumber.toFixed(3)
            } else {
                result = s.substring(0, s.indexOf(".") + 4)
            }
        } else {
            result = s
        }
    } else if (parseInt(result) > 1000 && parseInt(result) < 1000000) {
        result = parseInt(result) / 1000
        const s = result.toString()
        if (s.indexOf('.') !== -1) {
            result = s.substring(0, s.indexOf(".") + 2) + 'K'
        } else {
            result = s + 'K'
        }
    } else if (parseInt(result) > 1000000) {
        result = parseInt(result) / 1000000
        const s = result.toString()
        if (s.indexOf('.') !== -1) {
            result = s.substring(0, s.indexOf(".") + 2) + 'M'
        } else {
            result = s + 'M'
        }
    }
    if (val === 0) {
        result = 0
    }
    return result
}
export const balanceToFixeds = (val: number) => {
    let result: any = ''
    if (val) {
        const num = val
        const s = num.toString()
        if (s.includes('.')) {
            result = s.substring(0, s.indexOf(".") + 7)
        } else {
            result = s
        }
    }
    return result
}
export const calculatePrice = (val: number) => {
    return val / Math.pow(10, 18)
}
export const calculateMath = (val: number) => {
    return val * Math.pow(10, 18)
}
export const calculateUsd = (val: number) => {
    return val / Math.pow(10, 6)
}

export function useClipboard() {
    const copyText = (text: string) => {
        if (window.navigator.clipboard.writeText) {
            window.navigator.clipboard
                .writeText(text)
                .then((clipText) => window.$message.success('Copy successfully'))
        } else {
            // document.execCommand('copy')
        }
    }

    return {
        copyText
    }
}

export function passwordEncrypt(word: any) {
    let cookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('JSESSIONID='))
        ?.split('=')[1];
    if (!cookie) {
        // TODO Let the user enable cookie
        cookie = "E50AA31CBCF53CAE6B9DC6C90E6672CB"
    }
    const key = cookie[cookie.length - 1] + cookie.substring(0, cookie.length - 1);
    const keyHex = CryptoJS.enc.Utf8.parse(key)
    let encrypted = CryptoJS.AES.encrypt(word, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString()
}

export class Debounced {

    /**
     * @param func 需要包装的函数
     * @param delay 延迟时间，单位ms
     * @param immediate 是否默认执行一次(第一次不延迟)
     */
    public use = (func: Function, delay: number, immediate: boolean = false): Function => {

        let timer: any
        return (...args: any) => {

            if (immediate) {

                func.apply(this, args) // 确保引用函数的指向正确，并且函数的参数也不变
                immediate = false
                return
            }
            clearTimeout(timer)
            timer = setTimeout(() => {

                func.apply(this, args)
            }, delay)
        }
    }
}

export function timeFrom(dateTime: any) {
    // 如果为null,则格式化当前时间
    if (!dateTime) dateTime = Number(new Date());
    // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
    if (dateTime.toString().length == 10) dateTime *= 1000;
    let timestamp = +new Date(Number(dateTime));

    let timer = (Number(new Date()) - timestamp) / 1000;
    // 如果小于5分钟,则返回"刚刚",其他以此类推
    let tips = '';
    switch (true) {
        case timer < 300:
            tips = 'a few seconds ago';
            break;
        case timer >= 300 && timer < 3600:
            tips = parseInt(String(timer / 60)) + 'min ago';
            break;
        case timer >= 3600 && timer < 86400:
            tips = parseInt(String(timer / 3600)) + 'hours ago';
            break;
        case timer >= 86400 && timer < 2592000:
            tips = parseInt(String(timer / 86400)) + 'days ago';
            break;
        default:
            if (timer >= 2592000 && timer < 365 * 86400) {
                tips = parseInt(String(timer / (86400 * 30))) + 'months ago';
            } else {
                tips = parseInt(String(timer / (86400 * 365))) + 'years age';
            }
    }
    return tips;
}

export function dateFormat(strTime: any) {
    let dateString = '---'
    if (strTime) {
        let valTime = strTime
        if (valTime.toString().length == 10) valTime *= 1000;
        let date: any = new Date(valTime);
        let time: any = date.getTime()
        const newDate = new Date(time)
        let Y = newDate.getFullYear() + '-';
        let M = (newDate.getMonth() + 1 < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1) + '-';
        let D = newDate.getDate() < 10 ? '0' + newDate.getDate() + ' ' : newDate.getDate() + ' ';
        let h = newDate.getHours() < 10 ? '0' + newDate.getHours() + ':' : newDate.getHours() + ':';
        let m = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() + ':' : newDate.getMinutes() + ':';
        let s = newDate.getSeconds() < 10 ? '0' + newDate.getSeconds() : newDate.getSeconds();
        // console.log(typeof newDate.getSeconds())
        dateString = Y + M + D + h + m + s
    }
    return dateString
}

export function dateFormats(strTime: any) {
    let dateString = '---'
    if (strTime) {
        const date = new Date(parseInt(strTime))
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
        let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
        let m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
        let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        dateString = Y + M + D + h + m + s
    }
    return dateString
}

export function useLoginCountdown() {
    const count = ref<number>(0)
    const countdowns = (
        initCount: number,
        callback?: Function,
        timeInterval: number = 1000
    ) => {
        setCounts(initCount)
        const intervalId = setInterval(() => {
            count.value -= 1
            if (count.value <= 0) {
                clearInterval(intervalId)
                callback?.()
            }
        }, timeInterval)
    }
    const getCounts = () => {
        return computed(() => count.value)
    }
    const setCounts = (value: number) => {
        count.value = value
    }
    return {
        countdowns,
        getCounts,
        setCounts
    }
}