# Komar Trading - Complete website

Static website, no installation or build required. Includes six languages,
continuous PDF scrolling, original-quality catalogue downloads, and zoom up to 400%.
The viewer renders at least 1,920 pixels wide for ordinary page aspect ratios,
with a canvas memory limit and higher-density rendering during mobile pinch zoom.
Rendering cannot recover detail absent in an original PDF. Statuario, the elevator
catalogue and Laminate pages 3-16 need higher-resolution source exports for
genuine HD detail throughout. Sanitary and Super White contain larger images.

Latest additions: industrial kitchen design and planning; Tableware & accessories
inside Industrial Kitchens; Water Tanks as the fifth sector. Product details and
technical specifications show Coming soon where company data is still pending.
The uploaded Laminate..pdf is byte-for-byte identical to the existing 29-page
laminate catalogue and is included at its original quality.

## GitHub upload

Extract this ZIP and upload ALL contents directly to the existing repository root,
replacing matching files. Keep the directories and filenames exactly as included.
index.html, app.js, kitchen-pages.js, catalogue-reader.js, style.css, i18n.js,
viewport.js, .nojekyll and CNAME must be at the repository root alongside assets/,
catalogues/ and vendor/.

GitHub Settings > Pages: deploy from main, /(root).
Custom domain: komar-trading.com. The included CNAME uses this exact domain.
Keep existing Porkbun email DNS records unchanged. Enable HTTPS in GitHub when
its domain check and certificate are ready.

## Original PDFs

The large sanitary original is stored in 24 lossless .part files. Keep every
.part file and sanitary-source.json inside catalogues/. The reader loads the
needed parts and Download PDF reconstructs the original PDF without recompression.
The other PDFs are original files. Do not remove any catalogue files.

## Contact

Info@komar-trading.com | +383 49 920 925
The enquiry form prepares an email in the visitor's mail app. The visitor must
press Send there; direct server-side email delivery is not configured.

## Verification

All 145 PDF pages were decoded and audited. All five catalogue readers loaded in
a desktop browser with 2,400-pixel-wide canvases. Zoom was verified to rerender
at 300%, and tests cover minimum-HD backing resolution and original byte ranges.

The new pages render in all six languages. Desktop navigation, the tableware
page, water tank page, and preselected quote form were checked in a browser.
The mobile viewport guard was tested in code; actual iPhone visual review remains
outstanding. Product photos or technical data not supplied are shown as Coming soon.
