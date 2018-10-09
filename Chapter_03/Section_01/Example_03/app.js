var app = new Vue({
  el: '#app',
  data: {
    no: false
  },
  template: `
    <div>
        <h1 v-if="no">Don't Show</h1>
        <h1 v-else>Show!</h1>
    </div>
    `
});
