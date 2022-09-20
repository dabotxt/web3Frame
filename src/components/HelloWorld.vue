<script setup lang="ts">
import { useWallet } from 'src/hooks/web3/useWallet'
import { useUserStore } from 'store/modules/user'
import { computed } from 'vue'
const UserStore = useUserStore()
const account = computed(() => {
  return UserStore.walletAddress
})
const {onConnect, resetWallet} = useWallet()
</script>

<template>
  <ElButton @click="onConnect" type="primary">content</ElButton>
  <ElButton v-if="account" @click="resetWallet" type="primary">disconnect</ElButton>
  <div>钱包地址：{{ account }}</div>
</template>

<style scoped lang="scss">
</style>
