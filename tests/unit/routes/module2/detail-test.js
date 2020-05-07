import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | module2/detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:module2/detail');
    assert.ok(route);
  });
});
