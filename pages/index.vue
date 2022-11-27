<template lang="pug">
  .main
    search-input
    result-card
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  methods: mapActions({
    fetchUsers: 'users/fetchUsers',
  }),
  mounted() {
    this.fetchUsers()
  }
}
</script>

<style lang="sass">
  .main
    width: 564px
    padding-left: 20px
    padding-right: 20px
    background-color: white
</style>
