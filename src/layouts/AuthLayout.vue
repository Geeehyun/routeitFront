<template>
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-2">
    <!-- 좌측 영역 -->
    <div class="hidden md:flex flex-col justify-center items-center text-white p-10 bg-animated-gradient">
      <slot name="left" />
    </div>

    <!-- 우측 폼 영역 -->
    <div class="flex flex-col justify-center px-6 sm:px-12 md:px-16 py-12 bg-white">
      <div class="w-full max-w-md mx-auto">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
