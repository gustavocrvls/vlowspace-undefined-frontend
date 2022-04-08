<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      />

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
      >
        <div class="bg-white px-2 pt-5 pb-4 sm:p-2 sm:pb-4">
          <div class="mt-3 text-center sm:ml-4 sm:text-left">
            <div class="flex flex-1 justify-between">
              <h3 id="modal-title" class="font-bold tracking-wide text-xl">
                {{ title }}
              </h3>
              <button
                class="w-8 h-8 rounded-lg hover:bg-gray-100"
                @click="close"
              >
                <fa :icon="['fas', 'times']" />
              </button>
            </div>
            <div class="mt-2">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Function,
      default: null,
    },
    title: {
      type: String,
      default: 'Title',
    },
  },
}
</script>
