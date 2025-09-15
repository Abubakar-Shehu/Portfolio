import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New message from your portfolio contact form:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio website at ${new Date().toLocaleString()}.
    `.trim();

    // Check if Resend API key is properly configured
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey || resendApiKey.length < 20) {
      console.error('Resend API key is missing or invalid:', resendApiKey ? 'Key too short' : 'No key found');
      return NextResponse.json(
        { error: 'Email service not configured properly' },
        { status: 500 }
      );
    }

    // Send email using Resend
    try {
      const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: ['Shehu.lanre.a@gmail.com'],
        subject: `Portfolio Contact: ${subject}`,
        text: emailContent,
        replyTo: email,
      });

      if (error) {
        console.error('Resend API error:', error);
        return NextResponse.json(
          { error: `Email service error: ${error.message || 'Unknown error'}` },
          { status: 500 }
        );
      }

      console.log('Email sent successfully:', data);
      return NextResponse.json(
        { message: 'Message sent successfully' },
        { status: 200 }
      );

    } catch (resendError) {
      console.error('Resend service error:', resendError);
      return NextResponse.json(
        { error: `Email service error: ${resendError.message}` },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
}
