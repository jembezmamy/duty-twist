export default {
  app: {
    title: "DutyTwist",
    slogan: "Schedule your chores"
  },

  components: {
    scheduleForm: {
      duty: {
        remove: "Remove task"
      },
      person: {
        remove: "Remove person"
      }
    },
    scheduleTable: {
      round: {
        current: "Today",
        previous: "Previously"
      }
    }
  },

  duty: {
    attributes: {
      name: "Name"
    }
  },

  person: {
    attributes: {
      name: "Name"
    }
  },

  schedule: {
    attributes: {
      startsOn: "First day",
      interval: "Round duration"
    }
  },
  schedules: {
    edit: {
      title: "Schedule settings",
      people: "People",
      addPerson: "Add person",
      duties: "Tasks",
      addDuty: "Add task"
    },
    index: {
      createNew: "Create schedule",
      join: "Join schedule"
    },
    new: {
      title: "New schedule"
    },
    show: {
      edit: "Edit",
      person: {
        back: "Back",
        assignment: {
          previous: "Previous",
          next: "Next"
        }
      }
    }
  },

  units: {
    day: {
      one: "day",
      other: "days"
    },
    month: {
      one: "month",
      other: "months"
    },
    week: {
      one: "week",
      other: "weeks"
    }
  }
};
