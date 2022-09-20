import { ref, computed } from 'vue'

function getStr(string: any, forward: number, later: number) {
    const strLength = string?.length
    return strLength !== 0 ? string.substring(0, forward) + '****' + string.substring(strLength - later, strLength) : ''
}

export function useCountdown() {
    const count = ref<number>(0)
    const countdown = (
        initCount: number,
        callback?: Function,
        timeInterval: number = 1000
    ) => {
        setCount(initCount)
        const intervalId = setInterval(() => {
            count.value -= 1
            if (count.value <= 0) {
                clearInterval(intervalId)
                callback?.()
            }
        }, timeInterval)
    }
    const getCount = () => {
        return computed(() => count.value)
    }
    const setCount = (value: number) => {
        count.value = value
    }
    return {
        countdown,
        getCount,
        setCount
    }
}

export {
    getStr
}