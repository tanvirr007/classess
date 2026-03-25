/* ── Routine Data ─────────────────────────────────────────── */
const routineData = {
  "teachers_codename": {
    "SH": "Khan Sady Hasan",
    "RB": "Md. Rahat Billal Lasker",
    "AZ": "Ahmed Hasan Zinnah",
    "SA": "Sonia Akter",
    "SK": "Salma Khatun",
    "IH": "Md. Imran Hasan",
    "HM": "Hiramoni",
    "AN": "Asaduzzaman"
  },

  "weekly_schedule": [
    {
      "day": "Sunday",
      "bar": "রবিবার",
      "classes": [
        { "time": "9:00 AM - 9:45 AM", "teacher_initials": "RB", "subject_code": "NULL", "subject_name": "NULL", "type": "regular", "room": "903", "lift_no": "09" },
        { "time": "9:45 AM - 10:30 AM", "teacher_initials": "AZ", "subject_code": "NULL", "subject_name": "NULL", "type": "regular", "room": "903", "lift_no": "09" }
      ]
    },
    {
      "day": "Monday",
      "bar": "সোমবার",
      "classes": [
        { "time": "9:00 AM - 9:45 AM", "teacher_initials": "IH", "subject_code": "NULL", "subject_name": "NULL", "type": "regular", "room": "903", "lift_no": "09" },
        { "time": "9:45 AM - 10:30 AM", "teacher_initials": "AN", "subject_code": "NULL", "subject_name": "NULL", "type": "regular", "room": "903", "lift_no": "09" }
      ]
    },
    {
      "day": "Tuesday",
      "bar": "মঙ্গলবার",
      "classes": [
        { "time": "9:00 AM - 9:45 AM", "teacher_initials": "HM", "subject_code": "NULL", "subject_name": "NULL", "type": "regular", "room": "903", "lift_no": "09" },
        { "time": "9:45 AM - 10:30 AM", "teacher_initials": "SA", "subject_code": "NULL", "subject_name": "NULL", "type": "regular", "room": "903", "lift_no": "09" }
      ]
    },
    {
      "day": "Wednesday",
      "bar": "বুধবার",
      "classes": [
        { "time": "9:00 AM - 9:45 AM", "teacher_initials": "HM", "subject_code": "NULL", "subject_name": "NULL", "type": "regular", "room": "903", "lift_no": "09" },
        { "time": "9:45 AM - 10:30 AM", "teacher_initials": "SH", "subject_code": "NULL", "subject_name": "NULL", "type": "regular", "room": "903", "lift_no": "09" }
      ]
    },
    {
      "day": "Thursday",
      "bar": "বৃহস্পতিবার",
      "classes": [
        { "time": "9:00 AM - 9:50 AM", "teacher_initials": "SH", "subject_code": "NULL", "subject_name": "NULL", "type": "regular", "room": "903", "lift_no": "09" },
        { "time": "9:50 AM - 10:40 AM", "teacher_initials": "SK", "subject_code": "NULL", "subject_name": "NULL", "type": "regular", "room": "903", "lift_no": "09" }
      ]
    }
  ]
};

/* ── State ────────────────────────────────────────────────── */
let currentTheme = localStorage.getItem('theme') || 'light';

/* ── Labels ───────────────────────────────────────────────── */
const labels = {
  subheading: 'Department of Islamic History and Culture',
  teacher: 'Teacher Name',
  subject: 'Subject Name',
  code: 'Subject Code',
  room: 'Room No',
  type: 'Class Type',
  lift: 'Lift',
  time: 'Class Time',
  date: 'Class Date',
  na: 'N/A',
  classes: (n) => `${n} ${n === 1 ? 'class' : 'classes'}`,
  classLabel: (n, total) => `Class ${n}/${total}`,
  themeDay: 'Day Mode',
  themeNight: 'Night Mode',
  typeMap: { regular: 'Regular', lab: 'Lab', tutorial: 'Tutorial' },
};

/* ── SVG Icons ────────────────────────────────────────────── */
const icons = {
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>`,
  copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>`,
};

