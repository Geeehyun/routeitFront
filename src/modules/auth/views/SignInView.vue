<template>
  <AuthLayout>
    <!-- 좌측 안내 영역 -->
    <template #left>
      <h2 class="text-3xl font-bold mb-4">Welcome back!</h2>
      <p class="mb-8 text-sm text-white/70 text-center">
        Reconnect and explore routes shared by fellow travelers.
      </p>
    </template>

    <!-- 오른쪽 로그인 폼 -->
    <template #right>
      <div class="flex justify-end text-sm mb-4">
        <span class="text-gray-600">계정이 없으신가요?</span>
        <RouterLink to="/signup" class="text-blue-600 hover:underline ml-1">가입하기 →</RouterLink>
      </div>

      <h1 class="text-2xl font-semibold text-gray-900 mb-6">로그인</h1>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">이메일</label>
          <input id="email" v-model="form.email" type="email" required class="mt-1" />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">비밀번호</label>
          <input id="password" v-model="form.password" type="password" required class="mt-1" />
        </div>

        <!-- 로그인 버튼 -->
        <button
            type="submit"
            class="w-full bg-gray-900 text-white font-medium py-2 rounded hover:bg-gray-800 transition"
        >
          로그인
        </button>
        <button
            type="button"
            class="w-full bg-gray-900 text-white font-medium py-2 rounded hover:bg-gray-800 transition"
            @click="onClick"
        >
          테스트
        </button>
      </form>

      <!-- 소셜 로그인 -->
      <div class="mt-6">
        <p class="text-center text-sm text-gray-500 mb-3">또는 소셜 계정으로 로그인</p>
        <div class="flex justify-center gap-4">
          <button class="w-10 h-10 rounded-full shadow border hover:scale-110 transition bg-[#03c75a] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="none"><path fill="#fff" fill-rule="evenodd" d="M14.543 4.5v7.567L9.476 4.5H4v15h5.458v-7.568l5.066 7.568H20v-15z" clip-rule="evenodd"></path></svg>
          </button>
          <button class="w-10 h-10 rounded-full shadow border hover:scale-110 transition bg-[#ffe835] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="none"><path fill="#2A1808" fill-rule="evenodd" d="M12 4c-4.694 0-8.5 3.06-8.5 6.835 0 2.441 1.591 4.583 3.984 5.792-.13.458-.836 2.946-.865 3.142 0 0-.017.146.077.202.093.056.203.013.203.013.267-.038 3.1-2.068 3.591-2.42q.736.106 1.51.107c4.695 0 8.5-3.06 8.5-6.836C20.5 7.06 16.695 4 12 4" clip-rule="evenodd"></path></svg>
          </button>
          <button class="w-10 h-10 rounded-full shadow border hover:scale-110 transition bg-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="none"><path fill="#4280EF" d="M20.5 12.18c0-.585-.057-1.19-.151-1.756h-8.181v3.344h4.686a3.94 3.94 0 0 1-1.739 2.626l2.797 2.173c1.643-1.53 2.588-3.76 2.588-6.386"></path><path fill="#34A353" d="M12.168 20.645c2.343 0 4.308-.775 5.744-2.097l-2.797-2.154c-.774.529-1.776.831-2.947.831-2.268 0-4.176-1.53-4.875-3.57l-2.872 2.21a8.66 8.66 0 0 0 7.747 4.78"></path><path fill="#F6B704" d="M7.293 13.635a5.27 5.27 0 0 1 0-3.325L4.421 8.08a8.68 8.68 0 0 0 0 7.785z"></path><path fill="#E54335" d="M12.168 6.74a4.73 4.73 0 0 1 3.325 1.303l2.475-2.494a8.35 8.35 0 0 0-5.8-2.249A8.66 8.66 0 0 0 4.42 8.08l2.872 2.23c.7-2.06 2.607-3.57 4.875-3.57"></path></svg>
          </button>
        </div>
      </div>
    </template>
  </AuthLayout>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import AuthLayout from "@/layouts/AuthLayout.vue";
import { showAlert } from '@/composables/alert.js'

const onClick = async () => {
  const result = await showAlert().confirm('테스트 입니다.');
  console.log(result);
}

const form = ref({
  email: '',
  password: ''
})

const handleLogin = () => {
  alert(`로그인 시도: ${form.value.email}`)
}
</script>

<style scoped>

</style>