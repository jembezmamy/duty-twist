import Ember from "ember";

export default Ember.Component.extend({
  tagName: "tr",

  clock: Ember.inject.service()
})
