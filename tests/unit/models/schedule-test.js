import { moduleForModel, test } from 'ember-qunit';

moduleForModel('schedule', 'Unit | Model | schedule', {
  // Specify the other units that are required for this test.
  needs: ['model:person', 'model:duty']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
