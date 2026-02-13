import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, role, rating, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'akbhardwaj973@gmail.com', // Aapki email [cite: 2026-02-02]
      subject: `⭐ New Review for Nuxatech from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #cyan; border-radius: 15px;">
          <h2 style="color: #22d3ee;">New Customer Review</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Role:</strong> ${role}</p>
          <p><strong>Rating:</strong> ${rating} Stars</p>
          <p><strong>Review Text:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 10px; font-style: italic;">
            "${message}"
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: gray;">
            Note: Review ko verify karne ke baad Testimonials section mein manually add karein.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Review sent for approval" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}