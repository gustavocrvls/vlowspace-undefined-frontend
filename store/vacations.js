import axios from 'axios'

export const state = () => ({
  list: [],
})

// export const getters = () => ({
//   getUsers: (state) => state.users
// })

export const actions = {
  async fetchVacations({ commit }) {
    try {
      const { data } = await axios.get(
        'https://62517af1dfa31c1fbd6e8814.mockapi.io/vacation'
      )
      commit('setVacations', data)
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
