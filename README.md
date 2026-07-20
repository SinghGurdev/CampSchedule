# Camp Jeevan 2026 Schedule Website

A mobile-first, responsive schedule website based on the supplied Camp Jeevan 2026 PDF.

## Included files

- `index.html` — page structure
- `styles.css` — responsive visual design
- `app.js` — schedule data, day switching, live activity highlighting, sharing, and printing
- `Camp-Jeevan-2026-Schedule.pdf` — original printable schedule
- `.nojekyll` — tells GitHub Pages to serve the files directly

## Publish with GitHub Pages

1. Create a new **public** GitHub repository, for example `camp-jeevan-2026`.
2. Extract this ZIP file.
3. Upload all extracted files to the root of the repository.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
6. Save and wait for GitHub to publish the site.

The default address will look like:

`https://YOUR-USERNAME.github.io/camp-jeevan-2026/`

## Edit schedule details

Open `app.js`.

The weekday schedule is stored in:

```js
const weekdaySchedule = [
  // activities
];
```

The Saturday schedule is stored in:

```js
const saturdaySchedule = [
  // activities
];
```

Each activity contains:

```js
{
  time: "12:45 PM",
  value: "12:45",
  title: "Lecture 1 & Q/A",
  detail: "Lecture followed by questions and answers.",
  kind: "session",
  tag: "Lecture"
}
```

`value` must use 24-hour time because it is used for live activity highlighting.

Supported visual categories:

- `session`
- `workshop`
- `break`
- `spiritual`
- `meal`
- `logistics`


## Monday workshop groups

The Monday workshop breakdown is stored in `app.js` under:

```js
const workshopGroups = [
  // Group A through Group D
];
```

Each group has two assignments: Workshop 1 at 3:45 PM and Workshop 2 at 5:00 PM. The workshop section appears only when Monday is selected.

## Connect a Squarespace domain

Publish and test the GitHub Pages address first. Then:

1. In GitHub, open **Settings → Pages**.
2. Enter your custom domain.
3. Add GitHub's required DNS records in the Squarespace domain DNS panel.
4. After verification, enable **Enforce HTTPS** in GitHub.

Keep any `CNAME` file created by GitHub.
