Vue.directive('floatRight', {
  inserted: function(el, binding) {
    el.style.float = 'right';
    if (binding.value) {
      el.style.marginRight = `${binding.value}px`;
    }
  }
});

var app = new Vue({
  el: '#app',
  template: `
      <div>
        <h1>Floating Directive</h1>
        <span v-float-right="200">
          Floated Right
        </span>
      </div>
      `
});
