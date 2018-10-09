var app = new Vue({
  el: '#app',
  data: {
    title: 'Getting to Know Vue.js'
  },
  filters: {
    skipLetters: function(value, place) {
      if (!value) {
        return '';
      }
      let text = value.toString();
      return text
        .split('')
        .filter((letter, index) => {
          return (index + 1) % place !== 0;
        })
        .join('');
    }
  },
  template: `
  <div>

    <h1><small>Original:</small> {{ title }}</h1>

    <h1><small>Skip every Two:</small> {{ title | 
            skipLetters(2) }}</h1>

    <label>Skip every 4:
      <input 
          type="text" 
          v-bind:placeholder="title | 
                              skipLetters(3)" />
    </label>
  </div>
      `
});
