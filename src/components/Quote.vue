<template lang="pug">
  div.col-sm-6.col-md-4.col-lg-3
    div.panel.panel-default
      div.panel-body.quote
        slot
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.panel-body {
  font-family: "Arizonia", cursive;
  font-size: 24px;
  color: #6e6e6e;
}
.quote {
  cursor: pointer;
  &:hover {
    background-color: #ffe2e2;
  }
}
</style>
