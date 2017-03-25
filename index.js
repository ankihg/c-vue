Vue.component('box', {
  template: '<h1>This is a todo</h1>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'plz Vue!'
  }
})
