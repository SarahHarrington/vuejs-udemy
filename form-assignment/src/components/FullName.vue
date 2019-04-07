<template>
  <div>
    <div class="form-group">
      <label for="first-name">First Name</label>
      <input type="text" class="form-control" id="first-name" v-model="userData.firstName">
    </div>
    <div class="form-group">
      <label for="last-name">Last Name</label>
      <input type="text" class="form-control" id="last-name" v-model="userData.lastName">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    methods: {

    },
    computed: {
      firstName() {
        
      }
    }
  };
</script>
