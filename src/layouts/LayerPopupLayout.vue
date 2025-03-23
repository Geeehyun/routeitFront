<template>
  <div
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      @click.self="close"
  >
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
      <slot />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close'])
const close = () => emit('close')
</script>
