import Ember from "ember";

export default Ember.Route.extend({
  localStorage: Ember.inject.service(),

  afterModel(model) {
    let ids = this.get("localStorage.localSheduleIds") || [];
    if (!ids.contains(model.get("id"))) {
      ids.push(model.get("id"));
    }
    this.set("localStorage.localSheduleIds", ids);
  }
});
