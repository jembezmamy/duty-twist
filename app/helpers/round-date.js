import moment from "moment";

export default Ember.Helper.extend({
  i18n: Ember.inject.service(),

  compute(params, hash) {
    var date = moment(params[0]);
    var today = moment(params[1]);
    if (hash && Ember.isPresent(hash.relativeRoundNumber)) {
      switch (hash.relativeRoundNumber) {
        case 0:
          return this.get("i18n").t("helpers.roundDate.current");
        case -1:
          return this.get("i18n").t("helpers.roundDate.previous");
      }
    }
    if (Math.abs(date.diff(today, "weeks")) < 2 ) {
      return date.from(today);
    } else {
      return date.format("ll");
    }
  }
});
