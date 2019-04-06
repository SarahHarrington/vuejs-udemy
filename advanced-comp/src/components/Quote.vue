<template>
  <div>
    <!-- The slot element is a special keyword in Vue
    that allows will render the stuff   -->
    <div>
    <slot name="title"></slot>
    </div>
    <!-- If a slot has a name but doesn't have anything passed from the parent
    component, it will display whatever is in the child
    Vue will replace it if something else is available -->
    <span name="subtitle">The subtitle</span>
    <div>
      <!-- The child component (this one) will have it's scoped css style tag applied
      it can also be applied from the parent -->
    <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  div {
    border: solid 1px #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: auto;
  }
  /* h2 {
    color: red;
  } */
</style>
