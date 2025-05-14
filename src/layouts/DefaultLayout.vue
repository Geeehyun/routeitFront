<template>
  <div class="flex flex-col min-h-screen">
    <!-- 헤더 -->
    <Header />
    <!-- // 헤더 -->
    <!-- 본문 -->
    <main class="pb-32 flex-1 pt-[60px] px-4 py-6 sm:px-6 md:px-8 bg-white">
      <slot />
    </main>
    <!-- // 본문 -->
    <!-- 푸터 -->
    <Footer />
    <!-- //푸터 -->
  </div>
</template>

<script setup>
import Header from '/src/components/common/Header.vue'
import Footer from '/src/components/common/Footer.vue'
</script>
