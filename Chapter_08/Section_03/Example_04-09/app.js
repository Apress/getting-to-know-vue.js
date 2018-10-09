Vue.component('OurThirdHeader', {
  props: ['text'],
  template: `
    <h1>{{text}}</h1>  
  `
});

Vue.component('OurFourthHeader', {
  props: {
    text: String
  },
  template: `
    <h1>{{text}}</h1>  
  `
});

Vue.component('OurFifthHeader', {
  props: {
    text: {
      type: String,
      default: 'App Header 5',
      required: false,
      validator: function(value) {
        return value.toLowerCase().indexOf('app') > -1;
      }
    }
  },
  template: `
    <h1>{{text}}</h1>  
  `
});

var app = new Vue({
  el: '#app',
  data: {
    appLabelBad: 0,
    appLabel: 'App'
  },
  template: `
      <div>
        <OurThirdHeader text="App Header 3" />
        <OurThirdHeader v-bind:text="appLabel" />
        
        
        <OurFourthHeader v-bind:text="appLabelBad"/>

        <OurFifthHeader />
        <OurFifthHeader v-bind:text="appLabel"/>

      
      </div>
      `
});
