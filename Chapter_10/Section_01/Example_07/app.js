var sampleComponent = {
  template: `
        <h1>
         Getting to Know Vue.js
        </h1>
      `
};

let customPlugin = {
  install: function(Vue, options) {
    Vue.component('sampleComponent', sampleComponent);
  }
};

Vue.use(customPlugin);

var app = new Vue({
  el: '#app',
  template: `
      <div>
        <sampleComponent />
      </div>
      `
});
