<template lang="pug">
  .main
    search-input

    result-card(
      v-for="(user, index) in this.getShowenCollection"
      :user="user"
      :key="`user-${index}`"
    )

    font-awesome-icon.spinner(
      :icon=['fas', 'spinner']
      v-intersect="onIntersect"
    )
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  methods: {
    ...mapActions({
      fetchUsers: 'users/fetchUsers',
      paginateUsers: 'users/paginateUsers',
    }),
    onIntersect() {
      this.paginateUsers()
    },
  },
  mounted() {
    this.fetchUsers()
  },
  computed: mapGetters({
    getShowenCollection: 'users/getShowenCollection',
  }),
}
</script>

<style lang="sass">
  .main
    width: 564px
    padding-left: 20px
    padding-right: 20px
    background-color: white
    overflow-y: scroll
    overflow-x: hidden
    justify-content: center
    text-align: center

    &::-webkit-scrollbar
      width: 4px

    &::-webkit-scrollbar-track
      -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.3)

    &::-webkit-scrollbar-thumb
      border-radius: 2px
      background: black
      -webkit-box-shadow: inset 0 0 4px rgba(0,0,0,0.5)

    .spinner
      animation-name: spin
      animation-duration: 1000ms
      animation-iteration-count: infinite
      animation-timing-function: linear

  @keyframes spin
    from
      transform: rotate(0deg)
    to
      transform: rotate(360deg)
</style>
