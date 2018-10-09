var app = new Vue({
  el: '#app',
  data: {
    items: ['first', 'two', '3']
  },
  template: `
      <ul>
        <li v-for="item in items">
          {{item}}
        </li>
      </ul>
    `
});
