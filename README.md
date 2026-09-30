# Kotoba

A little notebook for a bigger world. Kotoba is a lightweight, local-first language notebook with warm paper cards, sage accents, and an original reading-cat mascot. Designed for Android phones, with a responsive desktop workspace.

## What’s inside

- Vocabulary, grammar, expressions, and free-form Markdown notes.
- Japanese readings, verb groups, transitivity, formation, usage, and optional pitch accent. Add languages and customize their fields in Settings.
- Quick captures with readings and context; move them into the notebook when ready.
- Favorites, tags, kana-aware search, language/status/level filters, saved collections, sorting, and grid/list views.
- Gentle practice: reveal all meanings, then rate a note. Ratings persist; mastered, empty, inbox, and free-form notes are excluded. This is self-assessment, not scheduled spaced repetition.
- Read-aloud using the device’s speech voices. Voice availability and offline speech depend on the device.
- Light/dark themes, card spacing, and text-size preferences.
- JSON backup and restore with a preview and explicit choices for conflicting records.
- Android installation, maskable home-screen icons, and offline app caching. No account, backend, remote fonts, or image service.

New installations include six editable Japanese starter notes. Existing notebooks and backup files remain compatible; restarting or deleting notes does not replenish starter notes.

## Run

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Check and build

```sh
npm run check
npm test
npm run build
npm run preview -- --host 0.0.0.0
```

The production build produces a static `dist/` folder, including a generated service worker that caches every bundled app asset. The development server does not register the worker. Serve `dist/` over HTTPS to install and use offline on Android. A first online visit is required to cache the app. Plain HTTP on a LAN IP is sufficient for layout testing but does not provide installation/offline service workers.

## Android

Kotoba is an installable **PWA**, not a native APK or Play Store package. This keeps it small and lets the same notebook work in a browser and from the Android home screen.

1. Open the deployed HTTPS site in an Android browser that supports PWA installation.
2. Choose **Settings → Install Kotoba**, or use the browser’s **Install app / Add to home screen** command.
3. Open Kotoba from your home screen. Once cached, you can read, write, search, and practice offline.

The phone layout includes a bottom navigation bar, a central quick-capture button, a captures inbox button in the header, and bottom sheets for reading/editing. Safe-area padding supports system navigation. Note and screen navigation uses URL hashes, so browser Back returns through notebook screens.

## Your data

Notes are stored in IndexedDB for the current browser profile and site origin. Download a backup from **Settings & backup → Download backup** before clearing browser data or changing the deployment origin. Use **Restore a backup** to move or merge notes on another device. Automatic cloud sync is not included.

Keyboard shortcuts: **N** creates a note, **Ctrl/Cmd K** focuses search, **Ctrl/Cmd Shift N** opens quick capture, and **Escape** closes a sheet.

## Artwork

The mascot and interface icons are original bundled SVG/code artwork crafted by GPT(special thanks!). Android PNG icons are checked in. To regenerate those PNGs, install Pillow in your Python environment and run `python scripts/generate-icons.py`; Python is not needed to build or run the app.
