<template>
  <header class="bg-white shadow-sm px-4 py-3 fixed w-full top-0 left-0 z-50">
    <div class="flex justify-between items-center max-w-screen-xl mx-auto">
      <!-- 로고 -->
      <RouterLink to="/" class="text-lg font-bold text-blue-600">Route it</RouterLink>

      <!-- 햄버거 아이콘 (모바일) -->
      <button @click="toggleMenu" class="md:hidden text-2xl">
        <i class="pi pi-bars"></i>
      </button>

      <!-- 메뉴 (데스크탑용) -->
      <nav class="hidden md:flex space-x-6">
        <RouterLink v-for="item in navItems" :key="item.label" :to="item.to" class="flex items-center gap-1 hover:text-blue-600">
          <i :class="item.label === '홈' ? item.icon : ''" ><span>{{ item.label !== '홈' ? item.label : '' }}</span></i>
        </RouterLink>
      </nav>
    </div>

    <!-- 모바일 메뉴 (드로어 형식) -->
    <div v-if="showMenu" class="md:hidden mt-2 border-t pt-2 flex flex-col gap-2">
      <RouterLink
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          @click="toggleMenu"
          class="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded"
      >
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

// 👉 로그인 여부 (임시 상태값, 나중에 Pinia나 Vuex로 대체 가능)
const isLoggedIn = ref(false)

const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

// 네비게이션 항목
const navItems = computed(() => {
  return isLoggedIn.value
      ? [
        { label: '마이페이지', to: '/mypage', icon: 'pi pi-user' },
        { label: '로그아웃', to: '/logout', icon: 'pi pi-sign-out' }
      ]
      : [
        { label: '로그인/회원가입', to: '/signin', icon: 'pi pi-sign-in' },
      ]
})
</script>

<style scoped>
/* 피아이콘이 조금 더 커 보이게 */
.pi {
  font-size: 1.1rem;
}
</style>
