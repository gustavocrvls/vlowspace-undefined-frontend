<template>
  <div class="flex flex-col mt-4 ml-14 pb-3">
    <div
      v-for="(vacation, index) in vacations"
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
          @click="openValidation(index)"
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
    <Modal
      v-if="isNewValidationOpen"
      title="Informações da Solicitação"
      :close="toggleIsNewValidationOpen"
      class="border-b"
    >
      <div class="border-b" />
      <div class="flex flex-col">
        <div class="flex flex-row justify-between pr-20">
          <div
            class="flex flex-col mt-2 justify-around h-28 font-bold text-gray-500"
          >
            <p>Colaborador:</p>
            <p>Período solicitado:</p>
            <p>Dias solicitados:</p>
            <p>Quem aprovou:</p>
          </div>
          <div class="flex flex-col mt-2 justify-around h-28">
            <p>{{ vacations[selectedIndex].user.name }}</p>
            <p>
              {{
                `${format(
                  vacations[selectedIndex].dateStart,
                  'dd/MM/yyyy'
                )} até ${format(
                  vacations[selectedIndex].dateEnd,
                  'dd/MM/yyyy'
                )}`
              }}
            </p>
            <p>{{ `${vacations[selectedIndex].quantity} dias` }}</p>
            <p>
              {{
                `${vacations[selectedIndex].owner.name} (Gestor), ${vacations[selectedIndex].dp.name} (RH)`
              }}
            </p>
          </div>
        </div>
        <div
          class="flex flex-row mt-4 shadow-inner z-10 justify-end p-3 bg-gray-50"
        >
          <button
            class="bg-redModal shadow-md hover:bg-red-500 font-bold py-2 px-4 rounded text-white"
          >
            Reprovar
          </button>
          <button
            class="bg-greenModal shadow-md mr-5 ml-5 hover:bg-green-400 font-bold py-2 px-4 rounded text-white"
          >
            Aprovar
          </button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { format, intervalToDuration } from 'date-fns'

export default {
  data() {
    return {
      isNewValidationOpen: false,
      format,
      intervalToDuration,
      selectedIndex: 0,
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
    openValidation(index) {
      this.selectedIndex = index
      this.toggleIsNewValidationOpen()
    },
  },
}
</script>
