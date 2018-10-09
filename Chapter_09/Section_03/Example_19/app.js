let dataElement = {
  methods: {
    handleClick: function() {
      console.log('data element clicked');
    }
  },
  render: function(createElement) {
    return createElement('p', {
      class: {
        ourClass: true
      },
      style: {
        color: '#34495E',
        backgroundColor: '#41B883'
      },
      attrs: {
        'data-secret': "shh don't tell"
      },
      domProps: {
        innerText: 'Getting To Know Vue.js'
      },
      on: {
        click: this.handleClick
      }
    });
  }
};

var app = new Vue({
  el: '#app',
  components: { dataElement },
  template: `
      <div>
        <div>
          <dataElement></dataElement>
        </div>
      </div>
      `
});
