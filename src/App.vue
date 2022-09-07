<script setup lang="ts">
import enUS from '@arco-design/web-vue/es/locale/lang/en-us'
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-CN'
const locale = ref(zhCN)
</script>
<template>
  <a-config-provider :locale="locale">
    <RouterView />
  </a-config-provider>
</template>
<!-- <style lang="scss">
</style> -->
