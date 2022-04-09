<template>
  <div class="flex flex-col mt-4 ml-14 pb-3">
    <div
      v-for="vacation in vacations"
      :key="vacation.id"
      class="flex flex-row mb-3 text-gray-400"
    >
      <p class="w-1/3 mr-5">
        {{ format(new Date(vacation.dateStart), 'dd/MM/yyyy') }}
      </p>
      <p class="w-1/2 mr-2 ml-1">
        {{ format(new Date(vacation.dateEnd), 'dd/MM/yyyy') }}
      </p>
      <p class="w-1/3 ml-2">{{ `${getQuantity(vacation)} dias` }}</p>

      <Badge :content="vacation.status" />

      <div v-if="vacation.status === 'A Validar'">
        <button
          class="h-8 shadow-md text-blue-500 border-2 border-blue-500 w-8 mr-12"
          @click="toggleIsNewValidationOpen"
        >
          <fa :icon="['fas', 'check']" />
        </button>
      </div>
      <div
        v-else-if="
          vacation.status === 'Aprovado' || vacation.status === 'Rejeitado'
        "
      >
        <button
          class="h-8 shadow-md text-blue-500 border-2 border-blue-500 w-8 mr-12"
        >
          <fa :icon="['fas', 'pen-to-square']" />
        </button>
      </div>
      <div v-else>
        <button
          class="h-8 bg-backg w-8 mr-12 shadow-inner cursor-not-allowed"
        ></button>
      </div>
    </div>
    <Modal v-if="isNewValidationOpen" :close="toggleIsNewValidationOpen">
      form
    </Modal>
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
    canEdit() {
      return this.$nuxt.$route.path === '/workspace_admin/work_vacation'
    },
    getQuantity(vacation) {
      return this.intervalToDuration(
        new Date(vacation.dateStart),
        new Date(vacation.dateEnd)
      ).days
    },
    toggleIsNewValidationOpen() {
      this.isNewValidationOpen = !this.isNewValidationOpen
    },
  },
}
</script>
