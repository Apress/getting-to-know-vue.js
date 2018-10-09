var app = new Vue({
  el: '#app',
  data: {
    input: '',
    inputError: null
  },
  watch: {
    input: function() {
      var results = parseInt(this.input);
      if (isNaN(results)) {
        this.inputError = true;
      } else {
        this.inputError = false;
      }
    }
  },
  template: `
  <div>
    <h4>Please Enter an Integer</h4>
    <input type="text" v-model="input" v-bind:class="{ error : inputError }" />
  </div>
  `
});
