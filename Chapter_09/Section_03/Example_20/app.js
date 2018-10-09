let listElement = {
  props: {
    listItems: Array
  },
  render: function(createElement) {
    return createElement(
      'ul',
      null,
      this.listItems.map(item => createElement('li', item))
    );
  }
};

var app = new Vue({
  el: '#app',
  data: {
    items: [1, 'Two', 'C']
  },
  components: { listElement },
  template: `
      <div>
        <div>
        <listElement v-bind:listItems="items"></listElement>
        </div>
      </div>
      `
});
