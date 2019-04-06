<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Add One</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    }
  }, 
  // These are the two lifecycle hooks that can be used
  // For dynamic components to see if you are currently on the component
  // Or if you have navigated away
  deactivated() {
    console.log('Deactivated');
  },
  activated() {
    console.log('activated')
  }
}
</script>

<style scoped>

</style>
