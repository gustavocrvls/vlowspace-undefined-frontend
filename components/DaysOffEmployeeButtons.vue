<template>
  <div class="flex flex-col mt-4 ml-14 pb-3">
    <div
      v-for="vacation in vacations"
      :key="vacation.id"
      class="flex flex-row mb-3 text-gray-600"
    >
      <p class="w-1/3 mr-5">
        {{ format(new Date(vacation.dateStart), 'dd/MM/yyyy') }}
      </p>
      <p class="w-1/2 mr-2 ml-1">
        {{ format(new Date(vacation.dateEnd), 'dd/MM/yyyy') }}
      </p>
      <p class="w-1/3 ml-2">{{ `${getQuantity(vacation)} dias` }}</p>
      <Badge :content="vacation.status" />
    </div>
  </div>
</template>

<script>
import { format, intervalToDuration } from 'date-fns'

export default {
  data() {
    return {
      format,
      intervalToDuration,
    }
  },
  computed: {
    vacations() {
      return this.$store.state.vacations.list
    },
  },
  methods: {
    getQuantity(vacation) {
      return this.intervalToDuration({
        start: new Date(vacation.dateStart),
        end: new Date(vacation.dateEnd),
      }).days
    },
  },
}
</script>
