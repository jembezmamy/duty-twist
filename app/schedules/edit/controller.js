import Ember from "ember";
import EmberValidations from "ember-validations";

export default Ember.Controller.extend(EmberValidations, {
  i18n: Ember.inject.service(),

  startsOn:     Ember.computed.alias("model.startsOn"),
  interval:     Ember.computed.alias("model.interval"),
  intervalUnit: Ember.computed.alias("model.intervalUnit"),

  validations: {
    startsOn: {
      presence: true
    },
    interval: {
      numericality: { greaterThan: 0, onlyInteger: true }
    },
    intervalUnit: {
      presence: true
    }
  },

  actions: {
    addPerson() {
      this.get("model.people").createRecord({
        position: this.get("model.people.length") + 1
      });
    },
    addDuty() {
      this.get("model.duties").createRecord({
        position: this.get("model.duties.length") + 1
      });
    },

    submit() {
      var promises = this.get("model.people").filterBy("_destroy").invoke("destroyRecord");
      promises.pushObjects(this.get("model.duties").filterBy("_destroy").invoke("destroyRecord"));
      var model = this.get("model");
      Ember.RSVP.all(promises).then(function() {
        model.save();
      });
    }
  },

  title: Ember.computed("i18n.locale", "model.isNew", {
    get() {
      var key = this.get("model.isNew") ? "schedules.new.title" : "schedules.edit.title";
      return this.get("i18n").t(key);
    }
  }),

  units: Ember.computed("i18n.locale", {
    get() {
      let context = this;
      return ["day", "week", "month"].map(function(value) {
        return Option.create({id: value, context: context});
      })
    }
  })
});

Option = Ember.Object.extend({
  id: null,
  context: null,

  count:  Ember.computed.reads("context.interval"),
  i18n:   Ember.computed.reads("context.i18n"),

  name: Ember.computed("i18n.locale", "id", "count", {
    get() {
      return this.get("i18n").t("units." + this.get("id"), {
        count: this.get("count")
      });
    }
  })
});
