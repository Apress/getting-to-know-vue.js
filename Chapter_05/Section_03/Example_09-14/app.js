var app = new Vue({
  el: '#app',
  data: {
    searchText: '',
    results: []
  },
  methods: {
    search: function() {
      axios
        .get(`https://swapi.co/api/starships/?search=${this.searchText}`)
        .then(response => {
          this.results = response.data;
        });
    }
  },
  template: `
      <div>
      <label>Search:
        <input 
            type="text" 
            v-model="searchText" 
            v-on:keyup.enter.esc="search" />
      </label>
  
      <h5>Results: <small>{{results.count}}</small></h5>
      
      <ul>
        <li v-for="result in results.results">
          {{result.name}}
        </li>
      </ul>
      </div>
      `
});
