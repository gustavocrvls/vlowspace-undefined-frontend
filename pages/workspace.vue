<template>
  <main class="w-full m-5">
    <div class="flex flex-row mt-1">
      <div class="p-4 m-3 ml-4 mb-0 mt-2 font-bold tracking-wide text-3xl">
        <h1>Solicitações de Férias</h1>
      </div>
    </div>
    <div class="flex h-3/6 max-w-screen-2xl">
      <div class="p-4 m-3 mr-0 mt-0 bg-card shadow-2xl rounded-lg w-96">
        <div
          class="flex flex-col text-center h-full tracking-wide shadow-lg p-3"
        >
          <div
            class="mt-12 mb-6 bg-backg p-3 rounded-lg shadow-lg hover:shadow-md transition-shadow transition-shadow"
          >
            Férias
          </div>
          <div
            class="mb-12 bg-backg p-3 rounded-lg shadow-lg hover:shadow-md transition-shadow transition-shadow"
          >
            Holerites
          </div>
        </div>
      </div>
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
      </div>
    </div>
  </main>
</template>
