/*
  Camp Jeevan 2026 schedule

  EDITING WORKSHOPS
  -----------------
  Monday through Friday workshop assignments are stored in
  workshopScheduleByDate.

  Each date contains Groups A, B, C, and D. Each group should have two
  assignment objects: Workshop 1 and Workshop 2.

  Saturday does not display the workshop section.
*/

const weekdaySchedule = [
  {
    time: "12:30 PM",
    value: "12:30",
    title: "Begin Camp",
    detail: "Daily camp program begins.",
    kind: "logistics",
    tag: "Camp"
  },
  {
    time: "12:45 PM",
    value: "12:45",
    title: "Lecture 1 & Q/A",
    detail: "Lecture followed by questions and answers.",
    kind: "session",
    tag: "Lecture"
  },
  {
    time: "2:00 PM",
    value: "14:00",
    title: "Break",
    detail: "Short break between sessions.",
    kind: "break",
    tag: "Break"
  },
  {
    time: "2:10 PM",
    value: "14:10",
    title: "Lecture 2 & Q/A",
    detail: "Second lecture followed by questions and answers.",
    kind: "session",
    tag: "Lecture"
  },
  {
    time: "3:10 PM",
    value: "15:10",
    title: "Break / Snack",
    detail: "Snack and refreshment break.",
    kind: "break",
    tag: "Break"
  },
  {
    time: "3:45 PM",
    value: "15:45",
    title: "Workshop 1",
    detail: "Participants divide into four groups.",
    kind: "workshop",
    tag: "Workshop"
  },
  {
    time: "5:00 PM",
    value: "17:00",
    title: "Workshop 2",
    detail: "Participants continue in four groups.",
    kind: "workshop",
    tag: "Workshop"
  },
  {
    time: "6:10 PM",
    value: "18:10",
    title: "Break / Freshen Up",
    detail: "Time to reset before the evening program.",
    kind: "break",
    tag: "Break"
  },
  {
    time: "6:30 PM",
    value: "18:30",
    title: "Simran / Rehras Sahib",
    detail: "Evening spiritual program.",
    kind: "spiritual",
    tag: "Program"
  },
  {
    time: "7:15 PM",
    value: "19:15",
    title: "Langar",
    detail: "Evening meal.",
    kind: "meal",
    tag: "Meal"
  },
  {
    time: "8:00 PM",
    value: "20:00",
    title: "Open Q/A Session",
    detail: "Open questions and answers for all participants.",
    kind: "session",
    tag: "Q/A"
  },
  {
    time: "9:00 PM",
    value: "21:00",
    title: "Go Home",
    detail: "Daily camp program concludes.",
    kind: "logistics",
    tag: "Dismissal"
  }
];

const saturdaySchedule = [
  {
    time: "5:00 AM",
    value: "05:00",
    title: "Simran Meditation Session",
    detail: "Early morning meditation session.",
    kind: "spiritual",
    tag: "Simran"
  },
  {
    time: "6:00 AM",
    value: "06:00",
    title: "Nitnem",
    detail: "Morning Nitnem program.",
    kind: "spiritual",
    tag: "Program"
  },
  {
    time: "7:00 AM",
    value: "07:00",
    title: "Nishaan Sahib Salami",
    detail: "Nishaan Sahib Salami.",
    kind: "spiritual",
    tag: "Program"
  },
  {
    time: "7:30 AM",
    value: "07:30",
    title: "Breakfast",
    detail: "Breakfast for camp participants.",
    kind: "meal",
    tag: "Meal"
  },
  {
    time: "9:00 AM",
    value: "09:00",
    title: "Sehej Paath Bhog",
    detail: "Sehej Paath Bhog program.",
    kind: "spiritual",
    tag: "Program"
  },
  {
    time: "10:00 AM",
    value: "10:00",
    title: "Break",
    detail: "Short morning break.",
    kind: "break",
    tag: "Break"
  },
  {
    time: "10:15 AM",
    value: "10:15",
    title: "Kirtan by Singhs and Kaurs",
    detail: "Kirtan presentation.",
    kind: "spiritual",
    tag: "Kirtan"
  },
  {
    time: "11:00 AM",
    value: "11:00",
    title: "Concluding Statements",
    detail: "Closing remarks from camp organizers.",
    kind: "session",
    tag: "Closing"
  },
  {
    time: "11:45 AM",
    value: "11:45",
    title: "Final Announcements",
    detail: "Final camp announcements and instructions.",
    kind: "logistics",
    tag: "Notice"
  },
  {
    time: "12:00 PM",
    value: "12:00",
    title: "Ardaas & Hukamnama",
    detail: "Final Ardaas and Hukamnama.",
    kind: "spiritual",
    tag: "Program"
  },
  {
    time: "12:15 PM",
    value: "12:15",
    title: "Langar",
    detail: "Final Langar, followed by Camp Samapati.",
    kind: "meal",
    tag: "Meal"
  }
];

