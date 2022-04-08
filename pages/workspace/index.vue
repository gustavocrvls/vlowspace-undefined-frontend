<template>
  <div
    v-if="
      $nuxt.$route.path === '/workspace/' || $nuxt.$route.path === '/workspace'
    "
    class="mb-4"
  >
    <p>Parece que você parou no meio do caminho!</p>
    <h2>Por favor, selecione uma rota!</h2>
  </div>
</template>

<script>
export default {
  layout: 'workspace',
}
</script>
