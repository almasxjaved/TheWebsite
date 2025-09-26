// src/routes/api/send-whatsapp/+server.js
import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import Twilio from 'twilio';

const accountSid = env.TWILIO_ACCOUNT_SID;
const authToken = env.TWILIO_AUTH_TOKEN;
const fromNumber = env.TWILIO_WHATSAPP_FROM || 'whatsapp:+14155238886'; // Twilio sandbox default
const toNumber = env.MY_WHATSAPP_NUMBER; // set this in .env (example: +92xxxxxxxxxx)

export async function POST({ request }) {
  try {
    const { name, email, message } = await request.json();

    // quick sanity checks
    if (!accountSid || !authToken) {
      console.error('Missing TWILIO_ACCOUNT_SID or TWILIO_AUTH_TOKEN');
      return json({ success: false, error: 'Server misconfigured: missing Twilio credentials' }, { status: 500 });
    }
    if (!toNumber) {
      console.error('Missing MY_WHATSAPP_NUMBER env var');
      return json({ success: false, error: 'Server misconfigured: missing target WhatsApp number' }, { status: 500 });
    }

    const client = Twilio(accountSid, authToken);

    const bodyText = `📩 New Contact Form Submission:\n\nName: ${name || '-'}\nEmail: ${email || '-'}\nMessage: ${message || '-'}`;

    const result = await client.messages.create({
      from: fromNumber,
      to: `whatsapp:${toNumber}`,   // must be E.164 e.g. +92xxxxxxxxx
      body: bodyText
    });

    console.log('Twilio message sent, sid:', result.sid);
    return json({ success: true });
  } catch (err) {
    // full error to server console — useful for local debugging
    console.error('Error in /api/send-whatsapp:', err);
    // return a short message to the client for debugging (remove detailed error in production)
    return json({ success: false, error: err.message || 'Unknown error' }, { status: 500 });
  }
}
