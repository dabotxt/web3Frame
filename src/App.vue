<script setup lang="ts">
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  GlobalThemeOverrides
} from 'naive-ui'

const themeColor: string = '#FCD535'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: themeColor,
  },
  Input: {
    borderFocus: themeColor,
    borderHover: themeColor,
    border: 'none',
    borderRadius: '25px'
  },
  Button: {
    borderFocus: themeColor,
    borderHover: themeColor,
    colorHoverPrimary: themeColor,
    colorFocusPrimary: themeColor,
    borderFocusPrimary: themeColor,
    borderHoverPrimary: themeColor,
    colorPressedPrimary: themeColor,
    borderPressedPrimary: themeColor
  },
  Select: {
    peers: {
      InternalSelection: {
        borderFocus: themeColor,
        borderHover: themeColor
      },
    }
  },
  Pagination: {
    itemTextColorHover: themeColor,
    buttonBorder: 'none'
  },
  PageHeader: {
    backColorHover: themeColor,
    backColor: '#fff',
    titleTextColor: '#fff'
  }
}
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <n-message-provider :duration="5000">
      <n-dialog-provider>
        <n-loading-bar-provider>
          <router-view></router-view>
        </n-loading-bar-provider>
      </n-dialog-provider>
    </n-message-provider>
  </NConfigProvider>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background: #131617;
  color: #ffffff;
}

ul {
  list-style-type: none;
  margin: 0;
}
</style>
