<template>
  <form method="post" @submit.prevent="login">
    <div class="flex flex-1 flex-col">
      <label class="font-bold" for="email">E-mail</label>
      <input
        id="email"
        v-model="email"
        type="string"
        name="email"
        class="bg-input p-2 rounded-lg"
      />
    </div>
    <div class="flex flex-1 flex-col">
      <label class="font-bold" for="email">Senha</label>
      <input
        id="email"
        v-model="password"
        type="password"
        name="email"
        class="bg-input p-2 rounded-lg"
      />
    </div>

    <div class="control">
      <button type="submit" class="button is-dark is-fullwidth">Log In</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })

        this.$router.push('/workspace')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>
