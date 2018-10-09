var app = new Vue({
  el: '#app',
  data: {
    yes: true,
    no: false,
    maybe: 0,
    show: 'yes',
    dontShow: 'no',
    yesWord: 'yes'
  },
  template: `
    <div>
        <h1>
            1: <span v-show="yes">Yes</span>
        </h1>
        <h1>
            2: <span v-show="no">No</span>
        </h1>
        <h1>
            3: <span v-show="show == 'yes'">Yes!</span>
        </h1>
        <h1>
            4: <span v-show="dontShow == 'yes'">No :(</span>
        </h1>
        <h1>
            5: <span v-show="show == yesWord">Yes!</span>
        </h1>
        <h1>
            6: <span v-show="0 == 1 - 1">Yes!</span>
        </h1>
        <h1>
            7: <span v-show="0 == 1 + 1">No :(</span>
        </h1>
    </div>
    `
});
