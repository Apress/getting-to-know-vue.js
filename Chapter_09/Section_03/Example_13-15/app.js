let templateSample = {
  props: {
    content: String,
    element: String,
    background: String
  },
  template: `
  <span>
    <h1 v-if="element == 'h1'" 
        v-bind:style="{backgroundColor: background}">
          {{this.content}}
    </h1>
    <h2 v-else-if="element == 'h2'" 
        v-bind:style="{backgroundColor: background}">
          {{this.content}}
    </h2>
    <p v-else-if="element == 'p'" 
       v-bind:style="{backgroundColor: background}">
        {{this.content}}
    </p>
  </span>
  `
};

let renderSample = {
  render: function(createElement) {
    return createElement(
      this.element,
      { style: { backgroundColor: this.background } },
      this.content
    );
  },
  props: {
    content: String,
    element: String,
    background: String
  }
};

var app = new Vue({
  el: '#app',
  components: { renderSample, templateSample },
  template: `
      <div>
        <h1>Template Render</h1>
        <div>
        <templateSample 
            content="Render Me!" 
            element="h2" 
            background="red"
        />
        <templateSample 
            content="Render Me Too!" 
            element="h1" 
            background="lightblue"
        />
        <templateSample 
            content="Hide Me!" 
            element="p" 
            background="black"
        />
        </div>

        <h1>Sample Render</h1>
        <div>
        <renderSample 
            content="Render Me!" 
            element="h2" 
            background="red"
        />
        <renderSample 
            content="Render Me Too!" 
            element="h1" 
            background="lightblue"
        />
        <renderSample 
            content="Hide Me!" 
            element="p" 
            background="black"
        />
        </div>
      </div>
      `
});
