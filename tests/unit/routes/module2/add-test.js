import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | module2/add', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:module2/add');
    assert.ok(route);
  });
});
