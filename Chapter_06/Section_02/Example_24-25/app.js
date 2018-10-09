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
  }
});
