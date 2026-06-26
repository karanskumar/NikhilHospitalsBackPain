# Nikhil Hospitals — Chronic Back Pain & Spine Care Landing Page

A lead-conversion landing page for Nikhil Hospitals' advanced, minimally invasive
day-care spine treatments for chronic back pain.

Built with React + Vite + TypeScript and Tailwind CSS v4. Adapted from the
Heart Safety landing page template.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server (http://localhost:3000).

Run `npm run build` to create a production build in `build/`.

## Before publishing — replace placeholders

- **Spine specialist:** `src/components/DoctorSection.tsx` has a placeholder name
  (`Dr. [Spine Specialist Name]`), qualifications, and photo. Add the real
  specialist's details and drop their photo into `src/assets/`.
- **Testimonials:** `src/components/Testimonials.tsx` uses illustrative patient
  stories. Replace with real, consented testimonials.
- **Lead form → Google Sheet:** the form posts submissions to a Google Sheet via
  Apps Script. To activate it:
  1. Create a Google Sheet, then **Extensions → Apps Script** and paste the
     contents of [`google-apps-script.gs`](google-apps-script.gs).
  2. Set `SHEET_ID` in that script to your Sheet's ID (the long string in the
     Sheet URL between `/d/` and `/edit`). Optionally set `NOTIFY_EMAIL`.
  3. In the editor, run the `testAppend` function once and approve permissions —
     a test row should appear in the Sheet, confirming the write path works.
  4. **Deploy → New deployment → Web app** (Execute as: *Me*, Access: *Anyone*),
     authorise, and copy the **Web app URL**.
  5. Paste that URL into `SHEET_ENDPOINT` in `src/components/LeadForm.tsx`.

  Until the URL is set, the form still shows the thank-you message but only logs
  the submission to the browser console.
- **Contact details:** phone, email, and clinic locations are in
  `src/components/Header.tsx` and `src/components/Footer.tsx` — confirm they're correct.
