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
        v-card-title(style="padding-bottom: 0px") {{ user.name }}
        span.title {{ user.title }}
        span.address {{ user.address }}
        v-card-actions
          v-btn(
            text
            color="#009688"
          ) Mark as suitable
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
    text-align: left

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
