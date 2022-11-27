import api from '~/api'

export const state = () => ({
  users: [],
})

export const getters = {
}

export const mutations = {
}

export const actions = {
  async fetchUsers() {
    const res = await api.users()
    return res
  }
}
