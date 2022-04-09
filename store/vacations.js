export const state = () => ({
  list: [
    {
      dateStart: new Date(),
      dateEnd: new Date(),
      quantity: 15,
      status: 'Aprovado',
    },
  ],
})

export const mutations = {
  add(state, vacation) {
    state.list.push(vacation)
  },
}
