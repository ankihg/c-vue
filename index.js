Vue.component('box', {
  template: '<h1><slot></slot></h1>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'plz Vue!'
  }
})
