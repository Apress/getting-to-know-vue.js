let tagElement = {
  render: function(createElement) {
    return createElement('p', this.$slots.default);
  }
};

let optionsElement = {
  props: {
    content: String
  },
  render: function(createElement) {
    let data = { contentToRender: this.content };
    return createElement({
      data: function() {
        return data;
      },
      template: '<p>{{contentToRender}}</p>'
    });
  }
};

var app = new Vue({
  el: '#app',
  components: { tagElement, optionsElement },
  template: `
      <div>
        <h1>Template Render</h1>
        <div>
        <tagElement>Paragraph 1</tagElement>
        <optionsElement content="Paragraph 2"></optionsElement>
        </div>
      </div>
      `
});
