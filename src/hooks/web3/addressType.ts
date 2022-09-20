import { computed } from 'vue'

const tokensOfOwner = [
    '0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B',
    '0x1485297e942ce64E0870EcE60179dFda34b4C625',
    '0x6728d91abACdbac2f326baa384513a523C21b80a',
    '0xE6d48bF4ee912235398b96E16Db6F310c21e82CB',
    '0x9F9B2B8e268d06DC67F0f76627654b80e219e1d6',
    '0x9378368ba6b85c1FbA5b131b530f5F5bEdf21A18',
]
const notLoadAll = [
    '0x23581767a106ae21c074b2276D25e5C3e136a68b',
    '0x466CFcD0525189b573E794F554b8A751279213Ac',
    '0x659A4BdaAaCc62d2bd9Cb18225D9C89b5B697A5A',
    '0xe5E771bC685c5a89710131919C616c361ff001c6',
    '0x1792a96E5668ad7C167ab804a100ce42395Ce54D',
    '0x08D7C0242953446436F34b4C78Fe9da38c73668d',
    '0x306b1ea3ecdf94aB739F1910bbda052Ed4A9f949',
    '0x248139aFB8d3A2e16154FbE4Fb528A3a214fd8E7',
    '0x4b570b636e4F744199ec82F52d69B08b394ab850',
    '0x28472a58A490c5e09A238847F66A68a47cC76f0f',
    '0x19b86299c21505cdf59cE63740B240A9C822b5E4',
    '0x80336Ad7A747236ef41F47ed2C7641828a480BAA',
    '0x59468516a8259058baD1cA5F8f4BFF190d30E066',
    '0xdeDf88899D7c9025F19C6c9F188DEb98D49CD760',
    '0xB75F09b4340aEb85Cd5F2Dd87d31751EDC11ed39',
    '0xe0176bA60efddb29Cac5b15338C9962dAee9de0c',
    '0x892848074ddeA461A15f337250Da3ce55580CA85',
    '0xB852c6b5892256C264Cc2C888eA462189154D8d7',
    '0xaaD35C2DadbE77f97301617D82e661776c891Fa9',
    '0x364C828eE171616a39897688A831c2499aD972ec'
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