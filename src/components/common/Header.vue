<template>
  <header class="bg-white shadow-sm px-4 py-3 fixed w-full top-0 left-0 z-50">
    <div class="flex justify-between items-center max-w-screen-xl mx-auto">
      <!-- 로고 -->
      <RouterLink to="/" class="text-lg font-bold text-blue-600">Route it</RouterLink>

      <!-- 햄버거 아이콘 (모바일) -->
      <button @click="toggleMenu" class="md:hidden text-2xl">
        <i class="pi pi-bars"></i>
      </button>

      <!-- 데스크탑 메뉴 -->
      <nav class="hidden md:flex space-x-6">
        <template v-for="item in navItems" :key="item.label">
          <RouterLink
              v-if="item.to"
              :to="item.to"
              class="flex items-center gap-1 hover:text-blue-600"
          >
            <i :class="item.icon" /><span>{{ item.label }}</span>
          </RouterLink>
          <button
              v-else
              @click="item.action"
              class="flex items-center gap-1 hover:text-blue-600"
          >
            <i :class="item.icon" /><span>{{ item.label }}</span>
          </button>
        </template>
      </nav>
    </div>

    <!-- 모바일 메뉴 -->
    <div v-if="showMenu" class="md:hidden mt-2 border-t pt-2 flex flex-col gap-2">
      <template v-for="item in navItems" :key="item.label">
        <RouterLink
            v-if="item.to"
            :to="item.to"
            @click="toggleMenu"
            class="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded"
        >
          <i :class="item.icon" /><span>{{ item.label }}</span>
        </RouterLink>
        <button
            v-else
            @click="() => { item.action(); toggleMenu() }"
            class="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded"
        >
          <i :class="item.icon" /><span>{{ item.label }}</span>
        </button>
      </template>
    </div>
  </header>
</template>

<script setup>
import {ref, computed, reactive, onMounted} from 'vue'
import {RouterLink, useRouter} from 'vue-router'
import {useAuthStore} from "@/modules/auth/stores/authStore.js";
import {showAlert} from "@/composables/alert.js";

const auth = useAuthStore();
const router = useRouter();

const isLoggedIn = computed(() => !!auth.accessToken);


const showMenu = ref(false);
const toggleMenu = () => {
  showMenu.value = !showMenu.value
};
const signOut = () => {
  showAlert().confirm('로그아웃 하시겠습니까?', '로그아웃')
      .then((res) => {
        if(res) {
          auth.signOut();
          router.push('/');
        }
      })
  ;
};

// 네비게이션 항목
const navItems = computed(() => {
  return isLoggedIn.value
      ? [
        { label: '게시판', to: '/board', icon: 'pi pi-face-smile\n' },
        { label: '로그아웃', action: signOut, icon: 'pi pi-sign-out' }
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
