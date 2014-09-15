class DutyTwist.Assignment
  person: null
  duty: null
  round: null
  
  isLast: ~>
    @round.assignments.indexOf(this) == @round.assignments.length - 1