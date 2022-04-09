<template>
  <div class="flex flex-col mt-4 ml-14 pb-3">
    <div
      v-for="vacation in vacations"
      :key="vacation.id"
      class="flex flex-row mb-3 text-gray-400"
    >
      <p class="w-1/3 mr-5">{{ vacation.dateStart }}</p>
      <p class="w-1/2 mr-2 ml-1">{{ vacation.dateEnd }}</p>
      <p class="w-1/3 ml-2">{{ status.quantity }}</p>
      <Badge content="name" />
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
          background(stats),
        ]"
      >
        {{ stats }}
      </button>
      <div v-if="stats === 'A Validar'">
        <button
          class="h-8 shadow-md text-blue-500 border-2 border-blue-500 w-8 mr-12"
          @click="toggleIsNewValidationOpen"
        >
          <fa :icon="['fas', 'check']" />
        </button>
      </div>
      <div v-else-if="stats === 'Aprovado' || stats === 'Rejeitado'">
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
export default {
  data() {
    return {
      isNewValidationOpen: false,
      firstDate: 'DD/MM/AA',
      lastDate: 'DD/MM/AA',
      quantity: 'XX dias',
      status: ['A Validar', 'Aprovado', 'Rejeitado', 'Vencido'],
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
    toggleIsNewValidationOpen() {
      this.isNewValidationOpen = !this.isNewValidationOpen
    },
  },
}
</script>