/*
  Group names, ages, and display colors.

  Change an age here if a group's age range changes.
*/
const groups = [
  {
    id: "A",
    name: "Group A",
    age: "10-11 years",
    color: "#e5ad22"
  },
  {
    id: "B",
    name: "Group B",
    age: "11-12 years",
    color: "#2f82c8"
  },
  {
    id: "C",
    name: "Group C",
    age: "13-14 years",
    color: "#9a65ca"
  },
  {
    id: "D",
    name: "Group D",
    age: "15+ years",
    color: "#ef7d2f"
  }
];

/*
  WORKSHOP SCHEDULES

  Monday is filled in with the schedule already provided.

  Tuesday through Friday are currently empty. To enter a schedule, copy the
  two objects from one of Monday's groups and replace the activity, location,
  and leader.

  Keep both dates and group letters exactly as shown.
*/
const workshopScheduleByDate = {
  // Monday, July 20
  "2026-07-20": {
    A: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "Self Defense",
        location: "Big Hall",
        leader: "Bhai Gagandeep Singh"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "Sangeet",
        location: "Darbar Sahib",
        leader: "Bibi Rasleen Kaur"
      }
    ],

    B: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "Sangeet",
        location: "Darbar Sahib",
        leader: "Bibi Rasleen Kaur"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "Self Defense",
        location: "Big Hall",
        leader: "Bhai Gagandeep Singh"
      }
    ],

    C: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "Sikhar",
        location: "Long Hall",
        leader: "Bibi Gurpreet Kaur"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "Archery / Horseback Riding",
        location: "Front Lawn / Grass",
        leader: "Bhai Amritpal Singh"
      }
    ],

    D: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "Archery / Horseback Riding",
        location: "Front Lawn / Grass",
        leader: "Bhai Amritpal Singh"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "Sikhar",
        location: "Long Hall",
        leader: "Bibi Gurpreet Kaur"
      }
    ]
  },

  // Tuesday, July 21 — add the two assignments for each group.
  "2026-07-21": {
    C: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "Self Defense",
        location: "Big Hall",
        leader: "Bhai Gagandeep Singh"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "Sangeet",
        location: "Darbar Sahib",
        leader: "Bibi Rasleen Kaur"
      }
    ],

    D: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "Sangeet",
        location: "Darbar Sahib",
        leader: "Bibi Rasleen Kaur"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "Self Defense",
        location: "Big Hall",
        leader: "Bhai Gagandeep Singh"
      }
    ],

    A: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "Sikhar",
        location: "Long Hall",
        leader: "Bibi Gurpreet Kaur"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "Archery / Horseback Riding",
        location: "Front Lawn / Grass",
        leader: "Bhai Amritpal Singh"
      }
    ],

    B: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "Archery / Horseback Riding",
        location: "Front Lawn / Grass",
        leader: "Bhai Amritpal Singh"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "Sikhar",
        location: "Long Hall",
        leader: "Bibi Gurpreet Kaur"
      }
    ]
  },

  // Wednesday, July 22 — add the two assignments for each group.
  "2026-07-22": {
    A: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "Self Defense",
        location: "Big Hall",
        leader: "Bhai Gagandeep Singh"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "ਸਫਰ e ਸਿਖਰ",
        location: "Punjabi School",
        leader: "Bibi Prabhveer Kaur/Bibi Mangal Kaur"
      }
    ],

    B: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "ਸਫਰ e ਸਿਖਰ",
        location: "Punjabi School",
        leader: "Bibi Prabhveer Kaur/Bibi Mangal Kaur"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "Self Defense",
        location: "Big Hall",
        leader: "Bhai Gagandeep Singh"
      }
    ],

    C: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "Sikhar",
        location: "Long Hall",
        leader: "Bibi Gurpreet Kaur"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "Archery / Horseback Riding",
        location: "Front Lawn / Grass",
        leader: "Bhai Amritpal Singh"
      }
    ],

    D: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "Archery / Horseback Riding",
        location: "Front Lawn / Grass",
        leader: "Bhai Amritpal Singh"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "Sikhar",
        location: "Long Hall",
        leader: "Bibi Gurpreet Kaur"
      }
    ]
  },

  // Thursday, July 23 — add the two assignments for each group.
  "2026-07-23": {
    C: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "Self Defense",
        location: "Big Hall",
        leader: "Bhai Gagandeep Singh"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "ਸਫਰ e ਸਿਖਰ",
        location: "Punjabi School",
        leader: "Bibi Prabhveer Kaur/Bibi Mangal Kaur"
      }
    ],

    D: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "ਸਫਰ e ਸਿਖਰ",
        location: "Punjabi School",
        leader: "Bibi Prabhveer Kaur/Bibi Mangal Kaur"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "Self Defense",
        location: "Big Hall",
        leader: "Bhai Gagandeep Singh"
      }
    ],

    A: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "Sikhar",
        location: "Long Hall",
        leader: "Bibi Gurpreet Kaur"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "Archery / Horseback Riding",
        location: "Front Lawn / Grass",
        leader: "Bhai Amritpal Singh"
      }
    ],

    B: [
      {
        slot: "Workshop 1",
        time: "3:45 PM",
        activity: "Archery / Horseback Riding",
        location: "Front Lawn / Grass",
        leader: "Bhai Amritpal Singh"
      },
      {
        slot: "Workshop 2",
        time: "5:00 PM",
        activity: "Sikhar",
        location: "Long Hall",
        leader: "Bibi Gurpreet Kaur"
      }
    ]
  }
};

