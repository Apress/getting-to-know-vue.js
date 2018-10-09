let customPlugin = {
  install: function(Vue, options) {
    Vue.prototype.$_customPlugin = {
      title: options.title,
      subtitle: options.subtitle
    };
  }
};

Vue.use(customPlugin, {
  title: 'Getting to Know Vue.js',
  subtitle: 'Now with Options'
});

var app = new Vue({
  el: '#app',
  template: `
      <div>
        <h1>
          {{this.$_customPlugin.title}}
          <small>
            {{this.$_customPlugin.subtitle }}
          </small>
        </h1>
      </div>
      `
});
