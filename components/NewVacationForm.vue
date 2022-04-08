<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-2 gap-8">
      <Input
        id="init_date"
        label="Data de Início"
        type="date"
        name="initial_date"
      />
      <Input
        id="init_date"
        label="Data de Término"
        type="date"
        name="ending_date"
      />
    </div>

    <div class="w-100 pt-5 text-right">
      <Button :click="log"> Salvar </Button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    log() {
      console.log('test')
    },
  },
}
</script>
