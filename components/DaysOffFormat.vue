<template>
  <div class="flex flex-col mt-4 ml-14 pb-3">
    <div v-for="stats in status" :key="stats" class="flex flex-row mb-3">
      <p class="w-1/4">{{ firstDate }}</p>
      <p class="w-1/2">{{ lastDate }}</p>
      <p class="w-1/2">{{ stats }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstDate: 'DD/MM/AA',
      lastDate: 'DD/MM/AA',
      status: ['APROVADO', 'REJEITADO', 'EM ANÁLISE'],
    }
  },
}
</script>
