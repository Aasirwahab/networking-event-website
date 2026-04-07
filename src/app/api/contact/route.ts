import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  interest: z.string().min(1),
  message: z.string().min(10).max(1000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // TODO: Replace with your email service (e.g., Resend, SendGrid, Nodemailer)
    // For now, log the validated submission and return success.
    // In production, wire this up to an email API:
    //
    // await resend.emails.send({
    //   from: 'Networx London <noreply@networxlondon.com>',
    //   to: 'hello@networxlondon.com',
    //   subject: `New Contact: ${data.firstName} ${data.lastName}`,
    //   text: `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nInterest: ${data.interest}\nMessage: ${data.message}`,
    // });

    // Structured log for server-side monitoring
    console.info('[Contact Form]', {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      interest: data.interest,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Your message has been received. We will get back to you shortly.' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Invalid form data', errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
