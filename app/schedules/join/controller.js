import Ember from "ember";

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),

  token: null,
  isLoading: false,
  errors: null,

  actions: {
    goBack() {
      this.transitionToRoute("schedules.index");
    },

    findByToken() {
      this.set("isLoading", true);
      this.get("store").query("schedule", {
        where: `token = '${this.get("token")}'`
      }).then((schedules) => {
        this.set("isLoading", false);
        if (schedules.get("length") > 0) {
          this.set("token", null);
          this.transitionToRoute("schedules.show", schedules.objectAt(0));
        } else {
          this.set("errors", {
            token: [this.get("i18n").t("schedules.join.notFound")]
          });
        }
      });
    }
  },

  tokenIsMissing: Ember.computed("token", {
    get() {
      return Ember.isBlank(this.get("token"));
    }
  }),

  buttonIsDisabled: Ember.computed.or("tokenIsMissing", "isLoading"),

  clearErrors: Ember.observer("token", function() {
    this.set("errors", null);
  })
});
