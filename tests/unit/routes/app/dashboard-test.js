import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | app/dashboard', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:app/dashboard');
    assert.ok(route);
  });
});
