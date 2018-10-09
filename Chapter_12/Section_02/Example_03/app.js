const FourOhFour = {
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

const Main = {
  template: `
    <p>Welcome to <strong>Getting to Know Vue.js</strong></p>
  `
};
const ContactUs = {
  template: `
    <p>Contact Us @ <strong>Getting to Know Vue.js</strong></p>
  `
};

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUs
  },
  {
    path: '/*',
    name: 'notFound',
    component: FourOhFour
  }
];

let router = new VueRouter(routes);

var app = new Vue({
  el: '#app',
  router,
  template: `
    <div>
      <ul>
        <li>
        <router-link to="/" >
              Main
        </router-link>
        </li>
        <li>
        <router-link to="/contact-us" >
              Contact Us
        </router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
    `
});
