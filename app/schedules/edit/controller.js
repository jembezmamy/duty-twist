import Ember from "ember";
import EmberValidations from "ember-validations";

export default Ember.Controller.extend(EmberValidations, {
  i18n: Ember.inject.service(),

  name:         Ember.computed.alias("model.name"),
  startsOn:     Ember.computed.alias("model.startsOn"),
  interval:     Ember.computed.alias("model.interval"),
  intervalUnit: Ember.computed.alias("model.intervalUnit"),

  validations: {
    name: {
      presence: true
    },
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
      let model = this.get("model");
      let self = this;
      let promises = [];
      if (!model.get("token")) {
        promises.push(this.generateToken().then(function(token) {
          model.set("token", token);
        }));
      }
      promises.pushObjects(this.get("model.people").filterBy("_destroy", true).invoke("destroyRecord"));
      promises.pushObjects(this.get("model.duties").filterBy("_destroy", true).invoke("destroyRecord"));
      Ember.RSVP.all(promises).then(function() {
        model.save().then(function() {
          // clean up after embedded records save
          model.get("people").filterBy("isNew").invoke("destroyRecord");
          model.get("duties").filterBy("isNew").invoke("destroyRecord");
          
          self.transitionToRoute("schedules.show", self.get("model"));
        });
      });
    },

    goBack() {
      if (this.get("model.isNew")) {
        this.transitionToRoute("schedules.index");
      } else {
        this.transitionToRoute("schedules.show", this.get("model"));
      }
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
      });
    }
  }),

  generateToken() {
    let token = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for ( var i=0; i < 4 + Math.floor(Math.random() * 5); i++ ) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    let self = this;
    return this.get("store").query("schedule", {
      where: `token = '${token}'`
    }).then(function(results) {
      if (results.get("length") > 0) {
        return self.generateToken();
      } else {
        return token;
      }
    });
  }
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
