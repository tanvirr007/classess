# Class Routine

A web-based class schedule application built for the Department of Islamic History and Culture at Ananda Mohan College. It provides students with an interactive, real-time view of their weekly classes. 

## Features

- **Real-time Countdown Widget:** Tracks the current time against the daily schedule and displays a live countdown to the next upcoming class or the time remaining in an ongoing class.
- **Dynamic Search:** A categorized search feature that filters classes by teacher name, subject name, or subject code. The search box includes a terminal-style typing animation for the placeholder.
- **Interactive Schedule:** The weekly routine is organized into collapsible accordion sections by day. Active days automatically expand when relevant search results are found.
- **Theme Support:** Users can toggle between day and night modes. Themes are saved persistently in local storage.
- **Quick Copy:** Each class card has a copy button that formats and copies the specific class details directly to the clipboard.
- **PWA Support:** The application includes a manifest file and service worker, allowing it to be installed as a Progressive Web App on mobile and desktop devices.

## Project Structure

The project is built entirely with vanilla web technologies. There is no build step required to run the application.

- `index.html`: The main entry point containing the layout and structure.
- `src/style.css`: The stylesheet, utilizing CSS variables for theme management.
- `src/script.js`: The core application logic handling state, rendering, search functionality, and animations.
- `src/version.json`: Stores the current 3-digit version (MAJOR.MINOR.PATCH) and release date.
- `manifest.json` & `sw.js`: Configuration for Progressive Web App capabilities.
- `bump.sh`: An automation script for version bumping and Git commits.

## Setup and Installation

Since this is a static client-side application, you don't need Node.js or any specific backend dependencies to run it.

1. Clone or download the repository to your local machine.
2. Serve the directory using any local web server. For example, if you have Python installed, you can run:

   python -m http.server 8000

   Alternatively, you can use the Live Server extension in VS Code.
3. Open a web browser and navigate to the local server address (e.g., http://localhost:8000) to view the application.

## Modifying the Routine Data

The class schedule data and teacher codenames are hardcoded at the very top of `src/script.js` under the `routineData` object. 

To update the schedule for a new semester or make corrections:
1. Open `src/script.js`.
2. Locate the `routineData` object.
3. Update the `teachers_codename` mapping if there are new teachers.
4. Update the `weekly_schedule` array to add or modify individual class entries.

## Versioning and Releases

The project follows a 3-digit versioning system (MAJOR.MINOR.PATCH). Versions and release dates are managed in `src/version.json`.

An interactive automation script, `bump.sh`, is provided to simplify version updates:

1. Ensure you have `bash`, `jq`, and `git` installed.
2. Run the script:
   ```bash
   ./bump.sh
   ```
3. Follow the on-screen menu to select the update type:
   - **Major update**: Increments the first digit and preserves existing minor/patch versions.
   - **Minor update**: Increments the second digit and preserves the existing patch version.
   - **Patch update**: Increments the third digit for small changes or fixes.

The script automatically updates `src/version.json`, stages the changes, and creates a formatted Git commit with the release details.

## Browser Support

The application uses modern standard web APIs, CSS Grid, and custom properties. It is fully supported on the latest versions of Chrome, Safari, Firefox, and Edge.
