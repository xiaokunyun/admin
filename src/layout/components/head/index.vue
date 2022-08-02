<template>
  <div
    class="bg-black h-5 w-screen overflow-hidden flex justify-center items-center"
  >
    <div class="text-white w-screen flex justify-center items-center">
      <div class="w-4/5 flex justify-center items-center">
        <div v-for="(item, index) in routes" :key="index" class="w-1/5">
          <span class="hover:text-dark-50">
            <router-link :to="item.path" class="a">{{ item.name }}</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { routes } from '@/router'
</script>
