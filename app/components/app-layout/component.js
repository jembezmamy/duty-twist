import Ember from "ember";

export default Ember.Component.extend({
  classNames: "app-layout",

  actions: {
    goBack() {
      this.sendAction("goBack");
    },

    registerAction(action) {
      let actions = this.get("menuActions");
      actions.rejectBy("action", action.get("action"));
      actions.pushObject(action);
    }
  },

  menuActions: Ember.computed({get() { return Ember.A(); }})
});