/* ── Helpers ──────────────────────────────────────────────── */
const resolveSubject = (val) => (val === 'NULL' || !val) ? labels.na : val;
const resolveTeacher = (initials) => routineData.teachers_codename[initials] || initials;
const resolveType = (type) => labels.typeMap[type.toLowerCase()] || (type.charAt(0).toUpperCase() + type.slice(1).toLowerCase());

/**
 * Calculates dates for the current week (Sun-Sat)
 * @returns {Object} Mapping of day names to formatted date strings
 */
function getDatesOfWeek() {
  const now = new Date();
  const currentDay = now.getDay(); // 0 (Sun) to 6 (Sat)
  const sunday = new Date(now);
  sunday.setDate(now.getDate() - currentDay);

  const dates = {};
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  for (let i = 0; i < 7; i++) {
    const d = new Date(sunday);
    d.setDate(sunday.getDate() + i);
    const day = d.getDate();
    const month = d.toLocaleString('default', { month: 'long' });
    const year = d.getFullYear();
    dates[dayNames[i]] = `${day} ${month} ${year}`;
  }
  return dates;
}

/**
 * Parses a time string (e.g. "9:00 AM") into a Date object on the given date string.
 */
function parseTimeStr(dateStr, singleTimeStr) {
  const match = singleTimeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return null;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const ampm = match[3].toUpperCase();
  if (ampm === 'PM' && hours < 12) hours += 12;
  if (ampm === 'AM' && hours === 12) hours = 0;
  
  const d = new Date(dateStr);
  d.setHours(hours, minutes, 0, 0);
  return d;
}

/**
 * Determines if a class has passed or is upcoming based on its end time.
 * @param {string} dateStr - The date string from getDatesOfWeek (e.g. "26 March 2026")
 * @param {string} timeStr - The class time string (e.g. "9:00 AM - 9:45 AM")
 * @returns {string} 'passed' or 'upcoming'
 */
function getClassStatus(dateStr, timeStr) {
  if (!dateStr || !timeStr) return 'upcoming';

  const timeParts = timeStr.split('-');
  if (timeParts.length < 2) return 'upcoming';

  const classEndTime = parseTimeStr(dateStr, timeParts[1].trim());
  if (!classEndTime) return 'upcoming';

  const now = new Date();
  return now > classEndTime ? 'passed' : 'upcoming';
}

