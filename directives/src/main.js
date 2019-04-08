import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  // 5methods avaialble as hooks
  // bind - as soon as the directive is bound to the element
  // bind(el, binding, vnode)
  //    the element, the binding, the node in the virtual dom

  // inserted - as soon as the element is in the parent node
  // insert(el, binding, vnode)

  // update - once the component is updated w/out children
  // update(el, binding, vnode, oldeVnode)

  // componentUpdated - once component is updated w/children
  // componentUpdated(el, binding, vnode, oldVnode)

  // unbind - once the directive is removed
  // unbind(el, binding, vnode)

  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';

    // In this ex., the .value grabs the value betweent the quotes
    // el.style.backgroundColor = binding.value;

    //the .arg let's us access the argument passed on the
    // v-highlight:background

    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay)

  }
}); 

new Vue({
  el: '#app',
  render: h => h(App)
})
