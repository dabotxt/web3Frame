/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}
declare module 'web3modal'
declare module 'web3/dist/web3.min.js'
declare module 'crypto-js'
declare module '@walletconnect/web3-provider/dist/umd/index.min.js' {
    import WalletConnectProvider from '@walletconnect/web3-provider/dist/esm/index';
    export default WalletConnectProvider
}