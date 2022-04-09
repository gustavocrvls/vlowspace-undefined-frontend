<template>
  <header class="w-100">
    <div class="p-4 flex justify-center bg-white shadow-md">
      <div class="w-11/12 flex align-center justify-between">
        <div></div>
        <div class="font-bold text-blue-500 text-center">Vlowspace</div>
        <div>
          <span>{{ username }}</span>
          <button class="w-8 h-8 rounded-lg hover:bg-gray-100" @click="logout">
            <fa :icon="['fas', 'sign-out']" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    }
  },
  created() {
    this.username = this.$auth.user.name
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
}
</script>
