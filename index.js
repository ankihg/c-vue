Vue.component('box', {
  template: '<h1 class="box"><slot></slot></h1>'
})

Vue.component('btn', {
  template: '<button><h2><slot></slot></h2></button>>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'plz Vue!'
  }
})
