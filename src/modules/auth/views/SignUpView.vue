<template>
  <AuthLayout>
    <!-- 좌측 안내 영역 -->
    <template #left>
      <h2 class="text-3xl font-bold mb-4">Create your account</h2>
      <p class="mb-8 text-sm text-white/70 text-center">
        Explore and share your own travel routes with others.
      </p>
    </template>

    <!-- 오른쪽 가입 폼 -->
    <template #right>
      <div class="flex justify-end text-sm mb-4">
        <span class="text-gray-600">이미 계정이 있으신가요?</span>
        <RouterLink to="/signin" class="text-blue-600 hover:underline ml-1">로그인 →</RouterLink>
      </div>

      <h1 class="text-2xl font-semibold text-gray-900 mb-6">회원가입</h1>

      <form @submit.prevent="handleSignup" class="space-y-6">
        <!-- 이메일 -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">이메일</label>
          <input id="email" v-model="form.email" type="email" required class="mt-1" />
        </div>

        <!-- 비밀번호 -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">비밀번호</label>
          <input id="password" v-model="form.password" type="password" required class="mt-1" />
          <p class="mt-1 text-xs text-gray-500">
            최소 8자 이상, 영문 소문자와 숫자를 포함해주세요.
          </p>
        </div>

        <!-- 이름 -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">이름</label>
          <input id="name" v-model="form.name" type="text" required class="mt-1" />
          <p class="mt-1 text-xs text-gray-500">
            닉네임이나 실명을 입력해주세요.
          </p>
        </div>

        <!-- 제출 -->
        <button
            type="submit"
            class="w-full bg-gray-900 text-white font-medium py-2 rounded hover:bg-gray-800 transition"
        >
          계속하기 →
        </button>

        <!-- 약관 안내 -->
        <p class="text-xs text-gray-500 mt-4">
          가입 시 <a href="#" class="underline">이용약관</a>과 <a href="#" class="underline">개인정보 처리방침</a>에 동의하게 됩니다.
        </p>
      </form>
    </template>
  </AuthLayout>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import AuthLayout from "@/layouts/AuthLayout.vue";

const form = ref({
  email: '',
  password: '',
  name: ''
})

const handleSignup = () => {
  // 여기에 실제 회원가입 처리 로직 연결
  alert(`가입됨: ${form.value.name} (${form.value.email})`)
}
</script>

<style scoped>

</style>