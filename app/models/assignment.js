import Ember from "ember";

export default Ember.Object.extend({
  person: null,
  duty: null,

  schedule: Ember.computed.reads("person.schedule")
});
