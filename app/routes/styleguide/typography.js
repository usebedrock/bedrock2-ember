import Route from '@ember/routing/route';

export default class StyleguideTypographyRoute extends Route {
  model() {
    return [
      { 
        name: "Heading 1",
        code: '<h1 class="c-h1">A first level heading</h1>'
      },
      {
        name: "Heading 2",
        code: '<h2 class="c-h2">A second level heading</h2>'
      },
      {
        name: "Heading 3",
        code: '<h3 class="c-h3">A third level heading</h2>'
      },
      {
        name: "Heading 4",
        code: '<h4 class="c-h4">A fourth level heading</h2>'
      },
      {
        name: "Body 1",
        code: '<p class="c-body-1">This longer body text where we show a bit more content in a paragraph is set as <strong>body 1</strong>, and it contains <em>italic</em> text.</p>'
      },
      {
        name: "Body 2",
        code: '<p class="c-body-2">This longer body text where we show a bit more content in a paragraph is set as <strong>body 1</strong>, and it contains <em>italic</em> text.</p>'
      },
      {
        name: "Unordered list",
        code: '<ul class="c-ul"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>'
      }
    ]
  }
}
