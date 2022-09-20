/// <reference types="vite/client" />
export {}

// eslint-disable-next-line no-unused-vars
interface ImportMetaEnv {
    VITE_BASE_API: string
}

declare global {
    interface Window {
        $message: any
        $dialog: any
        ethereum: any
    }
}
