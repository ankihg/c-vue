Vue.component('box', {
  template: '<h1 class="box"><slot></slot></h1>'
})

Vue.component('btn', {
  template: '<button v-on:click="onclick"><h2><slot></slot></h2></button>',
  props: ['onclick'],
})

Vue.component('packingList', {
  template: '<div><p v-for="check in checks"><input type="checkbox" id="cbox1" :value="check.checked"><label for="cbox1">{{check.name}}</label></p></div>',
  data: function() {
    return {
      checks: [
        {name: 'tummy'},

      ]
    }
  },
  props: [],
})


var app = new Vue({
  el: '#app',
  data: {
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
