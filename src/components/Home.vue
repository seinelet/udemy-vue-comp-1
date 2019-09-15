<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <h6>you may Save & load your Data</h6>
    <hr />
    <p>Your funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
