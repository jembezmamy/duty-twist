class DutyTwist.PersonRoute extends Em.Route
  
  model: (params) ->
    DutyTwist.Schedule.get().people.findBy "id", params.person_id
    
  afterModel: (model) ->
    this.transitionTo "person.assignment", model, DutyTwist.Schedule.get().currentRound