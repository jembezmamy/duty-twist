class DutyTwist.IndexController extends Em.ArrayController
  
  rounds: ~>
    schedule = DutyTwist.Schedule.get()
    round = schedule.currentRound
    [round-1..round+5].map (number) =>
      schedule.findRound number
      