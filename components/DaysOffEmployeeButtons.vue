<template>
  <div class="flex flex-col mt-4 ml-14 pb-3">
    <div
      v-for="vacation in vacations"
      :key="vacation.id"
      class="flex flex-row mb-3 text-gray-600"
    >
      <p class="w-1/3 mr-5">{{ format(vacation.dateStart, 'dd/MM/yyyy') }}</p>
      <p class="w-1/2 mr-2 ml-1">
        {{ format(vacation.dateEnd, 'dd/MM/yyyy') }}
      </p>
      <p class="w-1/3 ml-2">{{ `${vacation.quantity} dias` }}</p>
      <Badge :content="vacation.status" />
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  data() {
    return {
      format,
    }
  },
  computed: {
    vacations() {
      return this.$store.state.vacations.list
    },
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
