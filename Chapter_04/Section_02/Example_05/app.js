var app = new Vue({
  el: '#app',
  data: {
    book: {
      title: 'Getting to Know Vue.js',
      publisher: 'Apress',
      year: 2018
    }
  },
  watch: {
    book: {
      handler: function(newBook, oldBook) {
        console.log('Book Changed');
      },
      deep: true
    }
  },
  template: `
    <div>
    <label>Search:
    <input type="text" v-model="book.title" /></label>
    
    <ul>
      <li v-for="(value, prop) in book">
        {{prop}}: {{value}}
      </li>
    </ul>
    </div>
    `
});
