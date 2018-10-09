var app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    setShow: function(newValue) {
      this.show = newValue;
    }
  },
  template: `
    <div>
    <h1 v-on:click="setShow(true)">
        Show
    </h1>
    <h1 v-on:click="setShow(false)">
        Hide
    </h1>
        <p v-show="show">
            Hide and show this message by clicking "Hide" or "Show"
        </p>
    </div>
    `
});
