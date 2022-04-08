<template>
  <main class="w-full m-5">
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
    <div class="flex h-3/6 max-w-screen-2xl">
      <div class="p-4 m-3 mt-0 bg-card shadow-2xl rounded-lg w-full">
        <div class="border-b">
          <div
            class="flex flex-row mt-4 ml-20 p-3 border-bord font-bold text-xs"
          >
            <div class="w-1/4">INÍCIO</div>
            <div class="w-1/2">FIM</div>
            <div class="w-1/2 items-end">STATUS</div>
          </div>
        </div>
        <div class="border-b">
          <h1>Hello World</h1>
        </div>
      </div>
    </div>

    <Modal v-if="isNewVacationOpen" :close="toggleIsNewVacationOpen">
      form
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
  methods: {
    toggleIsNewVacationOpen() {
      console.log(this.isNewVacationOpen)
      this.isNewVacationOpen = !this.isNewVacationOpen
    },
  },
}
</script>
