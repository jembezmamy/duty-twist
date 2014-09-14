Ember.Handlebars.helper "localized-date", (date) ->
  moment(date).format("D MMM")