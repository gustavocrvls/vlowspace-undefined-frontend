export const state = () => ({
  list: [
    {
      user: {
        name: 'Gustavo Carvalho',
      },
      owner: {
        name: 'Sim Jr.',
      },
      dp: {
        name: 'Não Jr.',
      },
      dateStart: new Date(),
      dateEnd: new Date(),
      quantity: 15,
      status: 'A Validar',
    },
    {
      user: {
        name: 'Naruto Uzumaki',
      },
      owner: {
        name: 'Kakashi Hatake',
      },
      dp: {
        name: 'Iruka Sensei',
      },
      dateStart: new Date(),
      dateEnd: new Date(),
      quantity: 15,
      status: 'Aprovado',
    },
    {
      user: {
        name: 'Daniel Walter',
      },
      owner: {
        name: 'Shrek da fonseca',
      },
      dp: {
        name: 'Burro da silva',
      },
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
