import _ from 'underscore'
import api from '~/api'

const perPage = 10

export const state = () => ({
  users: [],
  collection: [],
  showenCollection: [],
  currentPage: 1,
  query: null,
})

export const getters = {
  getShowenCollection: state => state.showenCollection,
  isLastPage: (state) => {
    return state.collection.length <= perPage * state.currentPage
  },
  searchQuery: state => state.query,
}

export const mutations = {
  setAllUsers(state, users) {
    state.users = users
  },
  setCollectionOfUsers(state, collection) {
    state.collection = collection
    state.currentPage = 1
    state.showenCollection = state.collection.slice(0, perPage * state.currentPage)
  },
  showOneMorePage(state, page) {
    state.currentPage = state.currentPage + 1
    state.showenCollection = state.collection.slice(0, perPage * state.currentPage)
  },
  filterUsers(state, query) {
    state.query = query
    state.currentPage = 1

    if (_.isEmpty(query)) {
      state.collection = state.users
      state.showenCollection = state.collection.slice(0, perPage * state.currentPage)
      return
    }

    state.collection = _.filter(state.users, (user) => {
      const attributesList = ['name', 'address', 'title', 'email']

      return attributesList.map((attribute) => {
        return user[attribute].toLowerCase().includes(query.toLowerCase())
      }).includes(true)
    })
    state.showenCollection = state.collection.slice(0, perPage * state.currentPage)
  },
}

export const actions = {
  async fetchUsers({ commit }, query = null) {
    const res = await api.users()

    commit('setAllUsers', res.data)
    commit('setCollectionOfUsers', res.data)
    if (!(_.isEmpty(query))) {
      commit('filterUsers', query)
    }
  },
  async searchUsers({ commit }, query) {
    await commit('filterUsers', query)
  },
  async paginateUsers({ commit }, page) {
    await commit('showOneMorePage', page)
  }
}
