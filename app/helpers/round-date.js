import moment from "moment";

export function roundDate(params) {
  var date = moment(params[0]);
  var today = moment(params[1]);
  if (Math.abs(date.diff(today, "weeks")) < 2 ) {
    return date.from(today);
  } else {
    return date.format("ll");
  }
}

export default Ember.Helper.helper(roundDate);
