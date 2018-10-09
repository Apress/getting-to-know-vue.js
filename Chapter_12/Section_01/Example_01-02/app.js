const fourOhFour = {
  data: function() {
    return {
      url: window.location.hash
    };
  },
  template: `
  <div>
    <p>Sorry, URL not found : {{url}} </p>
    <p>¯\\_(ツ)_/¯</p>
  </div>
  `
};

const main = {
  template: `
    <p>Welcome to <strong>Getting to Know Vue.js</strong></p>
  `
};
const contactUs = {
  template: `
    <p>Contact Us @ <strong>Getting to Know Vue.js</strong></p>
  `
};

const routes = {
  '#/': main,
  '#/contact-us': contactUs
};

var app = new Vue({
  el: '#app',
  data: {
    currentPath: window.location.hash,
    routes: routes
  },
  methods: {
    navigate: function($event) {
      this.currentPath = $event.target.hash;
    }
  },
  computed: {
    currentView: function() {
      return this.routes[this.currentPath] || fourOhFour;
    }
  },
  template: `
    <div>
      <ul>
        <li>
          <a href="#/" 
            v-on:click="navigate">
              Main
          </a>
        </li>
        <li>
          <a href="#/contact-us" 
            v-on:click="navigate">
              Contact Us
          </a>
        </li>
      </ul>
      <div v-bind:is="currentView">        
      </div>
    </div>
    `
});
