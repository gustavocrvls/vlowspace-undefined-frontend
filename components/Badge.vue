<template>
  <button
    :class="[
      'text-center',
      'w-72',
      'text-xs',
      'text-white',
      'rounded',
      'font-bold',
      'mr-16',
      'ml-24',
      'h-8',
      'cursor-default',
      background(content),
    ]"
  >
    {{ content }}
  </button>
</template>

<script>
import { colors } from '~/constants/badge'

export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  methods: {
    background(status) {
      return colors[status] || 'bg-pending'
    },
  },
}
</script>
