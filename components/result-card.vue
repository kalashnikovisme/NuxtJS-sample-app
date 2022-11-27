<template lang="pug">
v-card(
  style="margin-bottom: 20px"
)
  .card-body
    .main-info
      .avatar
        v-img(
          :src="user.avatar"
          width="134px"
          height="134px"
        )
      .data
        v-card-title {{ user.name }}
        v-card-subtitle {{ user.title }}
    .email
      span {{ user.email }}
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="sass">
  .card-body
    display: flex
    flex-direction: row
    justify-content: space-between

    .main-info
      display: flex
      flex-direction: row

    .email
      padding-top: 5px
      padding-right: 5px

      span
        font-size: 0.8rem
</style>
