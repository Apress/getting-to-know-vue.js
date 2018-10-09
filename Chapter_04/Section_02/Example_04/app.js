var app = new Vue({
  el: '#app',
  data: {
    searchText: '',
    results: [],
    history: {}
  },
  methods: {
    search: function() {
      axios
        .get(`https://swapi.co/api/starships/?search=${this.searchText}`)
        .then(response => {
          this.results = response.data;
          this.history[this.searchText] = this.results;
        });
    }
  },
  watch: {
    searchText: function(newSearchText, oldSearchText) {
      if (this.history[newSearchText]) {
        this.results = this.history[newSearchText];
      } else {
        this.search();
      }
    }
  },
  template: `
    <div>
    <label>Search:
    <input type="text" v-model="searchText" /></label>

    <h5>Results: <small>{{results.count}}</small></h5>
    
    <ul>
      <li v-for="result in results.results">
        {{result.name}}
      </li>
    </ul>
    </div>
    `
});
