/**
 * MTK Screws — "Fill in Your Requirements" quote form backend.
 *
 * Setup:
 *   1. Create a new Google Sheet. Rename the first tab "Submissions" and
 *      add this header row (A1:K1) exactly:
 *      Timestamp | Full Name | Company Name | Email | Phone | Product Category |
 *      Quantity Required | Material Grade | Standard / Size | Detailed Requirements | Attachment
 *   2. Extensions > Apps Script. Delete any boilerplate code and paste this file in as Code.gs.
 *   3. Update ADMIN_EMAIL below if needed (defaults to the site's contact address).
 *   4. Deploy > New deployment > type "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 *   5. Copy the deployment's Web App URL and paste it into QUOTE_FORM_ENDPOINT
 *      in contact.html (inline script near the bottom of the file).
 *   6. Submit a test inquiry from the live site to confirm the row, the
 *      notification email, and the thank-you email all arrive correctly.
 */

var SHEET_NAME   = 'Submissions';
var ADMIN_EMAIL  = 'aggarwalindustries311@gmail.com';
var SITE_URL     = 'https://mtkscrews.com';
var LOGO_URL     = SITE_URL + '/assets/mtk-logo.png';
var BRAND_NAVY   = '#1f2429';
var BRAND_RED    = '#ed1a25';
var BRAND_LIGHT  = '#F6F8FB';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    if (!data.fullName || !data.email || !data.companyName || !data.phone || !data.category) {
      return jsonResponse({ status: 'error', message: 'Missing required fields.' });
    }

    var attachmentBlob = null;
    if (data.attachmentBase64 && data.attachmentName) {
      attachmentBlob = Utilities.newBlob(
        Utilities.base64Decode(data.attachmentBase64),
        data.attachmentMimeType || 'application/octet-stream',
        data.attachmentName
      );
    }

    appendToSheet(data, attachmentBlob);
    sendAdminNotification(data, attachmentBlob);
    sendCustomerThankYou(data);

    return jsonResponse({ status: 'success' });
  } catch (err) {
    return jsonResponse({ status: 'error', message: err.message });
  }
}

function appendToSheet(data, attachmentBlob) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  sheet.appendRow([
    new Date(),
    data.fullName,
    data.companyName,
    data.email,
    data.phone,
    data.category,
    data.quantity || '',
    data.material || '',
    data.standardSize || '',
    data.requirements || '',
    attachmentBlob ? attachmentBlob.getName() + ' (sent via email)' : ''
  ]);
}

function sendAdminNotification(data, attachmentBlob) {
  var rows = [
    ['Full Name', data.fullName],
    ['Company Name', data.companyName],
    ['Email', data.email],
    ['Phone / WhatsApp', data.phone],
    ['Product Category', data.category],
    ['Quantity Required', data.quantity || '—'],
    ['Material Grade', data.material || '—'],
    ['Standard / Size', data.standardSize || '—'],
    ['Detailed Requirements', data.requirements || '—']
  ];

  var html = brandedEmailShell(
    'New Quote Request',
    'A new inquiry came in through the "Fill in Your Requirements" form on the website.',
    detailsTableHtml(rows) + (attachmentBlob
      ? '<p style="margin:20px 0 0;font-size:14px;color:' + BRAND_NAVY + ';"><strong>Attachment:</strong> ' + escapeHtml(attachmentBlob.getName()) + ' (attached to this email)</p>'
      : ''),
    'mailto:' + data.email,
    'Reply to ' + data.fullName
  );

  var options = { htmlBody: html, name: 'MTK Screws Website' };
  if (attachmentBlob) options.attachments = [attachmentBlob];

  MailApp.sendEmail(ADMIN_EMAIL, 'New Quote Request — ' + data.companyName + ' (' + data.category + ')', stripHtml(html), options);
}

