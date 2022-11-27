<template lang="pug">
  .app
    <chromeos-bar />
    <Nuxt />
</template>

<style lang="sass">
  html
    overflow: hidden
    ::-webkit-scrollbar
      display: none

  .app
    width: 100vw
    height: 100vh
    background-color: #eee
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
</style>
