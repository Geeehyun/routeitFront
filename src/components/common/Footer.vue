<template>
  <footer class="bg-white dark:bg-gray-800">

    <div class="max-w-screen-md mx-auto">

      <ul class="md:hidden fixed bg-white bottom-0 left-0 right-0 z-50 px-4 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-around text-sm text-gray-600 dark:text-gray-300 divide-x divide-gray-300 dark:divide-gray-600">
        <!-- 홈 -->
        <li class="flex-1">
          <RouterLink to="/" class="flex flex-col items-center justify-center text-center">
            <svg class="w-6 h-6 mb-0.5 block mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 9.75L12 3l9 6.75M4.5 10.5v9.75h15v-9.75"/>
            </svg>
            <span class="text-xs">홈</span>
          </RouterLink>
        </li>

        <!-- 소통 -->
        <li class="flex-1">
          <RouterLink to="/board" class="flex flex-col items-center justify-center text-center">
            <svg class="w-6 h-6 mb-0.5 block mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 16h8M8 12h8M8 8h8M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"/>
            </svg>
            <span class="text-xs">소통</span>
          </RouterLink>
        </li>

        <!-- 추가 -->
        <li class="flex-1">
          <div class="flex flex-col items-center justify-center text-center">
            <svg class="w-6 h-6 mb-0.5 block mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            <span class="text-xs">추가</span>
          </div>
        </li>

        <!-- 내정보 -->
        <li class="flex-1">
          <div class="flex flex-col items-center justify-center text-center">
            <svg class="w-6 h-6 mb-0.5 block mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 15c2.837 0 5.452.885 7.879 2.379M15 10a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="text-xs">내정보</span>
          </div>
        </li>
      </ul>

      <p class="hidden md:block mt-4 text-center text-xs text-gray-400 dark:text-gray-500 px-4 py-4 border-t border-gray-200 dark:border-gray-700">© 2025 Route it</p>
    </div>
  </footer>


</template>

<script setup>

</script>

<style scoped>

</style>