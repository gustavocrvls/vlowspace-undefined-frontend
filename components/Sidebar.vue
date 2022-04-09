<template>
  <aside>
    <div
      class="flex flex-col justify-between w-48 max-w-34 h-screen bg-white rounded-r-3xl shadow-xl"
    >
      <div>
        <div
          class="flex justify-center text-blue-500 text-2xl text-center py-5 font-bold"
        >
          <img src="~/static/logo.png" alt="" width="120" />
        </div>
        <ul>
          <li
            v-for="item in items"
            :key="item.path"
            :class="[
              'cursor-pointer',
              'rounded-r-full',
              'p-3',
              'mb-3',
              'truncate',
              isActive(item.path)
                ? 'text-white bg-blue-500 hover:bg-blue-600'
                : '',
              [!item.active && 'text-gray-400'],
            ]"
          >
            <fa v-if="item.icon" :icon="['fas', item.icon]" />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="p-3 text-center text-blue-500">
        <span class="text-blue-700">{{ username }}</span>
        <button class="w-8 h-8 rounded-lg hover:bg-gray-100" @click="logout">
          <fa :icon="['fas', 'sign-out']" />
        </button>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      items: [
        {
          name: 'Férias',
          path: '/workspace',
          icon: 'calendar',
          active: true,
        },
        {
          name: 'Meu perfil (em breve)',
          path: '/profile',
          icon: 'user',
          active: false,
        },
        {
          name: 'Holerites (em breve)',
          path: '/holerites',
          icon: 'money-bill',
          active: false,
        },
        {
          name: 'Configurações (em breve)',
          path: '/settings',
          icon: 'cog',
          active: false,
        },
      ],
    }
  },
  created() {
    this.username = this.$auth.user.name
  },
  methods: {
    goToVacation() {
      this.$router.push({
        path: '/workspace/work_vacation',
      })
    },
    isActive(route) {
      return this.$nuxt.$route.path.includes(route)
    },
    logout() {
      this.$auth.logout()
    },
  },
}
</script>
