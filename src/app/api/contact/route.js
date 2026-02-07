import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, pkg, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Aapke liye Mail (Admin Notification)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🚀 New Lead: ${name} - ${pkg}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
          <div style="background: #0891b2; padding: 20px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 24px;">New Project Inquiry</h1>
          </div>
          <div style="padding: 20px; color: #333;">
            <p><strong>Package:</strong> <span style="color: #0891b2; font-weight: bold;">${pkg}</span></p>
            <p><strong>Client Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #0891b2;">
              <strong>Message:</strong><br/>${message}
            </div>
          </div>
        </div>
      `,
    };

    // 2. Customer ke liye Branded "Thank You" Mail
    const customerMailOptions = {
      from: `"Nuxatech Innovation" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Inquiry Received - Welcome to Nuxatech',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden;">
          <div style="background: #020617; padding: 30px; text-align: center;">
            <h1 style="color: #22d3ee; margin: 0; letter-spacing: 2px;">NUXATECH</h1>
            <p style="color: #94a3b8; font-size: 12px; margin-top: 5px; text-transform: uppercase;">Defining the Future of AI & Web</p>
          </div>

          <div style="padding: 30px; line-height: 1.6; color: #1f2937;">
            <h2 style="color: #111827;">Hi ${name},</h2>
            <p>Thank you for reaching out to us. We’ve successfully received your inquiry for the <strong>${pkg}</strong>.</p>
            <p>Our technical team is already looking into your requirements. We’ll call you on <strong>${phone}</strong> shortly to discuss how we can bring your vision to life.</p>
            
            <div style="margin: 30px 0; padding: 20px; background: #f0f9ff; border-radius: 12px; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #0369a1; font-weight: bold;">
                "Technology is best when it brings people together."
              </p>
            </div>

            <p>In the meantime, feel free to explore our latest updates:</p>
            
            <div style="text-align: center; margin-top: 20px;">
              <a href="https://yourwebsite.com" style="text-decoration: none; color: #0891b2; font-weight: bold; margin: 0 10px;">Website</a> |
              <a href="https://instagram.com/nuxatech" style="text-decoration: none; color: #0891b2; font-weight: bold; margin: 0 10px;">Instagram</a> |
              <a href="https://linkedin.com/company/nuxatech" style="text-decoration: none; color: #0891b2; font-weight: bold; margin: 0 10px;">LinkedIn</a>
            </div>
          </div>

          <div style="background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280;">
            <p style="margin: 0;">© 2026 Nuxatech Innovation Hub. All rights reserved.</p>
            <p style="margin: 5px 0 0 0;">Bihar, India</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}