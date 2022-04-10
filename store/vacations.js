export const state = () => ({
  list: [],
})

export const getters = {
  getVacationsToDP: (state) => {
    return state.list.filter(
      (vacation) =>
        vacation.status !== 'Pendente' ||
        (vacation.status === 'Pendente' && vacation.owner)
    )
  },
  getVacations: (state) => {
    return state.list
  },
}

export const actions = {
  async fetchVacations({ commit }) {
    try {
      const { data } = await this.$axios.get('/listAllVacations')
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
  async approveVacation({ commit }, { vacation, status }) {
    try {
      await this.$axios.put(`/approveVacations/${vacation.id}`)
      commit('changeStatus', { vacation, status })
    } catch (error) {
      alert(error)
      console.error(error)
    }
  },
  async rejectVacation({ commit }, { vacation, status, reason }) {
    try {
      await this.$axios.put(`/rejectVacations/${vacation.id}`, { reason })
      commit('changeStatus', { vacation, status, reason })
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
  changeStatus(state, { vacation, status, reason }) {
    vacation.status = status
    if (reason) vacation.reason = reason
  },
}