const days = [
  {
    date: "2026-07-20",
    short: "Mon",
    day: "Monday",
    number: "20",
    schedule: weekdaySchedule
  },
  {
    date: "2026-07-21",
    short: "Tue",
    day: "Tuesday",
    number: "21",
    schedule: weekdaySchedule
  },
  {
    date: "2026-07-22",
    short: "Wed",
    day: "Wednesday",
    number: "22",
    schedule: weekdaySchedule
  },
  {
    date: "2026-07-23",
    short: "Thu",
    day: "Thursday",
    number: "23",
    schedule: weekdaySchedule
  },
  {
    date: "2026-07-24",
    short: "Fri",
    day: "Friday",
    number: "24",
    schedule: weekdaySchedule
  },
  {
    date: "2026-07-25",
    short: "Sat",
    day: "Saturday",
    number: "25",
    schedule: saturdaySchedule
  }
];

const dayPicker = document.querySelector("#dayPicker");
const timeline = document.querySelector("#timeline");
const selectedDayHeading = document.querySelector("#selectedDayHeading");
const selectedDayType = document.querySelector("#selectedDayType");
const selectedDayDescription = document.querySelector("#selectedDayDescription");
const startTime = document.querySelector("#startTime");
const endTime = document.querySelector("#endTime");
const activityCount = document.querySelector("#activityCount");
const timelineTitle = document.querySelector("#timelineTitle");
const scheduleRange = document.querySelector("#scheduleRange");
const liveStatus = document.querySelector("#liveStatus");
const closingCard = document.querySelector("#closingCard");

