/**
 * Nikhil Hospitals — Back Pain landing page lead capture.
 *
 * Receives form submissions and appends them as rows in a Google Sheet.
 *
 * SETUP
 * 1. Open your Google Sheet. Copy its ID from the URL:
 *      https://docs.google.com/spreadsheets/d/THIS_LONG_ID_HERE/edit
 *    Paste it into SHEET_ID below.
 * 2. Extensions → Apps Script. Delete any sample code and paste this whole file.
 * 3. (Optional) Set NOTIFY_EMAIL below to get an email on every new lead.
 * 4. In the editor, select the function "testAppend" and click Run once.
 *    Approve the permissions prompt. Check that a row appears in your Sheet —
 *    this confirms the write path works before you even deploy.
 * 5. Deploy → New deployment → type "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Click Deploy, authorise, and copy the "Web app URL".
 * 6. Paste that URL into SHEET_ENDPOINT in src/components/LeadForm.tsx.
 *
 * To change the script later: edit it, then Deploy → Manage deployments → Edit →
 * Version: "New version" → Deploy, so the same URL keeps working.
 */

// REQUIRED: the ID of the Google Sheet that will store the leads.
var SHEET_ID = 'PASTE_YOUR_SHEET_ID_HERE';

// The tab name within the Sheet. It is created automatically if missing.
var SHEET_NAME = 'Leads';

// Optional: put an email here to be notified of every lead. Leave '' to disable.
var NOTIFY_EMAIL = '';

// Visit the Web App URL in a browser to confirm it is deployed and live.
// The landing page form does NOT use this — it sends a POST (see doPost below).
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Lead capture endpoint is live.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var data = JSON.parse(e.postData.contents);
    appendLead(data);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Shared write logic used by both doPost and testAppend.
function appendLead(data) {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

  // Add a header row the first time.
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Phone', 'Email', 'Source']);
  }

  sheet.appendRow([
    new Date(),
    data.name || '',
    data.phone || '',
    data.email || '',
    data.source || ''
  ]);

  if (NOTIFY_EMAIL) {
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: 'New back pain enquiry — ' + (data.name || 'Unknown'),
      body: 'Name: ' + (data.name || '') + '\n'
          + 'Phone: ' + (data.phone || '') + '\n'
          + 'Email: ' + (data.email || '') + '\n'
          + 'Source: ' + (data.source || '')
    });
  }
}

// Run this manually in the editor (Step 4) to verify writing works.
function testAppend() {
  appendLead({
    name: 'TEST LEAD - editor run',
    phone: '0000000000',
    email: 'test@example.com',
    source: 'testAppend()'
  });
}
