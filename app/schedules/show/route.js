import Ember from "ember";

export default Ember.Route.extend({
  localStorage: Ember.inject.service(),

  model(params) {
    return this.get("store").query("schedule", {
      where: `token = '${params.schedule_token}'`
    }).then(function(results) {
      return results.get("firstObject");
    });
  },

  serialize(model) {
    return {schedule_token: model.get("token")};
  },

  afterModel(model) {
    let ids = this.get("localStorage.localSheduleIds") || [];
    if (!ids.contains(model.get("id"))) {
      ids.push(model.get("id"));
    }
    this.set("localStorage.localSheduleIds", ids);
    this.set("localStorage.lastScheduleId", model.get("id"));
  }
});
