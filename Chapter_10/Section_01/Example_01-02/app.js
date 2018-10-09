let customPlugin = {
  install: function(Vue, options) {
    Vue.prototype.$_customPlugin = {
      name: 'Getting to Know Vue.js'
    };
  }
};

Vue.use(customPlugin);

var app = new Vue({
  el: '#app',
  template: `
      <div>
        <h1>
          {{this.$_customPlugin.name}}
        </h1>
      </div>
      `
});
