<template lang="pug">
  div.row
    app-quote(v-for="(quote, index) in quotes" @click.native="deleteQuote(index)") {{ quote }}
</template>

<script>
import Quote from "./Quote.vue";

export default {
  props: ["quotes"],
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit("quoteDeleted", index);
    }
  }
};
</script>

<style lang="scss" scoped></style>
