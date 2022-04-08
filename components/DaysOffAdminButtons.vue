<template>
  <div class="flex flex-col mt-4 ml-14 pb-3">
    <div
      v-for="stats in status"
      :key="stats"
      class="flex flex-row mb-3 text-gray-400"
    >
      <p class="w-1/3 mr-5">{{ firstDate }}</p>
      <p class="w-1/2 mr-2 ml-1">{{ lastDate }}</p>
      <p class="w-1/3 ml-2">{{ quantity }}</p>
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
          background(stats),
        ]"
        :disabled="!canEdit()"
        @click="goToModal()"
      >
        {{ stats }}
      </button>
      <button class="bg-red-300 w-20 mr-12">
        <fa :icon="['fas', 'check']" />
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
      status: ['A Validar', 'Aprovado', 'Rejeitado', 'Vencido'],
    }
  },
  methods: {
    background(stats) {
      if (stats === 'A Validar') {
        return 'bg-blue-500'
      } else if (stats === 'Aprovado') {
        return 'bg-aproved'
      } else if (stats === 'Rejeitado') {
        return 'bg-reproved'
      } else {
        return 'bg-pending'
      }
    },
    canEdit() {
      return this.$nuxt.$route.path === '/workspace_admin/work_vacation'
    },
    goToModal() {
      /* console.log('Hello') */
    },
  },
}
</script>
