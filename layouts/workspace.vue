<template>
  <div class="h-screen w-100 relative bg-backg">
    <Header class="sticky top-0" />

    <div class="max-w-screen-xl mx-auto">
      <div class="flex">
        <WorkspaceButtons class="w-2/12" />
        <div class="w-10/12">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>
