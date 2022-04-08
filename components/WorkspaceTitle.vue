<template>
  <div class="flex flex-1 justify-between mb-4">
    <h1 class="font-bold tracking-wide text-3xl">
      {{ title }}
    </h1>
    <button
      v-if="button"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {{ button.title }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    button: {
      type: Object,
      required: false,
      default: null,
    },
  },
}
</script>
