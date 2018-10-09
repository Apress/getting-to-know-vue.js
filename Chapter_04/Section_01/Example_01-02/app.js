var app = new Vue({
  el: '#app',
  data: {
    bookNameForTemplate: 'Getting to Know Vue.js',
    bookNameForMethod: 'Getting to Know Vue.js',
    bookNameForComputed: 'Getting to Know Vue.js',
    publisher: 'Apress'
  },
  methods: {
    getTitleBlurb: function() {
      console.log('Called: getTitleBlurb');
      return `${this.bookNameForMethod} by ${this.publisher}`;
    }
  },
  computed: {
    titleBlurb: function() {
      console.log('Called: titleBlurb');
      return `${this.bookNameForComputed} by ${this.publisher}`;
    }
  },
  template: `
    <div>
      <h3>Template based:</h3>
          <h4>{{bookNameForTemplate}} by {{publisher}}</h4>

      <h3>Method based:</h3>
          <h4>{{getTitleBlurb()}}</h4>

      <h3>Computed Property based:</h3>
          <h4>{{titleBlurb}}</h4>
        
      <label>Template:
        <input type="text" v-model="bookNameForTemplate" /></label>
      <br>
  
      <label>Method:
      <input type="text" v-model="bookNameForMethod" /></label>
      <br>
  
      <label>Computed:
      <input type="text" v-model="bookNameForComputed" /></label>

    </div>
    `
});
