<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FullPageLayout from '@/layouts/FullPageLayout.vue'
import LayerPopupLayout from '@/layouts/LayerPopupLayout.vue'

const route = useRoute()

// 라우터 메타에 설정한 layout을 기반으로 컴포넌트 선택
const layoutComponent = computed(() => {
  const layout = route.meta.layout
  switch (layout) {
    case 'FullPageLayout':
      return FullPageLayout
    case 'LayerPopupLayout':
      return LayerPopupLayout
    default:
      return DefaultLayout
  }
})
</script>

<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<style scoped>
</style>
