<template>
  <button
    :class="[
      'text-center',
      'text-xs',
      'text-white',
      'rounded',
      'font-bold',
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
