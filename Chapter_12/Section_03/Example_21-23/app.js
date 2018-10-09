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

var app = new Vue({
  el: '#app',
  data: {
    currentView: { template: '<p>Please Wait...</p>' }
  },
  template: `
    <div>
      <ul>
        <li>
          <a href="/" >
              Main
          </a>
        </li>
        <li>
          <a href="/contact-us" >
              Contact Us
          </a>
        </li>
      </ul>
      <div v-bind:is="currentView">        
      </div>
    </div>
    `
});

page('/', function() {
  app.currentView = main;
});
page('/contact-us', function() {
  app.currentView = contactUs;
});
page('*', function() {
  app.currentView = fourOhFour;
});
page();
