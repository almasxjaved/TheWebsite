import twilio from "twilio";

export async function POST({ request }) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    // Send WhatsApp message
    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,  // Twilio sandbox
      to: process.env.MY_WHATSAPP_NUMBER,        // Your verified WhatsApp
      body: `📩 New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Error sending WhatsApp:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
