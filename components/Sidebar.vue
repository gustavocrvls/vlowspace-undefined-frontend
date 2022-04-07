<template>
  <aside :class="[true ? 'w-40 max-w-lg' : 'w-40 max-w-0']">
    <ul>
      <li @click="goToVacation">Férias</li>
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
  },
}
</script>
