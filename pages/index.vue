<template lang="pug">
  .main
    search-input
    
    result-card(
      v-for="user in this.getCollection"
      :user="user"
    )
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  methods: mapActions({
    fetchUsers: 'users/fetchUsers',
  }),
  mounted() {
    this.fetchUsers()
  },
  computed: mapGetters({
    getCollection: 'users/getCollection',
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
</style>
