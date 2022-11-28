<template lang="pug">
span
  span(v-if="!toMark") {{ letter }}
  mark(v-if="toMark") {{ letter }}
</template>

<script>
export default {
  props: {
    letter: {
      type: String,
      required: true
    },
    toMark: {
      type: Boolean,
      required: true
    },
  },
  updated() {
    if (this.letter === 'b') {
      // console.log(this.letter, this.toMark)
    }
  },
}
</script>
