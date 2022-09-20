declare interface ViteEnv {
    VITE_DROP_CONSOLE: boolean
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
    // VITE_USE_IMAGEMIN: boolean
}

declare type Indexable<T = any> = {
    [key: string]: T
}

declare type Nullable<T> = T | null

declare interface Result<T = any> {
    code: number;
    msg: string;
    data: T;
}

declare type PromiseResult<T = any> = Promise<Result<T>>

interface ErrorInfo extends Error {
    code: number
}

declare interface Collection {
    imageUrl: string,
    floorPrice: string,
    oneDayAveragePrice: string,
    thirtyDayAveragePrice: string,
    oneDayChange: string,
    sevenDayChange: string,
    sevenDayAveragePrice: string,
    averagePrice: string,
    marketCap: string,
    numOwners: string
}

declare interface owners {
    profileImgUrl: string
    address: any
    currentPrice: any
    offers: any
    latestPrice: any
}

declare interface prperties {
    traitType: any
    value: any
}

declare interface nftDetail {
    owners: owners,
    nftName: string,
    isWatched: boolean,
    prperties: any
    blockchain: string
    tokenStandrd: string
    tokenId: string
    currentPrice: any
    offers: any
    latestPrice: any
    description: any
    imageUrl: string
    watchedNum: any
    assetContract: any
    collectionName: any
    isOwner: any
    orderCode: any
    isListing: any
    ownerAddress: any
    orderType: any
    collectionImage: any
    slug: string
    traitSniperSlug: any
    raritySniperSlug: any
    listingOverDueDate: any
    validUntil: any
}

declare interface UserInfo {
    name: string
    wallet: any
    userCode: string
    email: string
}

declare interface collection {
    primaryAssetContracts: any
}