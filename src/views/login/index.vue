<template>
  <div class="h-screen w-screen flex justify-between">
    <div class="w-1/2 flex justify-center items-center">
      logo
      <img
        alt="logo"
        src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
      />
    </div>
    <div class="w-1/2 flex justify-center items-center">
      <a-form :model="form" :style="{ width: '400px' }" @submit="handleSubmit">
        <a-form-item field="account" label="账号">
          <a-input v-model="form.account" placeholder="请输入账号" />
        </a-form-item>
        <a-form-item field="password" label="密码">
          <a-input v-model="form.password" placeholder="请输入密码" />
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { userStore } from '@/stores/user'
const user = userStore()
const form = reactive({
  account: '',
  password: '',
  isRead: false,
})
const handleSubmit = (data: any) => {
  console.log('data', data)
}
onMounted(() => {
  // Date1()
})
</script>

<!-- <style scoped>

</style> -->
