var app = new Vue({
  el: '#app',
  data: {
    yes: true,
    no: false
  },
  template: `
    <div>
        <h1>
            1: <span v-if="yes">Yes</span>
        </h1>
        <h1>
            2: <span v-if="no">No</span>
        </h1>
    </div>
    `
});
