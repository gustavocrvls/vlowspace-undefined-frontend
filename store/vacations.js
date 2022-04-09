export const state = () => ({
  list: [
    {
      dateStart: new Date(),
      dateEnd: new Date(),
      quantity: 15,
      status: 'Aprovado',
    },
    {
      dateStart: new Date(),
      dateEnd: new Date(),
      quantity: 15,
      status: 'Reprovado',
    },
  ],
})

export const mutations = {
  add(state, vacation) {
    state.list.push(vacation)
  },
}
