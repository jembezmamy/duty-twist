import Ember from "ember";

export default Ember.Component.extend({
  classNames: "schedules-index-view",
  classNameBindings: ["isEmpty"],

  isEmpty: Ember.computed.equal("model.length", 0)
});
