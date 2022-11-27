import api from '~/api'

export const state = () => ({
  users: [],
  collection: [],
})

export const getters = {
  getCollection: state => state.collection.slice(0, 10),
}

export const mutations = {
  setAllUsers(state, users) {
    state.users = users
  },
  setCollectionOfUsers(state, collection) {
    state.collection = collection
  }
}

export const actions = {
  async fetchUsers({ commit }) {
    const res = await api.users()

    console.log(res)

    commit('setAllUsers', res.data)
    commit('setCollectionOfUsers', res.data)
  },
  async searchUsers({ commit }, query) {
  },
}
