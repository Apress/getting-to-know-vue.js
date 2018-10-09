var app = new Vue({
  el: '#app',
  data: {
    messages: []
  },
  template: `
    <div>
        <div v-on:click="messages.push('Outer')">
            <h4>Outer</h4>

            <div v-on:click.once.capture="messages.push('Middle')">
                <h4>Middle</h4>

                <div v-on:click.stop="messages.push('Inner One')">
                    <h4>Inner One</h4>        
                </div>

                <div v-on:click="messages.push('Inner B')">
                    <h4>Inner B</h4>        
                </div>
            </div>
        </div>
        <p>
            Last clicked:
            <ol>
                <li v-for="message in messages">
                    {{message}}
                </li>
            </ol>
            </p>
        <input type="button" v-on:click="messages = []" value="Clear" />
    </div>
    `
});
