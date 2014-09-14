class DutyTwist.IndexController extends Em.ArrayController
  
  rounds: ~>
    schedule = DutyTwist.Schedule.find()
    round = schedule.currentRound
    [round-1..round+5].map (number) =>
      schedule.findRound number
      