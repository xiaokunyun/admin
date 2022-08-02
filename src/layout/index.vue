<template>
  <div class="h-screenl w-full from-green-400 to-blue-500">
    <!-- 头部区域 -->
    <div style="width: 200px"></div>
    <div class="w-full h-full">
      <!-- <el-button type="primary" @click="toggleDark()">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </el-button> -->
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
// import { Location, } from '@element-plus/icons-vue'
// import { toggleDark } from '@/util/dark'

const router = useRouter()
const list = router.getRoutes().filter((v) => v.meta.isShow)
console.log('list', list.values)

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
