<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-1 pt-[60px] px-4 py-6 sm:px-6 md:px-8 bg-white">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '/src/components/common/Header.vue'
import Footer from '/src/components/common/Footer.vue'
</script>
