var app = new Vue({
  el: '#app',
  data: {
    input: '',
    inputError: null,
    activeClass: 'active',
    errorClass: 'error'
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
    <h4>CSS Classes in an Array</h4>
    <input 
        type="text" 
        v-model="input" 
        v-bind:class="[activeClass, errorClass]" />
    <input 
        type="text" 
        v-model="input" 
        v-bind:class="[{ 'error' : inputError }, activeClass]" />
  </div>
  `
});
