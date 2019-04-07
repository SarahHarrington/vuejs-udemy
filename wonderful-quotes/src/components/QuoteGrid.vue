<template>
  <div class="row">
    <!-- Just a @click ehre won't work, the click.native needs to be added
    it tells vue.js to listen to the click if it happens a native element 
    of this component -->
    <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)"> {{ quote }} </app-quote>
  </div>
</template>

<script>
  import Quote from './Quote.vue';
  export default {
    props: ['quotes'],
    components: {
      appQuote: Quote
    },
    methods: {
      deleteQuote(index) {
        this.$emit('quoteDeleted', index)
      }
    }
  }
</script>

<style>

</style>
