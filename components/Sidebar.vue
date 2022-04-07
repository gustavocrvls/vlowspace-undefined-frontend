<template>
  <aside
    :class="[
      true ? 'max-w-lg' : 'max-w-0',
      'w-40 h-screen bg-white rounded-r-3xl shadow-xl',
    ]"
  >
    <ul>
      <li
        :class="[
          'cursor-pointer',
          'rounded-r-full',
          'p-3',
          isActive('/vacations')
            ? 'text-white bg-blue-500 hover:bg-blue-600'
            : '',
        ]"
        @click="goToVacation"
      >
        Férias
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  methods: {
    goToVacation() {
      this.$router.push({
        path: '/vacations',
      })
    },
    isActive(route) {
      return this.$nuxt.$route.path === route
    },
  },
}
</script>
