<template>
  <div>
    <button
      class="btn btn-primary"
      style="margin-right: 5px;"
      @click="asyncIncrement({ by: 100, duration: 500 })"
    >
      Increment
    </button>
    <button
      class="btn btn-primary"
      @click="asyncDecrement({ by: 50, duration: 500 })"
    >
      Decrement
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["asyncIncrement", "asyncDecrement"])
  }
};
</script>
