<template lang="pug">
  .app
    <chromeos-bar />
    <Nuxt />
    <chromeos-panel />
</template>

<style lang="sass">
  html
    overflow: hidden

  .app
    width: 100vw
    height: 100vh
    background-color: #eee
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    font-family: 'Roboto'
</style>
