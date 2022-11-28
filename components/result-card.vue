<template lang="pug">
v-card(
  style="margin-bottom: 20px"
)
  .card-body(:class="selected ? 'selected' : ''")
    .main-info
      .avatar
        v-img(
          :src="user.avatar"
          width="134px"
          height="134px"
        )
      .data
        v-card-title(style="padding-bottom: 0px")
          highlight-span(:text="user.name", :query="query")
        span.title
          highlight-span(:text="user.title", :query="query")
        span.address
          highlight-span(:text="user.address", :query="query")
        v-card-actions
          v-btn(
            text
            color="#009688"
            v-if="!selected"
            @click="toggle"
          ) Mark as suitable
          v-btn(
            text
            color="#009688"
            v-if="selected"
            @click="toggle"
          ) Skip selection
    .email
      span
        highlight-span(:text="user.email", :query="query")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: false,
    }
  },
  methods: {
    toggle() {
      this.selected = !this.selected
    }
  },
  computed: mapGetters({
    'query': 'users/searchQuery',
  })
}
</script>

<style lang="sass">
  .card-body
    display: flex
    flex-direction: row
    justify-content: space-between
    text-align: left
    border: 1px solid transparent

    &.selected
      border: 1px solid #4765FF

    .main-info
      display: flex
      flex-direction: row

      .data
        display: flex
        flex-direction: column

        .title, .address
          padding-left: 16px
          font-size: 0.8rem
        .title
          font-weight: bold

    .email
      padding-top: 10px
      padding-right: 10px

      span
        font-size: 0.8rem
</style>
