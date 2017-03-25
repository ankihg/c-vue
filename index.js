Vue.component('box', {
  template: '<h1 class="box"><slot></slot></h1>'
})

Vue.component('btn', {
  template: '<button v-on:click="onclick"><h2><slot></slot></h2></button>',
  props: ['onclick'],
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'plz Vue!',
    showConfetti: false,
    showRain: false,
  },
  methods: {
    accept: function() {
      console.log('yay')
      this.showConfetti = true
    },
    decline: function() {
      console.log('nooo')
      this.showRain = true
    },
  }
})
