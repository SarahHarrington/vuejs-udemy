<template>
<!-- You need to wrap your template in one root element -->
  <div>
  <p>Server Status: {{ status }}</p>
  <hr>
  <button @click="changeStatus">Change Status</button>
  </div>
</template>
<script>
  export default {
    data: function() {
      return {
        status: 'Critical'
      }
    },
  methods: {
    changeStatus() {
      this.status = 'Normal'
    }
  }
  }
</script>