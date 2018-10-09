var app = new Vue({
  el: '#app',
  template: `
  <div>
    <input type="text" v-model="input" v-bind:class="{ cssClass : true == true }" />
  </div>
  `
});
