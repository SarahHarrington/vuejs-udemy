import Vue from 'vue'
import App from './App.vue'

//the event bus needs to be executed before the vue instance
export const eventBus = new Vue({
  //You can also add data
  //these methods are now available all over the application
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

//this is a new vue object, the methods already exist
//that are needed with this 
