<template>
  <div class="flex flex-col text-center h-full tracking-wide">
    <button
      v-for="route in routes"
      :key="route.path"
      :class="[
        'hover:shadow-md',
        'font-bold',
        'mb-4',
        'p-3',
        'rounded',
        'shadow-lg',
        'transition-shadow',
        isActive(route.path)
          ? 'text-white bg-blue-500 shadow-xl hover:bg-blue-700'
          : 'text-black bg-backg',
      ]"
      :disabled="!route.isActive"
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
          name: 'Holerites (em breve)',
          path: 'work_holerites',
          isActive: false,
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
  },
}
</script>
