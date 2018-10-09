var app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    }
  },
  template: `
    <div>
        <h1 v-on:click="toggle">
            Toggle
        </h1>
        <p v-show="show">
            Hide and show this message by clicking the word "Toggle"
        </p>
    </div>
    `
});
