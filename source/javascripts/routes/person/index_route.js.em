class DutyTwist.PersonIndexRoute extends Em.Route
  templateName: "person/assignment"
  controllerName: "personAssignment"
  
  model: (params) ->
    round = DutyTwist.Schedule.get().currentRound
    @modelFor("person").findAssignment(round)