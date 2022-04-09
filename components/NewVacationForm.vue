<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-2 gap-8">
      <div class="flex flex-1 flex-col">
        <label class="font-bold" for="date_ending">Data de Início</label>
        <input
          id="date_ending"
          v-model="dateStart"
          type="date"
          name="date_ending"
          class="bg-input p-2 rounded-lg"
        />
      </div>

      <div class="flex flex-1 flex-col">
        <label class="font-bold" for="date_end">Data de Término</label>
        <input
          id="date_end"
          v-model="dateEnd"
          type="date"
          name="date_end"
          class="bg-input p-2 rounded-lg"
        />
      </div>
    </div>

    <div class="w-100 pt-5 text-right">
      <Button :click="addVacation"> Salvar </Button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    save: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      dateStart: null,
      dateEnd: null,
      status: 'Pendente',
    }
  },
  computed: {
    vacations() {
      return this.$store.state.vacations.list
    },
  },
  methods: {
    addVacation() {
      this.$store.dispatch('vacations/saveVacation', {
        dateStart: this.dateStart,
        dateEnd: this.dateEnd,
        status: 'Pendente',
      })
      this.save()
    },
  },
}
</script>
