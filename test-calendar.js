const { google } = require('googleapis');

const SERVICE_ACCOUNT_FILE = './service_account.json';
const PERSONAL_CALENDAR_ID = 'vermayash849@gmail.com';

async function main() {
  const auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_FILE,
    scopes: ['https://www.googleapis.com/auth/calendar'],
  });

  const credentials = await auth.getCredentials();
  const serviceAccountEmail = credentials.client_email;

  console.log('Service account:', serviceAccountEmail);
  console.log('Target calendar:', PERSONAL_CALENDAR_ID);
  console.log('');

  const calendar = google.calendar({ version: 'v3', auth });

  try {
    const { data } = await calendar.calendars.get({ calendarId: PERSONAL_CALENDAR_ID });
    console.log('Calendar found:', data.summary);
  } catch (err) {
    console.error('Cannot access calendar:', err.message);
    console.error(`\nShare ${PERSONAL_CALENDAR_ID} with ${serviceAccountEmail}`);
    console.error('Permission: "Make changes to events"');
    process.exit(1);
  }

  const event = {
    summary: 'Test Meeting with Yash',
    description: 'Testing service account calendar integration',
    start: { dateTime: '2026-07-15T15:00:00', timeZone: 'Asia/Kolkata' },
    end: { dateTime: '2026-07-15T15:30:00', timeZone: 'Asia/Kolkata' },
  };

  const response = await calendar.events.insert({
    calendarId: PERSONAL_CALENDAR_ID,
    resource: event,
  });

  console.log('\nEvent created on your personal calendar:');
  console.log('  Link:', response.data.htmlLink);
}

main().catch((err) => {
  if (err.message.includes('writer access')) {
    console.error('Error: Read-only access. Change permission to "Make changes to events".');
  } else {
    console.error('Error:', err.message);
  }
  process.exit(1);
});
