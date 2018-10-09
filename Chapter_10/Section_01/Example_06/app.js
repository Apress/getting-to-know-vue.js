var logLifecyle = {
  created() {
    console.log(`Created at ${new Date().toLocaleTimeString()}`);
  },
  mounted() {
    console.log(`Mounted at ${new Date().toLocaleTimeString()}`);
  },
  updated() {
    console.log(`Updated at ${new Date().toLocaleTimeString()}`);
  }
};

let customPlugin = {
  install: function(Vue, options) {
    Vue.mixin(logLifecyle);
  }
};

Vue.use(customPlugin);

var app = new Vue({
  el: '#app',
  template: `
      <div>
        <h1>
         Getting to Know Vue.js
        </h1>
      </div>
      `
});
