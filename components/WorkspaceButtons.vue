<template>
  <div class="flex flex-col text-center h-full tracking-wide shadow-lg p-3">
    <button
      :class="[
        'hover:shadow-md',
        'mb-6',
        'mt-12',
        'p-3',
        'rounded-lg',
        'shadow-lg',
        'transition-shadow',
        isActive('/workspace/work_vacation')
          ? 'text-white bg-blue-500 shadow-xl'
          : 'text-black bg-backg',
      ]"
      @click="goToVacationDash"
    >
      Férias
    </button>
    <button
      :class="[
        'hover:shadow-md',
        'mb-12',
        'p-3',
        'rounded-lg',
        'shadow-lg',
        'transition-shadow',
        isActive('/workspace/work_holerites')
          ? 'text-white bg-blue-500 shadow-xl'
          : 'text-black bg-backg',
      ]"
      @click="goToHoleriteDash"
    >
      Holerites
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return this.$nuxt.$route.path === route
    },
    goToVacationDash() {
      this.$router.push({
        path: '/workspace/work_vacation',
      })
    },
    goToHoleriteDash() {
      this.$router.push({
        path: '/workspace/work_holerites',
      })
    },
  },
}
</script>