/* ── Render ───────────────────────────────────────────────── */
function renderRoutine() {
  const t = labels;
  const container = document.getElementById('routine-container');
  const weekDates = getDatesOfWeek();

  container.innerHTML = '';

  routineData.weekly_schedule.forEach((dayData, dayIndex) => {
    const dateStr = weekDates[dayData.day] || '';
    const section = document.createElement('section');
    section.className = 'day-section';
    section.setAttribute('aria-label', dayData.day);

    let dayStatus = 'passed';
    if (!dayData.classes || dayData.classes.length === 0) {
      dayStatus = 'passed';
    } else {
      dayData.classes.forEach(cls => {
        if (getClassStatus(dateStr, cls.time) === 'upcoming') {
          dayStatus = 'upcoming';
        }
      });
    }

    // No day open by default
    // if (dayIndex === 0) section.classList.add('active');

    section.innerHTML = `
      <div class="day-header" role="button" aria-expanded="false" tabindex="0">
        <div class="day-info">
          <div class="status-dots ${dayStatus}">
            ${dayStatus === 'passed' ? `<span class="check-icon" title="Completed">${icons.check}</span>` : `<span class="dot" title="Pending"></span>`}
          </div>
          <span class="day-name">${dayData.day}</span>
          <span class="day-divider-bar" aria-hidden="true">|</span>
          <span class="day-name-bn">${dayData.bar}</span>
          <span class="day-divider-bar" aria-hidden="true">|</span>
          <span class="day-count">${t.classes(dayData.classes.length)}</span>
        </div>
        <div class="chevron" aria-hidden="true">${icons.chevron}</div>
      </div>
      <div class="classes-container">
        <div class="classes-grid" id="grid-${dayData.day}"></div>
      </div>
    `;

    container.appendChild(section);

    const grid = section.querySelector(`#grid-${dayData.day}`);

    dayData.classes.forEach((cls, index) => {
      const subjectVal = resolveSubject(cls.subject_name);
      const teacherName = resolveTeacher(cls.teacher_initials);
      const typeLabel = resolveType(cls.type);
      const isNullSubj = cls.subject_name === 'NULL' || !cls.subject_name;

      const card = document.createElement('article');
      card.className = 'class-card';

      card.innerHTML = `
        <div class="card-header-meta">
          <span class="class-index">${t.classLabel(index + 1, dayData.classes.length)}</span>
          <button class="btn-copy" aria-label="Copy class details" title="Copy">${icons.copy}</button>
        </div>
        <div class="card-rows">
          <div class="card-row">
            <span class="card-label">${t.lift}</span>
            <span class="card-value">${cls.lift_no}</span>
          </div>
          <div class="card-separator" aria-hidden="true"></div>
          <div class="card-row">
            <span class="card-label">${t.room}</span>
            <span class="card-value">${cls.room}</span>
          </div>
          <div class="card-separator" aria-hidden="true"></div>
          <div class="card-row">
            <span class="card-label">${t.type}</span>
            <span class="card-value">${typeLabel}</span>
          </div>
          <div class="card-separator" aria-hidden="true"></div>
          <div class="card-row">
            <span class="card-label">${t.date}</span>
            <span class="card-value">${dateStr}</span>
          </div>
          <div class="card-separator" aria-hidden="true"></div>
          <div class="card-row">
            <span class="card-label">${t.time}</span>
            <span class="card-value">${cls.time}</span>
          </div>
          <div class="card-separator" aria-hidden="true"></div>
          <div class="card-row">
            <span class="card-label">${t.code}</span>
            <span class="card-value">${cls.subject_code || t.na}</span>
          </div>
          <div class="card-separator" aria-hidden="true"></div>
          <div class="card-row">
            <span class="card-label">${t.teacher}</span>
            <span class="card-value">${teacherName}</span>
          </div>
          <div class="card-separator" aria-hidden="true"></div>
          <div class="card-row">
            <span class="card-label">${t.subject}</span>
            <span class="card-value${isNullSubj ? ' null-val' : ''}">${subjectVal}</span>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  });
}

/* ── Apply static labels to DOM ────────────────────────────── */
function applyLabels() {
  document.getElementById('subheading-text').textContent = labels.subheading;
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  updateThemeLabel();
}

/* ── Theme ────────────────────────────────────────────────── */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeLabel();
}

function updateThemeLabel() {
  const isDark = currentTheme === 'dark';
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-btn-label');
  themeIcon.innerHTML = isDark ? icons.sun : icons.moon;
  themeLabel.textContent = isDark ? labels.themeDay : labels.themeNight;
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.title = isDark ? 'Switch to Day Mode' : 'Switch to Night Mode';
  }
}

/* ── Toggle handlers ──────────────────────────────────────── */
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  applyTheme();
}

/* ── Logo Modal ─────────────────────────────────────────── */
function initLogoModal() {
  const modal = document.getElementById('logo-modal');
  const modalImg = document.getElementById('modal-img');
  const logo = document.querySelector('.header-logo');
  const closeBtn = document.getElementById('modal-close');

  if (!modal || !logo) return;

  const openModal = () => {
    modalImg.src = logo.getAttribute('src');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock scroll
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Unlock scroll
  };

  logo.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ── Copy Functionality ───────────────────────────────────── */
function handleCopy(event) {
  const btn = event.target.closest('.btn-copy');
  if (!btn) return;

  const card = btn.closest('.class-card');
  if (!card) return;

  const classIndex = card.querySelector('.class-index').textContent.trim();
  const rows = card.querySelectorAll('.card-row');

  let copyText = `${classIndex}\n`;
  rows.forEach(row => {
    const labelMatch = row.querySelector('.card-label');
    const valueMatch = row.querySelector('.card-value');
    if (labelMatch && valueMatch) {
      const labelText = labelMatch.textContent.trim();
      const valueText = valueMatch.textContent.trim();
      copyText += `${labelText} : ${valueText}\n`;
    }
  });

  navigator.clipboard.writeText(copyText.trim()).then(() => {
    btn.innerHTML = icons.check;
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = icons.copy;
      btn.classList.remove('copied');
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy class details:', err);
  });
}

/* ── Accordion Functionality ────────────────────────────── */
function initAccordion() {
  const container = document.getElementById('routine-container');

  container.addEventListener('click', (e) => {
    const header = e.target.closest('.day-header');
    if (!header) return;

    const section = header.closest('.day-section');
    const allSections = container.querySelectorAll('.day-section');
    const isNowActive = !section.classList.contains('active');

    // Close all other sections
    allSections.forEach(s => {
      if (s !== section) {
        s.classList.remove('active');
        s.querySelector('.day-header').setAttribute('aria-expanded', 'false');
      }
    });

    // Toggle current section
    section.classList.toggle('active');
    header.setAttribute('aria-expanded', isNowActive);

    // Scroll into view if opening
    if (isNowActive) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 400); // Wait for transition
    }
  });

  // Support Enter and Space keys
  container.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const header = e.target.closest('.day-header');
      if (header) {
        e.preventDefault();
        header.click();
      }
    }
  });
}

/* ── Countdown Widget ─────────────────────────────────────── */
function updateCountdown() {
  const widget = document.getElementById('countdown-widget');
  if (!widget) return;

  const now = new Date();
  const weekDates = getDatesOfWeek();
  let activeClass = null;
  let nextClass = null;

  const allWeeklyClasses = [];
  routineData.weekly_schedule.forEach(dayData => {
    const dateStr = weekDates[dayData.day];
    if (!dateStr) return;
    dayData.classes.forEach(cls => {
      if (!cls.time || cls.time.indexOf('-') === -1) return;
      const parts = cls.time.split('-');
      const start = parseTimeStr(dateStr, parts[0].trim());
      const end = parseTimeStr(dateStr, parts[1].trim());
      if (start && end) {
        allWeeklyClasses.push({
          subject: resolveSubject(cls.subject_name),
          start,
          end
        });
      }
    });
  });

  allWeeklyClasses.sort((a, b) => a.start - b.start);

  for (const cls of allWeeklyClasses) {
    if (now >= cls.start && now <= cls.end) {
      activeClass = cls;
      break;
    } else if (now < cls.start && !nextClass) {
      nextClass = cls;
    }
  }

  let targetTime = null;
  let messagePrefix = '';

  if (activeClass) {
    targetTime = activeClass.end;
    const sName = activeClass.subject !== labels.na ? ` <strong>${activeClass.subject}</strong>` : ' class';
    messagePrefix = `Time remaining in${sName}:`;
  } else if (nextClass) {
    targetTime = nextClass.start;
    const isToday = nextClass.start.toDateString() === now.toDateString();
    const dayName = isToday ? '' : ` on ${nextClass.start.toLocaleDateString('en-US', {weekday: 'short'})}`;
    messagePrefix = `Next class starts${dayName} in:`;
  } else {
    widget.innerHTML = `<span class="clock-icon" style="color:var(--text-muted)">${icons.check}</span> <span style="color:var(--text-muted)">No more classes this week!</span>`;
    widget.style.borderColor = 'transparent';
    widget.style.boxShadow = 'none';
    return;
  }

  widget.style.borderColor = '';
  widget.style.boxShadow = '';

  const diffMs = targetTime - now;
  if (diffMs <= 0) return;

  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diffMs % (1000 * 60)) / 1000);

  let timeStr = '';
  if (hours > 0) timeStr += `${hours}h `;
  if (hours > 0 || mins > 0) timeStr += `${mins}m `;
  timeStr += `${secs}s`;

  widget.innerHTML = `<span class="clock-icon">${icons.clock}</span> <span>${messagePrefix} <strong style="color:var(--accent);">${timeStr}</strong></span>`;
}

/* ── Init ─────────────────────────────────────────────────── */
function init() {
  applyTheme();
  applyLabels();
  initLogoModal();
  renderRoutine();
  initAccordion();

  // Initialize and run countdown
  updateCountdown();
  setInterval(updateCountdown, 1000);

  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('routine-container').addEventListener('click', handleCopy);
}

document.addEventListener('DOMContentLoaded', init);

/* ── Service Worker Registration ──────────────────────────── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registered successfully.'))
      .catch(err => console.error('Service Worker registration failed:', err));
  });
}
