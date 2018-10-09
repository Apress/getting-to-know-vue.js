var baseMixin = {
  data: function() {
    return { text: 'default' };
  },
  watch: {
    text: function(newtext, oldtext) {
      this.log(newtext, oldtext);
    }
  },
  created: function() {
    this.log(`My text when Created: ${this.text}`);
  },
  beforeMount: function() {
    this.log(`My text beforeMount: ${this.text}`);
  },
  mounted: function() {
    this.log(`My text when mounted: ${this.text}`);
  },
  beforeUpdate: function() {
    this.log(`My text beforeUpdate: ${this.text}`);
  },
  updated: function() {
    this.log(`My text when updated: ${this.text}`);
  },
  beforeDestroy: function() {
    this.log(`My text beforeDestroy: ${this.text}`);
  },
  destroyed: function() {
    this.log(`My text when destroyed: ${this.text}`);
  },
  methods: {
    log: function(...params) {
      console.log(...params);
    }
  },
  template: `
  <div>
    <h1>{{text}}</h1> 
  </div>
  `
};

var secondBaseMixin = {
  data: function() {
    return { text: 'default from secondBaseMixin' };
  }
};

var componentOne = {
  mixins: [baseMixin]
};

var componentTwo = {
  mixins: [baseMixin, secondBaseMixin]
};

var componentThree = {
  mixins: [baseMixin],
  template: `
    <div>
      <h3>From Component Two: {{text}}</h3>
    </div>
  `
};

var componentFour = {
  mixins: [baseMixin],
  data: function() {
    return {
      text: 'Not from the Mixin',
      textTwo: 'Component Three text'
    };
  },
  methods: {
    click: function($event) {
      this.log($event.target);
    }
  },
  template: `
    <div v-on:click="click">
      <h3>From Component Three: {{text}}</h3>
      <h4>New textTwo: {{textTwo}}</h4>
    </div>
  `
};

var app = new Vue({
  el: '#app',
  components: {
    componentOne,
    componentTwo,
    componentThree
  },
  template: `
      <div>
        <component-two />
      </div>
      `
});
