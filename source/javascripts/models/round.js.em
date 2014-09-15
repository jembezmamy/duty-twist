class DutyTwist.Round
  number: 0
  schedule: null
  
  startTime: ~>
    @schedule.startTime + @number * @schedule.interval
    
  startsOn: ~>
    new Date(@startTime)
  
  endsOn: ~>
    new Date(@startTime + @schedule.interval - 24 * 60 * 60 * 1000)
    
  isCurrent: ~>
    @schedule.currentRound == @number
    
  assignments: ~>
    n = @number
    @schedule.people.map (person) =>
      DutyTwist.Assignment.create round: this, person: person, duty: person.dutyAt(n)