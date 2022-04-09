<template>
  <main class="w-full">
    <div class="flex flex-row mt-1">
      <WorkspaceTitle
        class="m-3"
        title="Solicitações de Férias"
        :button="{
          title: 'Nova Solicitação',
          onClick: toggleIsNewVacationOpen,
        }"
      />
    </div>
    <div class="flex max-w-screen-2xl">
      <div class="p-4 m-3 mt-0 bg-card shadow-2xl rounded-lg w-full">
        <div class="border-b">
          <div
            class="flex flex-row mt-4 ml-10 py-3 border-bord font-bold text-xs"
          >
            <div class="w-1/4">INÍCIO</div>
            <div class="w-1/4">TÉRMINO</div>
            <div class="w-1/4">PERÍODO</div>
            <div class="w-1/4 text-center">STATUS</div>
          </div>
        </div>
        <DaysOffEmployeeButtons />
        <div class="border-b"></div>
      </div>
    </div>

    <Modal
      v-if="isNewVacationOpen"
      title="Nova Solicitação"
      :close="toggleIsNewVacationOpen"
    >
      <NewVacationForm :save="toggleIsNewVacationOpen" />
    </Modal>
  </main>
</template>

<script>
export default {
  layout: 'workspace',
  data() {
    return {
      isNewVacationOpen: false,
    }
  },
  mounted() {
    this.$store.dispatch('vacations/fetchVacations')
  },
  methods: {
    toggleIsNewVacationOpen() {
      this.isNewVacationOpen = !this.isNewVacationOpen
    },
  },
}
</script>
