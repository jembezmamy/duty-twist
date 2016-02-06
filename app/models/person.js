import DS from 'ember-data';

export default DS.Model.extend({
  name:     DS.attr('string'),
  position: DS.attr('number'),

  schedule: DS.belongsTo('schedule', {async: false}),

  _destroy: false
});