const workshopSection = document.querySelector("#workshop-groups");
const groupPicker = document.querySelector("#groupPicker");
const groupDetail = document.querySelector("#groupDetail");
const groupName = document.querySelector("#groupName");
const groupAge = document.querySelector("#groupAge");
const assignmentGrid = document.querySelector("#assignmentGrid");

let selectedIndex = getInitialDayIndex();
let selectedGroupIndex = 0;

function getInitialDayIndex() {
  const today = new Date();

  const localDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  const exactIndex = days.findIndex((day) => day.date === localDate);

  return exactIndex >= 0 ? exactIndex : 0;
}

function createDayButtons() {
  days.forEach((day, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "day-button";
    button.id = `day-tab-${index}`;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-controls", "timeline");

    button.innerHTML = `
      <span class="day-button__name">${day.short}</span>
      <span class="day-button__date">${day.number}</span>
    `;

    button.addEventListener("click", () => selectDay(index, true));

    dayPicker.append(button);
  });
}

function selectDay(index, scrollIntoView = false) {
  selectedIndex = index;

  const selectedDay = days[index];

  [...dayPicker.children].forEach((button, buttonIndex) => {
    const isSelected = buttonIndex === index;

    button.setAttribute("aria-selected", String(isSelected));
    button.tabIndex = isSelected ? 0 : -1;
  });

  selectedDayType.textContent =
    selectedDay.day === "Saturday"
      ? "Final day schedule"
      : "Monday–Friday schedule";

  selectedDayHeading.textContent =
    `${selectedDay.day}, July ${selectedDay.number}`;

  selectedDayDescription.textContent =
    selectedDay.day === "Saturday"
      ? "The final day begins early and concludes after Langar."
      : "Monday through Friday follow the same afternoon and evening schedule.";

  startTime.textContent = selectedDay.schedule[0].time;

  endTime.textContent =
    selectedDay.schedule[selectedDay.schedule.length - 1].time;

  activityCount.textContent = selectedDay.schedule.length;

  timelineTitle.textContent =
    `${selectedDay.day}’s activities`;

  scheduleRange.textContent =
    `${selectedDay.schedule[0].time}–` +
    `${selectedDay.schedule[selectedDay.schedule.length - 1].time}`;

  closingCard.hidden = selectedDay.day !== "Saturday";

  renderTimeline(selectedDay);
  updateWorkshopSection(selectedDay);

  if (
    scrollIntoView &&
    window.matchMedia("(max-width: 699px)").matches
  ) {
    document
      .querySelector("#schedule")
      .scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
  }
}

function renderTimeline(day) {
  timeline.replaceChildren();

  const now = new Date();
  const isSelectedDateToday =
    formatLocalDate(now) === day.date;

  day.schedule.forEach((event, index) => {
    const item = document.createElement("li");

    item.className = "event";
    item.dataset.kind = event.kind;

    if (isSelectedDateToday) {
      const state = getEventState(day, index, now);

      if (state === "current") {
        item.classList.add("is-current");
      }

      if (state === "past") {
        item.classList.add("is-past");
      }
    }

    const hasWorkshopSchedule =
      Boolean(workshopScheduleByDate[day.date]);

    const workshopLink =
      hasWorkshopSchedule && event.kind === "workshop"
        ? '<a class="event__link" href="#workshop-groups">' +
          "View group assignment</a>"
        : "";

    item.innerHTML = `
      <time
        class="event__time"
        datetime="${day.date}T${event.value}"
      >
        ${event.time}
      </time>

      <span
        class="event__marker"
        aria-hidden="true"
      ></span>

      <article class="event__card">
        <div class="event__topline">
          <h3>${event.title}</h3>
          <span class="event__tag">${event.tag}</span>
        </div>

        <p class="event__detail">${event.detail}</p>
        ${workshopLink}
      </article>
    `;

    timeline.append(item);
  });

  updateLiveStatus(day, now);
}

