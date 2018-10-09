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
  computed: {
    appliedCss: function() {
      return {
        active: true,
        error: this.inputError,
        'no-error': this.inputError === false
      };
    }
  },
  template: `
  <div>
    <h4>Using Computed Properties for CSS classes</h4>
    <input type="text" v-model="input" v-bind:class="appliedCss" />
  </div>
  `
});
