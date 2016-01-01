import { moduleForModel, test } from 'ember-qunit';

moduleForModel('duty', 'Unit | Model | duty', {
  // Specify the other units that are required for this test.
  needs: ['model:schedule']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
