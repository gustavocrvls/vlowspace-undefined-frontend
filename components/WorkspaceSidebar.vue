<template>
  <div class="flex flex-col text-center h-full tracking-wide">
    <button
      v-for="route in routes"
      :key="route.path"
      :class="[
        'hover:shadow-md',
        'mb-4',
        'p-3',
        'rounded-lg',
        'shadow-lg',
        'transition-shadow',
        isActive(route.path)
          ? 'text-white bg-blue-500 shadow-xl'
          : 'text-black bg-backg',
      ]"
      @click="goTo(route.path)"
    >
      {{ route.name }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          name: 'Férias',
          path: 'work_vacation',
          isActive: true,
        },
        {
          name: 'Holerites',
          path: 'work_holerites',
          isActive: true,
        },
      ],
    }
  },
  methods: {
    isActive(route) {
      return (
        this.$nuxt.$route.path.includes(`workspace/${route}`) ||
        this.$nuxt.$route.path.includes(`workspace_admin/${route}`)
      )
    },
    goTo(path) {
      this.$router.push({
        path: `${path}`,
      })
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
