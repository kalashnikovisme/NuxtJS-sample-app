<template lang="pug">
v-text-field(
  prepend-inner-icon="mdi-magnify"
  @input="search"
  :value="this.$route.params.query"
)
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      searchUsers: 'users/searchUsers',
    }),
    search(query) {
      history.pushState({}, null, `/search/${query}`)
      this.searchUsers(query)
    },
  }
}
</script>

<style lang="sass">
  input
    width: 100%    
    height: 48px
    padding-left: 21px
    padding-top: 17px
</style>
