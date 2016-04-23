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
    }
  },

  helpers: {
    roundDate: {
      current: "today",
      previous: "previously"
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
      join: "Join schedule",
    },
    join: {
      title: "Join schedule",
      findByToken: "Type in schedule ID",
      notFound: "Schedule with this ID doesn’t exist"
    },
    new: {
      title: "New schedule",
      defaultName: "Our chores"
    },
    show: {
      edit: "Edit",
      share: "Share",
      index: {
        share: {
          title: "Share this schedule",
          url: "By URL",
          id: "By ID"
        }
      },
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
