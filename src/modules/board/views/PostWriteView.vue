<template>
  <div class="max-w-screen-md mx-auto p-6">
    <h2 class="text-2xl font-bold mb-6">게시글 작성</h2>

    <form @submit.prevent="handleSubmit">
      <!-- 제목 입력 -->
      <div class="mb-4">
        <label for="title" class="block mb-1 font-medium">제목</label>
        <input
            id="title"
            v-model="form.title"
            type="text"
            class="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="제목을 입력하세요"
            required
        />
      </div>

      <!-- 내용 입력 -->
      <div class="mb-4">
        <label for="content" class="block mb-1 font-medium">내용</label>
        <textarea
            id="content"
            v-model="form.content"
            class="w-full border border-gray-300 rounded px-3 py-2 h-40 resize-none"
            placeholder="내용을 입력하세요"
            required
        ></textarea>
      </div>

      <!-- 등록 버튼 -->
      <div class="flex justify-end">
        <button
            type="submit"
            class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          등록
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import {postForm} from "@/modules/board/composables/postForm.js";
const { onBackClick, handleSubmit, form} = postForm();

</script>

<style scoped>

</style>