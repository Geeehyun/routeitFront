<template>
  <div
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50"
      @click.self="onCancel"
  >
    <div class="bg-white rounded-xl shadow-lg max-w-sm w-full p-6 text-center">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">
        {{ title || '알림' }}
      </h3>
      <p class="text-sm text-gray-700 mb-6 whitespace-pre-wrap">{{ message }}</p>

      <div class="flex justify-center gap-3">
        <template v-if="type === 'confirm'">
          <button
              @click="onCancel"
              class="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          >
            취소
          </button>
          <button
              @click="onConfirm"
              class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            확인
          </button>
        </template>

        <template v-else>
          <button
              @click="onCancel"
              class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            확인
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * (공통) 알림/확인 레이어
 * - showAlert() 함수로도 호출 가능
 *
 * @property {string} title 알림제목(선택값, 미입력 시 '알림')
 * @property {string} message 알림내용(필수)
 * @property {'alert' | 'connfirm'} type 알림타입 ['alert': 기본값, 'confirm']
 *
 * @event confirm - 확인 클릭 시 발생
 * @event cancel - 취소 클릭 or 외부 클릭 시 발생
 * @example
 * <AlertLayer
 *   type="confirm"
 *   title="삭제 확인"
 *   message="정말 삭제할까요?"
 * />
 */
const props = defineProps({
  title: String,
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'alert', // 'alert' or 'confirm'
    validator: (val) => ['alert', 'confirm'].includes(val)
  }
});

// 확인(confirm), 취소(cancel) 선택 값 부모에게 전달
const emit = defineEmits(['confirm', 'cancel']);
const onCancel = () => emit('cancel');
const onConfirm = () => emit('confirm');
</script>

<style scoped>
</style>
