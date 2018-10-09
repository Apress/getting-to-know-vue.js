Vue.filter('reverse', function(value) {
  if (!value) {
    return '';
  }
  let text = value.toString();
  return text
    .split('')
    .reverse()
    .join('');
});

var app = new Vue({
  el: '#app',
  data: {
    title: 'Getting to Know Vue.js'
  },
  filters: {
    lowercase: function(value) {
      if (!value) {
        return '';
      }
      let text = value.toString();
      return text.toLowerCase();
    }
  },
  template: `
  <div>
    <h1>{{ title | 
            lowercase | 
            reverse }}</h1>

    <input 
        type="text" 
        v-bind:placeholder="title | 
                            lowercase | 
                            reverse" />
  </div>
      `
});
