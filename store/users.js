import _ from 'underscore'
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
  },
  filterUsers(state, query) {
    if (_.isEmpty(query)) {
      state.collection = state.users
      return
    }

    state.collection = _.filter(state.users, (user) => {
      return user.name.includes(query) || user.address.includes(query) || user.title.includes(query) || user.email.includes(query)
    })
  },
}

export const actions = {
  async fetchUsers({ commit }) {
    const res = await api.users()

    commit('setAllUsers', res.data)
    commit('setCollectionOfUsers', res.data)
  },
  async searchUsers({ commit }, query) {
    await commit('filterUsers', query)
  },
}
