var app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    setShow: function(newValue, event) {
      if (event) {
        console.log(event.type);
      }
      this.show = newValue;
    }
  },
  template: `
    <div>
    <h1 v-on:click="setShow(true, $event)">
        Show
    </h1>
    <h1 v-on:click="setShow(false, $event)">
        Hide
    </h1>
        <p v-show="show">
            Hide and show this message by clicking "Hide" or "Show"
        </p>
    </div>
    `
});
