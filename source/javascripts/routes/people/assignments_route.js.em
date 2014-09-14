class DutyTwist.PeopleAssignmentsRoute extends Em.Route
  model: (params) ->
    @modelFor("people").findAssignment(params.round_number)
    
  serialize: (model) ->
    round_number: model.round.number