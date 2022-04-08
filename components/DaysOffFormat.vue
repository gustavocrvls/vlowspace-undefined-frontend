<template>
  <div class="flex flex-col mt-4 ml-14 pb-3">
    <div
      v-for="stats in status"
      :key="stats"
      class="flex flex-row mb-3 text-gray-400"
    >
      <p class="w-1/3 mr-5">{{ firstDate }}</p>
      <p class="w-1/2 mr-9 ml-1">{{ lastDate }}</p>
      <p class="w-1/3">{{ quantity }}</p>
      <button
        :class="[
          'text-center',
          'w-72',
          'text-xs',
          'text-white',
          'rounded-lg',
          'font-bold',
          'mr-16',
          'ml-24',
          background(stats),
        ]"
      >
        {{ stats }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstDate: 'DD/MM/AA',
      lastDate: 'DD/MM/AA',
      quantity: 'XX dias',
      status: ['Aprovado', 'Rejeitado', 'Em Análise'],
    }
  },
  methods: {
    background(stats) {
      if (stats === 'Aprovado') {
        return 'bg-aproved'
      } else if (stats === 'Rejeitado') {
        return 'bg-reproved'
      } else {
        return 'bg-pending'
      }
    },
  },
}
</script>
