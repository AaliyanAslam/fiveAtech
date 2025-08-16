import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

// Rate limiting (simple in-memory store - use Redis in production for multiple instances)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 emails per 15 minutes per IP

function getRateLimitKey(request: Request): string {
  // In production, you might want to use a more sophisticated approach
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "unknown";
  return ip;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const userRequests = rateLimitMap.get(key) || [];
  
  // Clean old requests
  const validRequests = userRequests.filter((time: number) => now - time < RATE_LIMIT_WINDOW);
  rateLimitMap.set(key, validRequests);
  
  return validRequests.length >= RATE_LIMIT_MAX_REQUESTS;
}

function addRequest(key: string): void {
  const now = Date.now();
  const userRequests = rateLimitMap.get(key) || [];
  userRequests.push(now);
  rateLimitMap.set(key, userRequests);
}

export async function POST(req: Request) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(req);
    if (isRateLimited(rateLimitKey)) {
      console.log(`Rate limit exceeded for ${rateLimitKey}`);
      return NextResponse.json({
        success: false,
        error: "Too many requests. Please try again later."
      }, { status: 429 });
    }

    // Parse and validate request body
    const body = await req.json();
    const { firstName, lastName, email, phone, company, project, message } = body;

    // Validate required fields
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ 
        success: false, 
        error: "Missing required fields: firstName, lastName, email, and message are required." 
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ 
        success: false, 
        error: "Invalid email format." 
      }, { status: 400 });
    }

    // Validate message length (prevent spam)
    if (message.trim().length < 10) {
      return NextResponse.json({ 
        success: false, 
        error: "Message must be at least 10 characters long." 
      }, { status: 400 });
    }

    if (message.trim().length > 5000) {
      return NextResponse.json({ 
        success: false, 
        error: "Message is too long. Please keep it under 5000 characters." 
      }, { status: 400 });
    }

    // Basic spam detection
    const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations'];
    const messageText = message.toLowerCase();
    if (spamKeywords.some(keyword => messageText.includes(keyword))) {
      return NextResponse.json({ 
        success: false, 
        error: "Message contains prohibited content." 
      }, { status: 400 });
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables");
      return NextResponse.json({
        success: false,
        error: "Server configuration error. Please try again later."
      }, { status: 500 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
      secure: true,
      port: 465,
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError: any) {
      console.error("SMTP verification failed:", verifyError);
      return NextResponse.json({
        success: false,
        error: "Email service temporarily unavailable. Please try again later."
      }, { status: 503 });
    }

    // Sanitize input for email
    const sanitize = (str: string) => str.replace(/[<>]/g, '');
    
    const sanitizedData = {
      firstName: sanitize(firstName.trim()),
      lastName: sanitize(lastName.trim()),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      company: company?.trim() || '',
      project: project?.trim() || '',
      message: message.trim()
    };

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: sanitizedData.email,
      to: process.env.RECIPIENT_EMAIL || "contactfiveatech@gmail.com",
      subject: `New Contact Form Submission - ${sanitizedData.project || "General Inquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 3px solid #007bff; padding-bottom: 10px; margin-bottom: 20px;">
              🔔 New Contact Form Submission
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #007bff;">
              <h3 style="color: #333; margin-top: 0; margin-bottom: 15px;">Contact Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #333;">${sanitizedData.firstName} ${sanitizedData.lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${sanitizedData.email}" style="color: #007bff; text-decoration: none;">${sanitizedData.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
                  <td style="padding: 8px 0; color: #333;">${sanitizedData.phone || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td>
                  <td style="padding: 8px 0; color: #333;">${sanitizedData.company || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Project Type:</td>
                  <td style="padding: 8px 0; color: #333;">${sanitizedData.project || "Not specified"}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #fff; padding: 20px; border-radius: 8px; border: 1px solid #e9ecef;">
              <h3 style="color: #333; margin-top: 0; margin-bottom: 15px;">💬 Message:</h3>
              <p style="line-height: 1.6; color: #555; white-space: pre-wrap; word-wrap: break-word;">${sanitizedData.message}</p>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
            
            <div style="text-align: center; color: #666; font-size: 12px;">
              <p>📧 This email was sent from your website contact form</p>
              <p>🕒 Received on: ${new Date().toLocaleString()}</p>
              <p style="margin-top: 15px;">
                <strong>Quick Actions:</strong><br>
                <a href="mailto:${sanitizedData.email}" style="color: #007bff; text-decoration: none; margin: 0 10px;">Reply to ${sanitizedData.firstName}</a> |
                <a href="tel:${sanitizedData.phone}" style="color: #007bff; text-decoration: none; margin: 0 10px;">Call ${sanitizedData.phone}</a>
              </p>
            </div>
          </div>
        </div>
      `,
      // Plain text version for email clients that don't support HTML
      text: `
New Contact Form Submission

Contact Information:
Name: ${sanitizedData.firstName} ${sanitizedData.lastName}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone || "Not provided"}
Company: ${sanitizedData.company || "Not provided"}
Project Type: ${sanitizedData.project || "Not specified"}

Message:
${sanitizedData.message}

---
This email was sent from your website contact form.
Received on: ${new Date().toLocaleString()}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    // Add to rate limit after successful send
    addRequest(rateLimitKey);
    
    console.log(`Contact form email sent successfully from ${sanitizedData.email}`);

    return NextResponse.json({ 
      success: true, 
      message: "Your message has been sent successfully! We'll get back to you within 24 hours." 
    });

  } catch (error: any) {
    console.error("Contact form error:", error);
    
    // Don't expose internal errors to clients
    let errorMessage = "An unexpected error occurred. Please try again later.";
    let statusCode = 500;
    
    if (error.code === 'EAUTH') {
      errorMessage = "Email service authentication failed. Please try again later.";
      statusCode = 503;
    } else if (error.code === 'ENOTFOUND' || error.code === 'ETIMEDOUT') {
      errorMessage = "Email service temporarily unavailable. Please try again later.";
      statusCode = 503;
    }

    return NextResponse.json({
      success: false,
      error: errorMessage
    }, { status: statusCode });
  }
}