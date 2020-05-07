import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | styleguide/icons', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:styleguide/icons');
    assert.ok(route);
  });
});
