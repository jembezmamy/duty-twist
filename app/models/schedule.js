import DS from 'ember-data';

export default DS.Model.extend({
  startsOn: DS.attr('date'),
  roundDuration: DS.attr('number'),
  people: DS.hasMany('person'),
  duties: DS.hasMany('duty')
});
