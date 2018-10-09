var app = new Vue({
  el: '#app',
  data: {
    yes: true,
    no: false
  },
  template: `
    <div>
      <div>
        <h1>Show v-else-if</h1>
        <h2 v-if="no">If</h2>
        <h2 v-else-if="yes">Else If</h2>
        <h2 v-else>Else</h2>
      </div>
      <div>
        <h1>Show v-else</h1>
        <h2 v-if="no">If</h2>
        <h2 v-else-if="no">Else If</h2>
        <h2 v-else>Else</h2>
      </div>
    </div>
    `
});
