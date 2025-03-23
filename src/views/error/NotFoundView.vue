<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center px-4">
    <div class="text-6xl">😵</div>
    <h1 class="text-2xl font-semibold mt-4">페이지를 찾지 못했어요</h1>
    <RouterLink to="/" class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
      홈으로 가기
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
</style>