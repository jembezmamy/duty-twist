class DutyTwist.IndexRoute extends Em.Route
  model: ->
    DutyTwist.Person.find()