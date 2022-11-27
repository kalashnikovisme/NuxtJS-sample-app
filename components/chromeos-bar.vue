<template lang="pug">
  .chromeos-bar
    MinimiseIcon(style="margin-top: 8px")
    MaximiseIcon
    CloseIcon
</template>

<script>
import CloseIcon from '~/assets/close.svg?inline'
import MinimiseIcon from '~/assets/minimise.svg?inline'
import MaximiseIcon from '~/assets/maximise.svg?inline'

export default {
  components: { CloseIcon, MinimiseIcon, MaximiseIcon },
};
</script>

<style lang="sass">
  .chromeos
    &-bar
      width: 100%
      background-color: #757575
      height: 32px
      display: flex
      justify-content: right
      align-items: center

      *
        margin-right: 14px   
</style>
