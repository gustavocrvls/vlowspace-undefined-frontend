<template>
  <main class="w-full m-5">
    <div class="flex flex-row mt-1">
      <div class="p-4 m-3 ml-4 mb-0 mt-2 font-bold tracking-wide text-3xl">
        <h1>Solicitações de Férias</h1>
      </div>
    </div>
    <div class="flex max-w-screen-2xl">
      <div class="p-4 m-3 mt-0 bg-card shadow-2xl rounded-lg w-full">
        <div class="border-b">
          <div
            class="flex flex-row mt-4 ml-16 p-3 border-bord font-bold text-xs"
          >
            <div class="w-1/3">INÍCIO</div>
            <div class="w-1/2">TÉRMINO</div>
            <div class="w-1/3 mr-3">PERÍODO</div>
            <div class="w-1/2 text-center">STATUS</div>
          </div>
        </div>
        <DaysOffFormat />
        <div class="border-b"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'workspace',
}
</script>
