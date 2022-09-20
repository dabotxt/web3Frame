import { computed } from 'vue'

const tokensOfOwner = [
    '0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B',
    '0xC9677Cd8e9652F1b1aaDd3429769b0Ef8D7A0425'
]
const notLoadAll = [
    '0x23581767a106ae21c074b2276D25e5C3e136a68b',
    '0x306b1ea3ecdf94aB739F1910bbda052Ed4A9f949',
    '0xdeDf88899D7c9025F19C6c9F188DEb98D49CD760',
    '0x509a050f573BE0D5E01a73C3726E17161729558B',
    '0x670D4DD2e6BADFBbD372D0d37E06cd2852754a04',
    '0x51f0c1938b0E67CaFC7a6fC8eB6EdD7FDBe002bC',
    '0x33c6Eec1723B12c46732f7AB41398DE45641Fa42',
    '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB',
    '0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03',
    '0x3113A3c04aEBEC2B77eB38Eabf6a2257B580c54B',
]
const tokensOfOwnerLowerCase = computed(() => {
    const newList = tokensOfOwner.map((item, index) => {
        return tokensOfOwner[index].toLowerCase()
    })
    return newList
})
const notLoadAllLowerCase = computed(() => {
    const newList = notLoadAll.map((item, index) => {
        return notLoadAll[index].toLowerCase()
    })
    return newList
})
export {
    tokensOfOwnerLowerCase,
    notLoadAllLowerCase
}