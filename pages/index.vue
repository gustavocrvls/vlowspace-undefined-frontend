<template>
  <form method="post" @submit.prevent="login">
    <div class="flex items-center justify-center h-screen h-min-screen">
      <div class="bg-white shadow-lg p-10 w-full h-100 max-w-lg">
        <div
          class="flex justify-center text-blue-500 text-2xl text-center py-5 font-bold"
        >
          <img src="~/static/logo.png" alt="" width="200" />
        </div>
        <div class="flex flex-1 flex-col mb-3">
          <label class="font-bold" for="email">E-mail</label>
          <input
            id="email"
            v-model="email"
            type="string"
            name="email"
            class="bg-input p-2 rounded-lg"
          />
        </div>
        <div class="flex flex-1 flex-col mb-3">
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
          <button
            type="submit"
            class="font-bold py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-700 w-full"
          >
            Log In
          </button>
        </div>
      </div>
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

        if (this.$auth.user.role === 'EMPLOYEE')
          this.$router.push('/workspace/work_vacation')
        else this.$router.push('/workspace_admin/work_vacation')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>
