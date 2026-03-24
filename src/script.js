/* ── Routine Data ─────────────────────────────────────────── */
const routineData = {
  "routine_title": "Honours 2nd Year (H2) Class Schedule",
  "department": "Islamic History and Culture",
  "college": "Ananda Mohan College",

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
  badge: 'Weekly Routine',
  headerTitle: 'H2 Class Routine',
  headerSub: 'Ananda Mohan College \u2014 Islamic History and Culture',
  routineTitle: 'Honours 2nd Year (H2) Class Schedule',
  subheading: 'Department of Islamic History and Culture',
  teacher: 'Teacher Name',
  subject: 'Subject Name',
  code: 'Subject Code',
  room: 'Room No',
  type: 'Type',
  lift: 'Lift',
  time: 'Time',
  na: 'N/A',
  classes: (n) => `${n} ${n === 1 ? 'class' : 'classes'}`,
  classLabel: (n, total) => `Class ${n}/${total}`,
  themeDay: 'Day Mode',
  themeNight: 'Night Mode',
  footerNote: 'Class Routine \u2014 Ananda Mohan College',
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
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
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
};

/* ── Helpers ──────────────────────────────────────────────── */
const resolveSubject = (val) => (val === 'NULL' || !val) ? labels.na : val;
const resolveTeacher = (initials) => routineData.teachers_codename[initials] || initials;
const resolveType = (type) => labels.typeMap[type.toLowerCase()] || (type.charAt(0).toUpperCase() + type.slice(1).toLowerCase());

/* ── Render ───────────────────────────────────────────────── */
function renderRoutine() {
  const t = labels;
  const container = document.getElementById('routine-container');

  container.innerHTML = '';

  routineData.weekly_schedule.forEach((dayData) => {
    const section = document.createElement('section');
    section.className = 'day-section';
    section.setAttribute('aria-label', dayData.day);

    // Day header
    section.innerHTML = `
      <div class="day-header">
        <span class="day-name">${dayData.day}</span>
        <span class="day-name-bn">${dayData.bar}</span>
        <span class="day-divider" aria-hidden="true"></span>
        <span class="day-count">${t.classes(dayData.classes.length)}</span>
      </div>
      <div class="classes-grid" id="grid-${dayData.day}"></div>
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
  document.getElementById('badge-text').textContent = labels.badge;
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
      copyText += `${labelText}\n${valueText}\n`;
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

/* ── Init ─────────────────────────────────────────────────── */
function init() {
  applyTheme();
  applyLabels();
  initLogoModal();
  renderRoutine();

  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('routine-container').addEventListener('click', handleCopy);
}

document.addEventListener('DOMContentLoaded', init);
