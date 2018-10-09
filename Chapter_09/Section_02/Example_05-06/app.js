Vue.directive('floatRight', {
  inserted: function(el) {
    el.style.float = 'right';
    el.style.marginRight = '20px';
  }
});

var app = new Vue({
  el: '#app',
  template: `
      <div>
        <h1>Floating Directive</h1>
        <span v-float-right>
          Floated Right
        </span>
        <span v-floatRight>
          Floated Right too
        </span>        
      </div>
      `
});
