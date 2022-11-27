<template lang="pug">
.chromeos-panel
  ChromeIcon
  GmailIcon
  SearchIcon
  DriveIcon
  YoutubeIcon
  AppsIcon
</template>

<script>
import ChromeIcon from '~/assets/chrome.svg?inline'
import GmailIcon from '~/assets/gmail.svg?inline'
import SearchIcon from '~/assets/search.svg?inline'
import DriveIcon from '~/assets/drive.svg?inline'
import YoutubeIcon from '~/assets/youtube.svg?inline'
import AppsIcon from '~/assets/apps.svg?inline'

export default {
  components: {
    ChromeIcon,
    GmailIcon,
    SearchIcon,
    DriveIcon,
    YoutubeIcon,
    AppsIcon,
  },
};
</script>

<style lang="sass">
  .chromeos
    &-panel
      width: 100%
      height: 56px
      background-color: #262626
      padding-top: 16px
      padding-bottom: 16px
      display: flex
      align-items: center
      padding-left: 18px
      margin-top: 65px

      *:not(:first-child)
        margin-left: 32px
</style>