function createGroupButtons() {
  groups.forEach((group, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "group-button";
    button.setAttribute("role", "tab");
    button.style.setProperty("--group-color", group.color);

    button.innerHTML = `
      <span class="group-button__name">Group ${group.id}</span>
      <span class="group-button__age">${group.age}</span>
    `;

    button.addEventListener("click", () => selectGroup(index));

    groupPicker.append(button);
  });
}

function selectGroup(index) {
  selectedGroupIndex = index;

  const group = groups[index];
  const selectedDay = days[selectedIndex];

  const assignments =
    workshopScheduleByDate[selectedDay.date]?.[group.id] ?? [];

  [...groupPicker.children].forEach((button, buttonIndex) => {
    const isSelected = buttonIndex === index;

    button.setAttribute("aria-selected", String(isSelected));
    button.tabIndex = isSelected ? 0 : -1;
  });

  groupDetail.style.setProperty(
    "--selected-group-color",
    group.color
  );

  groupName.textContent = group.name;
  groupAge.textContent = group.age;

  assignmentGrid.replaceChildren();

  if (assignments.length === 0) {
    renderEmptyWorkshopSchedule(selectedDay, group);
    return;
  }

  assignments.forEach((assignment, assignmentIndex) => {
    const card = document.createElement("section");

    card.className = "assignment-card";

    card.innerHTML = `
      <div class="assignment-card__top">
        <div>
          <p class="assignment-card__slot">
            ${assignment.slot}
          </p>

          <p class="assignment-card__time">
            ${assignment.time}
          </p>
        </div>

        <span
          class="assignment-card__number"
          aria-hidden="true"
        >
          ${assignmentIndex + 1}
        </span>
      </div>

      <h4>${assignment.activity}</h4>

      <dl class="assignment-meta">
        <div>
          <dt>Location</dt>
          <dd>${assignment.location}</dd>
        </div>

        <div>
          <dt>Leader</dt>
          <dd>${assignment.leader}</dd>
        </div>
      </dl>
    `;

    assignmentGrid.append(card);
  });
}

function renderEmptyWorkshopSchedule(day, group) {
  const card = document.createElement("section");

  card.className = "assignment-card";

  card.innerHTML = `
    <div class="assignment-card__top">
      <div>
        <p class="assignment-card__slot">
          Workshop schedule
        </p>

        <p class="assignment-card__time">
          ${day.day}, July ${day.number}
        </p>
      </div>

      <span
        class="assignment-card__number"
        aria-hidden="true"
      >
        ${group.id}
      </span>
    </div>

    <h4>Schedule not entered yet</h4>

    <p class="event__detail">
      Add this group’s two assignments in
      <strong>workshopScheduleByDate</strong> inside app.js.
    </p>
  `;

  assignmentGrid.append(card);
}

function updateWorkshopSection(day) {
  const hasWorkshopSchedule =
    Boolean(workshopScheduleByDate[day.date]);

  workshopSection.hidden = !hasWorkshopSchedule;

  if (!hasWorkshopSchedule) {
    return;
  }

  const sectionKicker =
    workshopSection.querySelector(".section-kicker");

  const dateBadge =
    workshopSection.querySelector(".group-section__badge");

  if (sectionKicker) {
    sectionKicker.textContent =
      `${day.day} · Group assignments`;
  }

  if (dateBadge) {
    dateBadge.textContent =
      `July ${day.number}`;
  }

  selectGroup(selectedGroupIndex);
}

groupPicker.addEventListener("keydown", (event) => {
  const supportedKeys = [
    "ArrowLeft",
    "ArrowRight",
    "Home",
    "End"
  ];

  if (!supportedKeys.includes(event.key)) {
    return;
  }

  event.preventDefault();

  if (event.key === "Home") {
    selectedGroupIndex = 0;
  }

  if (event.key === "End") {
    selectedGroupIndex = groups.length - 1;
  }

  if (event.key === "ArrowLeft") {
    selectedGroupIndex =
      (selectedGroupIndex - 1 + groups.length) %
      groups.length;
  }

  if (event.key === "ArrowRight") {
    selectedGroupIndex =
      (selectedGroupIndex + 1) %
      groups.length;
  }

  selectGroup(selectedGroupIndex);
  groupPicker.children[selectedGroupIndex].focus();
});

