Vue.component('OurHeader', {
  template: `
    <h1>App Header</h1>  
  `
});

var app = new Vue({
  el: '#app',
  template: `
      <div>

        <our-header></our-header>

        <OurHeader></OurHeader>

      </div>
      `
});
