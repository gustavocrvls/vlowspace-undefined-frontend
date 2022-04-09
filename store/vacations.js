// import axios from '~/plugins/axios'

export const state = () => ({
  list: [],
})

export const actions = {
  async fetchVacations({ commit }) {
    try {
      const { data } = await this.$axios.get('/vacation')
      commit('setVacations', data)
    } catch (error) {
      alert(error)
      console.error(error)
    }
  },
  async saveVacation({ commit }, vacation) {
    try {
      await this.$axios.post('/createVacation', vacation)
      commit('add', vacation)
    } catch (error) {
      alert(error)
      console.error(error)
    }
  },
}

export const mutations = {
  add(state, vacation) {
    state.list.push(vacation)
  },
  setVacations(state, vacations) {
    state.list = vacations
  },
}
