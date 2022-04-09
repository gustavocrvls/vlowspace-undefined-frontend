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

      <div v-if="vacation.status === 'Pendente'">
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
          @click="openEdition(index)"
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
    <!-- Validation Modal -->
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
          <div class="flex flex-col mt-2 justify-around h-28 mb-5">
            <p>{{ vacations[selectedIndex].user.name }}</p>
            <p>
              {{
                `${format(
                  new Date(vacations[selectedIndex].dateStart),
                  'dd/MM/yyyy'
                )} até ${format(
                  new Date(vacations[selectedIndex].dateEnd),
                  'dd/MM/yyyy'
                )}`
              }}
            </p>
            <p>{{ `${getQuantity(vacations[selectedIndex])} dias` }}</p>
            <p>
              {{
                `${vacations[selectedIndex].owner.name} (Gestor), ${vacations[selectedIndex].dp.name} (RH)`
              }}
            </p>
          </div>
        </div>
        <div
          v-if="!isJustificationOpen"
          class="flex flex-row mt-4 shadow-inner z-10 justify-end p-3 bg-gray-50"
        >
          <button
            class="bg-redModal shadow-lg hover:shadow-md transition-shadow hover:bg-red-500 font-bold py-2 px-4 rounded text-white"
            @click="openJustification()"
          >
            Reprovar
          </button>
          <button
            class="bg-greenModal shadow-lg hover:shadow-md transition-shadow mr-5 ml-5 hover:bg-greenModalHover font-bold py-2 px-4 rounded text-white"
          >
            Aprovar
          </button>
        </div>
        <div v-if="isJustificationOpen">
          <h1 class="font-bold p-5 border-b mr-2 pb-2 text-center border-t">
            Insira a justificativa:
          </h1>
          <div class="flex flex-col mr-2">
            <textarea
              class="w-full p-2 shadow-inner border-gray-200 border-2 outline-none"
            ></textarea>
            <div class="flex flex-row justify-between">
              <button
                class="mt-2 text-blue-500 font-bold py-2 rounded"
                @click="openJustification()"
              >
                <div
                  class="flex flex-row border-2 border-blue-200 w-24 justify-around p-2 rounded"
                >
                  <fa class="pt-1" :icon="['fas', 'arrow-left-long']" />
                  <p>Voltar</p>
                </div>
              </button>
              <button class="mt-2 text-white font-bold py-2 rounded">
                <div
                  class="flex flex-row bg-blue-500 border-2 border-blue-500 w-32 justify-around p-2 rounded"
                >
                  <fa class="pt-1" :icon="['fas', 'floppy-disk']" />
                  <p>Confirmar</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
    <!-- Edition Modal -->
    <Modal
      v-if="isEditionOpen"
      title="Informações da Solicitação | EDIÇÃO"
      :close="toggleIsEditionOpen"
      class="border-b"
    >
      <div class="border-b" />
      <div class="flex flex-col">
        <div class="flex flex-row justify-between pr-20 border-b">
          <div
            class="flex flex-col mt-2 justify-around h-28 font-bold text-gray-500"
          >
            <p>Colaborador:</p>
            <p>Período solicitado:</p>
            <p>Dias solicitados:</p>
            <p>Quem aprovou:</p>
          </div>
          <div class="flex flex-col mt-2 justify-around h-28 mb-5">
            <p>{{ vacations[selectedIndex].user.name }}</p>
            <p>
              {{
                `${format(
                  new Date(vacations[selectedIndex].dateStart),
                  'dd/MM/yyyy'
                )} até ${format(
                  new Date(vacations[selectedIndex].dateEnd),
                  'dd/MM/yyyy'
                )}`
              }}
            </p>
            <p>{{ `${getQuantity(vacations[selectedIndex])} dias` }}</p>
            <p>
              {{
                `${vacations[selectedIndex].owner.name} (Gestor), ${vacations[selectedIndex].dp.name} (RH)`
              }}
            </p>
          </div>
        </div>
        <div class="flex flex-row justify-between mr-3 mt-2">
          <Badge class="mt-3" :content="vacations[selectedIndex].status" />
          <button class="text-white font-bold py-2 rounded">
            <div
              class="flex flex-row shadow-lg hover:shadow-md hover:bg-blue-600 hover:border-blue-600 transition-shadow bg-blue-500 border-2 border-blue-500 w-24 justify-around p-2 rounded"
            >
              <fa class="pt-1" :icon="['fas', 'floppy-disk']" />
              <p>Salvar</p>
            </div>
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
      isJustificationOpen: false,
      isEditionOpen: false,
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
    getQuantity(vacation) {
      return this.intervalToDuration({
        start: new Date(vacation.dateStart),
        end: new Date(vacation.dateEnd),
      }).days
    },
    toggleIsNewValidationOpen() {
      this.isNewValidationOpen = !this.isNewValidationOpen
    },
    toggleIsEditionOpen() {
      this.isEditionOpen = !this.isEditionOpen
    },
    openValidation(index) {
      this.selectedIndex = index
      this.toggleIsNewValidationOpen()
    },
    openEdition(index) {
      this.selectedIndex = index
      this.toggleIsEditionOpen()
    },
    openJustification() {
      this.isJustificationOpen = !this.isJustificationOpen
    },
  },
}
</script>
