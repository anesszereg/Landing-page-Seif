import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
// You should store this in an environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { name, email, subject, message } = await req.json();
    
    // Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'Contact Form ', // Use a verified domain in production
      to: ['anesszereg1@gmail.com'], // Replace with your actual email
      subject: `Contact Form: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
      // You can also use HTML format
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Message:</strong> ${message}</p>
      `,
    });
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
