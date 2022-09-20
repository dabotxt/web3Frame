export enum OrderEnum {
    Listing,// 普通 0
    Sale, // 出售  1
    Offer,// 报价 2
    Transfer,// 转赠 3
    Purchase // 购买成功 4
}

export enum DepositHistory {
    Approving,
    Processing,
    Completed,
    Fail
}

export enum Progress {
    'test',
    'Order Submitted',
    'Check Availability',
    'Validate Payment',
    'Order Processing',
    'Order Completed'
}

export enum OrderIcon {
    'activity/listing.webp',
    'activity/sale.webp',
    'user/activities.webp',
    'user/cart.webp',
    'activity/cart.webp'
}