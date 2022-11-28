<template lang="pug">
span
  highlight-span-letter(
    v-for="(letter, index) in text"
    :letter="letter"
    :key="index"
    :toMark="toMark(index)"
  )
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    query: {
      type: String,
      required: true
    }
  },
  methods: {
    toMark(index) {
      if (this.textToMark) {
        console.log(this.textToMark[0])
        return index >= this.textToMark.index && index <= (this.textToMark.index + this.textToMark[0].length - 1)
      }

      return false
    },
  },
  computed: {
    textToMark() {
      const regex = new RegExp(this.query)

      return regex.exec(this.text)
    },
  },
}
</script>
