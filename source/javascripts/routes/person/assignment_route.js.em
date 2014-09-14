class DutyTwist.PersonAssignmentRoute extends Em.Route
  model: (params) ->
    @modelFor("person").findAssignment(params.round_number)
    
  serialize: (model) ->
    round_number: model.round.number