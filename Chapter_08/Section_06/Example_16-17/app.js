var AppHeader = {
  props: {
    text: {
      type: String,
      default: 'App Header'
    }
  },
  template: `
    <h1>{{text}}</h1>  
  `
};

var app = new Vue({
  el: '#app',
  components: {
    AppHeader: AppHeader
  },
  data: {
    appLabel: 'Ship Search'
  },
  template: `
      <div>

        <AppHeader />

      </div>
    `
});
