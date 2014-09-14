class DutyTwist.Round
  number: 0
  schedule: null
  
  startTime: ~>
    @schedule.startTime + @number * @schedule.interval
    
  startsOn: ~>
    new Date(@startTime)
    
  assignments: ~>
    n = @number
    @schedule.people.map (person) =>
      DutyTwist.Assignment.create round: this, person: person, duty: person.dutyAt(n)