function getEventState(day, index, now) {
  const start =
    dateTimeFor(day.date, day.schedule[index].value);

  const next =
    day.schedule[index + 1]
      ? dateTimeFor(
          day.date,
          day.schedule[index + 1].value
        )
      : new Date(
          start.getTime() + 45 * 60 * 1000
        );

  if (now >= start && now < next) {
    return "current";
  }

  if (now >= next) {
    return "past";
  }

  return "future";
}

function updateLiveStatus(day, now) {
  const selectedDate =
    new Date(`${day.date}T00:00:00`);

  const todayDate =
    new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

  const selectedLocalDate =
    new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    );

  let title = "Schedule preview";
  let detail = "Select any day to review its activities.";

  if (
    selectedLocalDate.getTime() ===
    todayDate.getTime()
  ) {
    const currentIndex =
      day.schedule.findIndex(
        (_, index) =>
          getEventState(day, index, now) === "current"
      );

    const nextIndex =
      day.schedule.findIndex(
        (_, index) =>
          getEventState(day, index, now) === "future"
      );

    if (currentIndex >= 0) {
      title = "Happening now";
      detail =
        `${day.schedule[currentIndex].title} · ` +
        `${day.schedule[currentIndex].time}`;
    } else if (nextIndex >= 0) {
      title = "Next activity";
      detail =
        `${day.schedule[nextIndex].title} · ` +
        `${day.schedule[nextIndex].time}`;
    } else {
      title = "Today’s schedule is complete";

      detail =
        day.day === "Saturday"
          ? "Camp Samapati follows the final Langar."
          : "See you tomorrow.";
    }
  } else if (selectedLocalDate > todayDate) {
    title = "Upcoming schedule";
    detail = `${day.day}, July ${day.number}`;
  } else if (
    selectedLocalDate < todayDate &&
    formatLocalDate(now) > "2026-07-25"
  ) {
    title = "Camp schedule archive";
    detail = "Camp Jeevan 2026 has concluded.";
  }

  liveStatus.innerHTML = `
    <span
      class="live-status__dot"
      aria-hidden="true"
    ></span>

    <div>
      <strong>${title}</strong>
      <span>${detail}</span>
    </div>
  `;
}

function dateTimeFor(date, time) {
  return new Date(`${date}T${time}:00`);
}

function formatLocalDate(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

function showToast(message) {
  document.querySelector(".toast")?.remove();

  const toast = document.createElement("div");

  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.textContent = message;

  document.body.append(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 2600);
}

document
  .querySelector("#printButton")
  .addEventListener("click", () => {
    window.print();
  });

document
  .querySelector("#shareButton")
  .addEventListener("click", async () => {
    const shareData = {
      title: "Camp Jeevan 2026 Schedule",
      text: "View the Camp Jeevan 2026 daily schedule.",
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(
          window.location.href
        );

        showToast("Schedule link copied.");
      } else {
        showToast(
          "Copy the page address from your browser."
        );
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        showToast("Unable to share this page.");
      }
    }
  });

dayPicker.addEventListener("keydown", (event) => {
  const supportedKeys = [
    "ArrowLeft",
    "ArrowRight",
    "Home",
    "End"
  ];

  if (!supportedKeys.includes(event.key)) {
    return;
  }

  event.preventDefault();

  if (event.key === "Home") {
    selectedIndex = 0;
  }

  if (event.key === "End") {
    selectedIndex = days.length - 1;
  }

  if (event.key === "ArrowLeft") {
    selectedIndex =
      (selectedIndex - 1 + days.length) %
      days.length;
  }

  if (event.key === "ArrowRight") {
    selectedIndex =
      (selectedIndex + 1) %
      days.length;
  }

  selectDay(selectedIndex);
  dayPicker.children[selectedIndex].focus();
});

createGroupButtons();
createDayButtons();
selectDay(selectedIndex);

window.setInterval(() => {
  renderTimeline(days[selectedIndex]);
}, 60_000);
