var app = new Vue({
  el: '#app',
  data: {
    fontSize: 0,
    fontSizeObject: { fontSize: '0px' },
    fontColorObject: { color: 'red' }
  },
  watch: {
    fontSize: function() {
      this.fontSizeObject.fontSize = this.fontSize + 'px';
    }
  },
  template: `
  <div>
    <h4>Dynamic Font Size with an object</h4>
    <input type="number" v-model.number="fontSize" />
    <p v-bind:style="[fontSizeObject, fontColorObject]">
        Getting to Know Vue.js
    </p>
  </div>  
  `
});
