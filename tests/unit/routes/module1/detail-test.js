import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | module1/detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:module1/detail');
    assert.ok(route);
  });
});
