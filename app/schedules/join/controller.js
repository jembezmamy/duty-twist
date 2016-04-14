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
      this.get("store").findRecord("schedule", this.get("token")).then((schedule) => {
        this.set("isLoading", false);
        this.set("token", null);
        this.transitionToRoute("schedules.show", schedule);
      }, () => {
        this.set("errors", {
          token: [this.get("i18n").t("schedules.join.notFound")]
        });
        this.set("isLoading", false);
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
