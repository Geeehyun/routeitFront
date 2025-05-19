<template>
  <AuthLayout>
    <!-- 좌측 안내 영역 -->
    <template #left>
      <h2 class="text-3xl font-bold mb-4">만나서 반가워요!</h2>
      <p class="mb-8 text-sm text-white/70 text-center">
        얼른 계정을 만들어서 Route it과 함께해요!
      </p>
    </template>

    <!-- 오른쪽 가입 폼 -->
    <template #right>
      <div class="flex justify-between items-center mb-6">
        <RouterLink to="/" class="flex items-center text-blue-600 hover:underline text-sm">
          <i class="pi pi-home mr-1" />
          홈으로
        </RouterLink>

        <div class="text-sm">
          <span class="text-gray-600">이미 계정이 있으신가요?</span>
          <RouterLink to="/signin" class="text-blue-600 hover:underline ml-1">로그인 →</RouterLink>
        </div>
      </div>

      <h1 class="text-2xl font-semibold text-gray-900 mb-6">회원가입</h1>

      <form @submit.prevent="handleSignup" class="space-y-6">
        <!-- 이메일 -->
        <div>
          <label for="userId" class="block text-sm font-medium text-gray-700">이메일</label>
          <input id="userId" v-model="form.userId" type="email" required class="mt-1" />
        </div>

        <!-- 비밀번호 -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">비밀번호</label>
          <input id="password" v-model="form.password" type="password" autoComplete="off" required class="mt-1" />
          <p class="mt-1 text-xs text-gray-500">
            최소 8자 이상, 영문 소문자와 숫자를 포함해주세요.
          </p>
        </div>

        <!-- 이름 -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">이름</label>
          <input id="name" v-model="form.name" type="text" required class="mt-1" />
          <p class="mt-1 text-xs text-gray-500">
            실명을 입력해주세요.
          </p>
        </div>

        <!-- 닉네임 -->
        <div>
          <label for="nickname" class="block text-sm font-medium text-gray-700">닉네임</label>
          <input id="nickname" v-model="form.nickname" type="text" required class="mt-1" />
        </div>

        <!-- 연령대 -->
        <div>
          <label for="ageRange" class="appearance-auto block text-sm font-medium text-gray-700">연령대</label>
          <select id="ageRange" name="ageRange" v-model="form.ageRange" required class=" appearance-auto mt-1 w-full">
            <option selected value>선택</option>
            <option value="10">10대</option>
            <option value="20">20대</option>
            <option value="30">30대</option>
            <option value="40">40대</option>
            <option value="50">50대 이상</option>
          </select>
        </div>

        <!-- 성별 -->
        <div>
          <label for="gender" class="block text-sm font-medium text-gray-700">성별</label>
          <select id="gender" name="gender" v-model="form.gender" required class="mt-1 w-full">
            <option selected value="">선택</option>
            <option value="M">남성</option>
            <option value="F">여성</option>
          </select>
        </div>

        <!-- 연락처 -->
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700">연락처</label>
          <input id="phone" v-model="form.phone" type="tel" required class="mt-1" placeholder="010-0000-0000" />
          <p class="mt-1 text-xs text-gray-500">
            연락 가능한 휴대폰 번호를 입력해주세요.
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
import AuthLayout from "@/layouts/AuthLayout.vue";
import {userSignupForm} from "@/modules/auth/composables/userSignupForm.js";

const {form, handleSignup} = userSignupForm();

</script>

<style scoped>

</style>