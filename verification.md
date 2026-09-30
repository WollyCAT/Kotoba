# Kotoba rebuild verification

## Passed

- `npm run check`: zero errors and warnings.
- `npm test`: 18 tests across six files, including storage, backup validation/conflicts, Japanese search, practice ratings, and the generated service worker’s installation/navigation behavior.
- `npm run build`: production app and nine precached assets generated successfully.
- Browser checks: note creation, readings, persistence after reload, katakana queries matching hiragana readings, favorites, reveal/rate practice, quick capture with context, capture organization, backup preview/restore, persistent dark theme, and Back dismissing capture/editor sheets.
- Responsive checks at 320, 390, and 1440 CSS pixels; no horizontal content overflow.
- Production browser console: no app errors.
- Production service-worker readiness: installed worker controlled the page, and the index was present in Cache Storage.

## Verification limits

The in-app browser did not reliably render a complete offline reload after stopping the local preview server, despite reporting worker control and a cached index. The navigation cache behavior is covered by automated tests, but a cold offline launch and installation should be verified on an Android device with the deployed HTTPS site. No physical Android device or native APK was used.

The in-app browser’s download event did not return a saved backup file. Backup serialization/validation are tested, and restoring a local fixture through the UI passed; the Android download flow still needs device verification.

## Deliverables

- `kotoba-phone.jpg`: final phone layout.
- `kotoba-desktop.jpg`: final desktop notebook.
- `restore-check.json`: synthetic fixture used to verify backup restore in the development browser origin.

The production preview uses a separate browser origin from the development checks, so its notebook starts with the six starter notes rather than the test notes.