function sendCustomerThankYou(data) {
  var rows = [
    ['Product Category', data.category],
    ['Quantity Required', data.quantity || '—'],
    ['Material Grade', data.material || '—'],
    ['Standard / Size', data.standardSize || '—'],
    ['Detailed Requirements', data.requirements || '—']
  ];

  var html = brandedEmailShell(
    'Thank You for Your Inquiry, ' + data.fullName.split(' ')[0] + '!',
    'We\'ve received your request and our technical sales team will get back to you with pricing within 24 business hours. Here\'s a copy of what you submitted:',
    detailsTableHtml(rows),
    SITE_URL,
    'Visit MTK Screws'
  );

  var options = { htmlBody: html, name: 'MTK Screws – Aggarwal Industries' };
  MailApp.sendEmail(data.email, 'We Received Your Quote Request — MTK Screws', stripHtml(html), options);
}

/* ── Branded email shell shared by both emails ─────────────────────── */
function brandedEmailShell(heading, intro, bodyHtml, ctaUrl, ctaLabel) {
  return ''
    + '<div style="background:' + BRAND_LIGHT + ';padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">'
    + '<div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">'

    // Header
    + '<div style="background:' + BRAND_NAVY + ';padding:24px 32px;text-align:center;">'
    + '<table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">'
    + '<tr>'
    + '<td style="vertical-align:middle;padding-right:12px;">'
    + '<img src="' + LOGO_URL + '" alt="MTK Screws" style="height:40px;display:block;">'
    + '</td>'
    + '<td style="vertical-align:middle;border-left:1px solid rgba(255,255,255,0.25);padding-left:12px;">'
    + '<span style="font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:bold;color:#ffffff;line-height:1.2;">MTK Screws</span><br>'
    + '<span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#9ca3af;letter-spacing:0.5px;">AGGARWAL INDUSTRIES</span>'
    + '</td>'
    + '</tr>'
    + '</table>'
    + '</div>'

    // Accent bar
    + '<div style="height:4px;background:' + BRAND_RED + ';"></div>'

    // Body
    + '<div style="padding:32px;">'
    + '<h1 style="margin:0 0 12px;font-size:22px;color:' + BRAND_NAVY + ';font-family:Arial,Helvetica,sans-serif;">' + escapeHtml(heading) + '</h1>'
    + '<p style="margin:0 0 20px;font-size:14px;line-height:1.6;color:#4b5563;">' + escapeHtml(intro) + '</p>'
    + bodyHtml
    + '<div style="margin-top:28px;text-align:center;">'
    + '<a href="' + ctaUrl + '" style="display:inline-block;background:' + BRAND_RED + ';color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:999px;font-size:14px;font-weight:bold;">' + escapeHtml(ctaLabel) + '</a>'
    + '</div>'
    + '</div>'

    // Footer
    + '<div style="background:' + BRAND_NAVY + ';padding:24px 32px;text-align:center;color:#9ca3af;font-size:12px;line-height:1.6;">'
    + '<p style="margin:0 0 8px;color:#ffffff;font-weight:bold;">MTK Screws – Aggarwal Industries</p>'
    + '<p style="margin:0 0 8px;">A-003/11, Site-V, Kasna Industrial Area, Greater Noida, UP – 201310, India</p>'
    + '<p style="margin:0;">+91 97112 21918 &nbsp;|&nbsp; +91 98102 29770 &nbsp;|&nbsp; aggarwalindustries311@gmail.com</p>'
    + '</div>'

    + '</div>'
    + '</div>';
}

function detailsTableHtml(rows) {
  var html = '<table style="width:100%;border-collapse:collapse;font-size:14px;">';
  rows.forEach(function (row, i) {
    var bg = i % 2 === 0 ? '#ffffff' : BRAND_LIGHT;
    html += '<tr style="background:' + bg + ';">'
      + '<td style="padding:10px 12px;font-weight:bold;color:' + BRAND_NAVY + ';width:40%;border:1px solid #e5e7eb;vertical-align:top;">' + escapeHtml(row[0]) + '</td>'
      + '<td style="padding:10px 12px;color:#374151;border:1px solid #e5e7eb;vertical-align:top;white-space:pre-wrap;">' + escapeHtml(row[1]) + '</td>'
      + '</tr>';
  });
  html += '</table>';
  return html;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
