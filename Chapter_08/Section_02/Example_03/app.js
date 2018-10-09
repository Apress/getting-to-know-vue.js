Vue.component('OurSecondHeader', {
  data: function() {
    return {
      text: 'App Header 2'
    };
  },
  template: `
    <h1 v-on:click="text = text.split('').reverse().join('')">{{text}}</h1> 
  `
});

var app = new Vue({
  el: '#app',
  template: `
      <div>
  
        <ourSecondHeader />
        <ourSecondHeader />

      </div>
      `
});
