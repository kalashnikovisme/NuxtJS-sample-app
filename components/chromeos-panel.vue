<template lang="pug">
.chromeos-panel
  .apps
    ChromeIcon
    GmailIcon
    SearchIcon
    DriveIcon
    YoutubeIcon
    AppsIcon
  .tray
    span.time
      = (new Date()).toLocaleString('en-US', { hour: 'numeric',  minute: 'numeric', hour12: true })
    WifiIcon
    BatteryIcon
    AvatarIcon
</template>

<script>
import ChromeIcon from '~/assets/chrome.svg?inline'
import GmailIcon from '~/assets/gmail.svg?inline'
import SearchIcon from '~/assets/search.svg?inline'
import DriveIcon from '~/assets/drive.svg?inline'
import YoutubeIcon from '~/assets/youtube.svg?inline'
import AppsIcon from '~/assets/apps.svg?inline'
import WifiIcon from '~/assets/wifi.svg?inline'
import BatteryIcon from '~/assets/battery.svg?inline'
import AvatarIcon from '~/assets/avatar.svg?inline'

export default {
  components: {
    ChromeIcon,
    GmailIcon,
    SearchIcon,
    DriveIcon,
    YoutubeIcon,
    AppsIcon,
    WifiIcon,
    BatteryIcon,
    AvatarIcon,
  },
}
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
    justify-content: space-between
    padding-left: 18px
    padding-right: 18px
    margin-top: 65px

    *:not(:first-child)
      margin-left: 32px

    .apps, .tray
      display: flex
      align-items: center

    span.time
      color: white
</style>
