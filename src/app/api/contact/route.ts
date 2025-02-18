import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate the input
    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send the email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 20px auto; padding: 20px; border-radius: 8px; border: 1px solid #ddd; }
              .header { background: #3B82F6; color: white; padding: 20px; border-radius: 8px 8px 0 0; margin: -20px -20px 20px; }
              .field { margin-bottom: 16px; }
              .label { font-weight: bold; color: #666; }
              .message { background: #f9f9f9; padding: 15px; border-radius: 4px; margin-top: 8px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin:0;">New Contact Form Submission</h2>
              </div>
              <div class="field">
                <span class="label">Name:</span>
                <div>${name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div>${email}</div>
              </div>
              ${phone ? `
              <div class="field">
                <span class="label">Phone:</span>
                <div>${phone}</div>
              </div>
              ` : ''}
              <div class="field">
                <span class="label">Message:</span>
                <div class="message">${message.replace(/\n/g, '<br/>')}</div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 