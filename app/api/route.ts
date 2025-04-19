import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, date, time, message } = await req.json();

  try {
    // 1. Send email to you
    await resend.emails.send({
      from: "Consultation Form <form@yourdomain.com>",
      to: "your@email.com",
      subject: "New Consultation Request",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // 2. Confirmation email to the user
    await resend.emails.send({
      from: "Your Company <noreply@yourdomain.com>",
      to: email,
      subject: "Thanks for booking a consultation!",
      html: `
        <p>Hey ${name},</p>
        <p>Thanks for booking a consultation. Here's what we got:</p>
        <ul>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
        </ul>
        <p>We'll follow up soon. Looking forward to chatting!</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
