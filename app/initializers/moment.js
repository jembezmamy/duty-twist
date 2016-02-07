import moment from "moment";
import momentEn from "duty-twist/locales/en/moment";

export function initialize(application) {
  moment.locale("en", momentEn);
};

export default {
  name: 'moment',
  initialize: initialize
};
