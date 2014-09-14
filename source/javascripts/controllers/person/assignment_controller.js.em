class DutyTwist.PersonAssignmentController extends Em.ObjectController
  
  previousAssignment: ~>
    @model.person.findAssignment @model.round.number - 1
    
  nextAssignment: ~>
    @model.person.findAssignment @model.round.number + 1