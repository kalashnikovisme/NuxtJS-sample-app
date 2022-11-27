<template lang="pug">
  v-card
   .d-flex.flex-no-wrap.justify-space-between
      v-avatar.ma-3(
        size="125"
        tile
      )
        v-img(
          src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
        )
      .div
        v-card-title.text-h5(
          v-text="`Supermodel`"
        )

        v-card-subtitle(
          v-text="`Foster the People`"
        )
 </template>
