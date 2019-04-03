import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

//Globally registered component
Vue.component('app-servers', Home);

new Vue({
  el: '#app',
  //this function will automatically render a compiled template
  //we pass in the app from the import of the app.vue file
  //places the rendered code in the selected element
  render: h => h(App)
})
