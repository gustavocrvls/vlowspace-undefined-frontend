<template>
  <aside
    :class="[
      true ? 'max-w-lg' : 'max-w-0',
      'h-screen bg-white rounded-r-3xl shadow-xl',
    ]"
  >
    <h1 class="text-blue-500 text-2xl text-center py-5 font-bold">Vlowspace</h1>
    <ul>
      <li
        v-for="item in items"
        :key="item.path"
        :class="[
          'cursor-pointer',
          'rounded-r-full',
          'p-3',
          isActive(item.path) ? 'text-white bg-blue-500 hover:bg-blue-600' : '',
          [!item.active && 'text-gray-400'],
        ]"
      >
        <fa v-if="item.icon" :icon="['fas', item.icon]" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
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
  methods: {
    goToVacation() {
      this.$router.push({
        path: '/workspace/work_vacation',
      })
    },
    isActive(route) {
      return this.$nuxt.$route.path.includes(route)
    },
  },
}
</script>
