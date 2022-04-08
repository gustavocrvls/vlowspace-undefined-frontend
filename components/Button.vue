<template>
  <button
    :class="[
      'font-bold py-2 px-4 rounded',
      disabled
        ? 'bg-disabled text-gray-500 cursor-default'
        : 'text-white bg-blue-500 hover:bg-blue-700',
    ]"
    :disabled="disabled"
    @click="click"
  >
    <fa v-if="leftIcon" :icon="['fas', leftIcon]" />
    <slot />
    <fa v-if="rightIcon" :icon="['fas', rightIcon]" />
  </button>
</template>

<script>
export default {
  props: {
    click: {
      type: Function,
      default: () => {},
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    leftIcon: {
      type: Boolean,
      default: false,
    },
    rightIcon: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
