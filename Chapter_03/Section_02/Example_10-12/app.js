var app = new Vue({
  el: '#app',
  data: {
    items: ['first', 'two', '3'],
    books: [
      {
        title: 'Entertaining Kids Book',
        price: 4.99,
        id: 0,
        genres: ['kids', 'fiction']
      },
      {
        title: 'Teen Drama',
        price: 5.99,
        id: 1,
        genres: ['teen', 'fiction']
      },
      {
        title: 'Boring Facts',
        price: 6.99,
        id: 2,
        genres: ['adult', 'non-fiction']
      },
      {
        title: 'Overly Complex Story',
        price: 7.99,
        id: 3,
        genres: ['adult', 'science fiction', 'fiction']
      },
      {
        title: 'Facts for Teens',
        price: 3.99,
        id: 4,
        genres: ['teen', 'non-fiction']
      }
    ]
  },
  methods: {
    resize: function() {
      // Vue can not detect
      this.books.length = 1;
      // Use splice to resize an array, Vue can detect
      this.books.splice(0);
    },
    set: function() {
      var indexToReplace = 0;
      var newBook = {
        title: 'Newer Entertaining Kids Book',
        price: 4.99,
        id: 0,
        genres: ['kids', 'fiction']
      };
      Vue.set(this.books, indexToReplace, newBook);
    },
    splice: function() {
      var indexToReplace = 0;
      var newBook = {
        title: 'New Entertaining Kids Book',
        price: 4.99,
        id: 0,
        genres: ['kids', 'fiction']
      };
      this.books.splice(indexToReplace, 1, newBook);
    }
  },
  template: `
    <ul>
    <li v-for="book in books" :key="book.id">
      <p><strong>Id:</strong> {{ book.id }}<p>
      <p><strong>Title:</strong> {{ book.title }}</p>
      <p><strong>Genres:</strong> 
        <span v-for="(genre, index) in book.genres">
        {{genre}}<span v-if="index < book.genres.length -1">, </span>
        </span>
      </p>
    </li>
    </ul>
    `
});
