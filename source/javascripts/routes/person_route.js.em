class DutyTwist.PersonRoute extends Em.Route
  
  model: (params) ->
    DutyTwist.Person.find().findBy "id", params.person_id
    
  afterModel: (model) ->
    this.transitionTo "person.assignment", model, DutyTwist.Schedule.find().currentRound