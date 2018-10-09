var app = new Vue({
  el: '#app',
  data: {
    book: {
      title: 'Overly Complex Story',
      price: 7.99,
      id: 3,
      genres: ['adult', 'science fiction', 'fiction'],
      action: function() {
        return 'I did an action';
      }
    }
  },
  template: `
      <ul>
        <li v-for="(prop, key, index) in book">
          {{index}}) {{key}}: {{prop}}
          <p v-if="typeof prop == 'function'">{{prop()}}</p>
          <!-- <p v-show="typeof prop == 'function'">{{prop()}}</p> -->
        </li>
      </ul>
    `
});
