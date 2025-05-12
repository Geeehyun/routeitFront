<template>
  <div class="max-w-screen-xl mx-auto px-4 py-6">
    <!-- 뷰 전환 버튼 -->
    <div class="flex justify-end mb-4 gap-2">
      <button @click="viewMode = 'grid'"
              :class="viewMode === 'grid' ? activeBtn : inactiveBtn">
        썸네일
      </button>
      <button @click="viewMode = 'list'"
              :class="viewMode === 'list' ? activeBtn : inactiveBtn">
        리스트
      </button>
    </div>

    <!-- 썸네일 형 (grid view) -->
    <div v-if="viewMode === 'grid'" class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="post in posts" :key="post.id" class="bg-white rounded shadow hover:shadow-md transition">
        <div class="p-4">
          <h3 class="font-semibold text-lg line-clamp-2">{{ post.title }}</h3>
          <p class="text-sm text-gray-500 mt-1">{{ post.location }} · {{ post.price }}원</p>
        </div>
      </div>
    </div>

    <!-- 리스트 형 (list view) -->
    <div v-else class="flex flex-col gap-4">
      <div v-for="post in posts" :key="post.id" class="flex gap-4 bg-white rounded shadow p-4 items-center hover:shadow-md transition">
        <div>
          <h3 class="font-semibold text-lg line-clamp-2">{{ post.title }}</h3>
          <p class="text-sm text-gray-500 mt-1">{{ post.location }} · {{ post.price }}원</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 글쓰기 버튼 (FAB) -->
  <button class="fixed bottom-24 md:bottom-10 right-6 bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-3xl hover:bg-blue-700 z-50" @click="onWriteClick">
    +
  </button>
</template>

<script setup>
import { ref } from 'vue'

const viewMode = ref('grid')

const activeBtn = 'bg-blue-600 text-white px-3 py-1 rounded'
const inactiveBtn = 'bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200'

const posts = ref([
  {
    id: 1,
    title: '피지컬 에듀케이션 디파트먼트 반팔티',
    price: 15000,
    location: '화도읍',
    thumbnail: ''
  },
  {
    id: 2,
    title: '오베이 나일론 반바지',
    price: 25000,
    location: '화도읍',
    thumbnail: ''
  },
  {
    id: 3,
    title: '디서먼트 카고 데님팬츠',
    price: 20000,
    location: '화도읍',
    thumbnail: ''
  }
])
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
