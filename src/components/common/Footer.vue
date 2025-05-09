<template>
  <footer class="bg-white dark:bg-gray-800">
    <!-- 상단 구분선 -->
    <div class="border-t border-gray-200 dark:border-gray-700"></div>

    <div class=" max-w-screen-md mx-auto px-4 py-4">
      <ul class="md:hidden flex justify-around text-sm text-gray-600 dark:text-gray-300 divide-x divide-gray-300 dark:divide-gray-600">

        <li class="flex-1 flex flex-col items-center px-2">
          <RouterLink to="/">
            <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h4l3-8 4 16 3-8h4" />
            </svg>
            <span>홈</span>
          </RouterLink>
        </li>
        <li class="flex-1 flex flex-col items-center px-2">
          <RouterLink to="/board">
            <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>소통</span>
          </RouterLink>
        </li>
        <li class="flex-1 flex flex-col items-center px-2">
          <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>추가</span>
        </li>
        <li class="flex-1 flex flex-col items-center px-2">
          <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.837 0 5.452.885 7.879 2.379M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>내정보</span>
        </li>
      </ul>

      <p class="hidden md:block mt-4 text-center text-xs text-gray-400 dark:text-gray-500">© 2025 Route it</p>
    </div>
  </footer>


</template>

<script setup>

</script>

<style scoped>

</style>