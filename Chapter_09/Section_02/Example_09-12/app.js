Vue.directive('float', {
  inserted: function(el, binding) {
    el.style.float = binding.value.direction;
    if (binding.value.offset) {
      if (binding.value.direction === 'right') {
        el.style.marginRight = `${binding.value.offset}px`;
      } else {
        el.style.marginLeft = `${binding.value.offset}px`;
      }
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    floatLeft: { direction: 'left', offset: 40 }
  },
  template: `
      <div>
        <h1>Floating Directive</h1>
        <span v-float="{direction:'right', offset : 250}">
          First Floated Right
        </span>
        <span v-float="floatLeft">
          Second Floated Left
        </span>
      </div>
      `
});
