var app = new Vue({
  el: '#app',
  data: {
    fileName: ''
  },
  methods: {
    fileChanged: function(event) {
      this.fileName = event.target.files[0].name;
    }
  },
  template: `
  <div>
    <h4>File</h4>
    <!-- <input type="file" v-model="inputs.file" /> -->
    <input type="file" v-on:change="fileChanged($event)" />
    <p>
        <strong>File:</strong> {{fileName}}
    </p>   
  </div>
  `
});
