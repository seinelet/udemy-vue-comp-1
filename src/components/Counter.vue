<template>
  <div>
    <button
      class="btn btn-primary"
      style="margin-right: 5px;"
      @click="increment"
    >
      Increment
    </button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.state.counter++;
    },
    decrement() {
      this.$store.state.counter--;
    }
  }
};
</script>
