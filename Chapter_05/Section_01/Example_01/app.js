var app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  template: `
    <div>
        <h1 v-on:click="show = !show">
            Toggle
        </h1>
        <p v-show="show">
            Hide and show this message by clicking the word "Toggle"
        </p>
    </div>
    `
});
