import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure Node.js runtime on Vercel (required for nodemailer)
export const runtime = "nodejs";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

function getExtension(filename: string): string {
  const i = filename.lastIndexOf(".");
  return i >= 0 ? filename.slice(i).toLowerCase() : "";
}

function validateFile(file: File): string | null {
  const ext = getExtension(file.name);
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    return "Only PDF, DOC, and DOCX files are allowed.";
  }
  if (!ALLOWED_TYPES.includes(file.type) && ![".doc", ".docx"].includes(ext)) {
    return "Invalid file type.";
  }
  if (file.size > MAX_FILE_SIZE) {
    return "File size must be 2 MB or less.";
  }
  return null;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = (formData.get("fullName") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const phone = (formData.get("phone") as string)?.trim() || "";
    const projectTitle = (formData.get("projectTitle") as string)?.trim() || "";
    const projectType = (formData.get("projectType") as string)?.trim() || "";
    const message = (formData.get("message") as string)?.trim() || "";
    const abstract = formData.get("abstract") as File | null;

    // Server-side validation
    if (!fullName) {
      return NextResponse.json({ error: "Full name is required." }, { status: 400 });
    }
    if (!email) {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    }
    if (!validateEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!phone) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }
    // projectTitle and message are OPTIONAL on the client form (only fullName, email,
    // phone, and projectType are required), so the API must not reject empty values.
    let buffer: Buffer | null = null;
    let fileName = "";

    if (abstract && abstract instanceof File && abstract.size > 0) {
      const fileError = validateFile(abstract);
      if (fileError) {
        return NextResponse.json({ error: fileError }, { status: 400 });
      }
      buffer = Buffer.from(await abstract.arrayBuffer());
      fileName = abstract.name || "abstract.pdf";
    }

    // Env config: prefer Zoho-specific vars, fallback to legacy
    const smtpHost = process.env.ZOHO_SMTP_HOST || "smtp.zoho.com";
    const smtpPort = Number(process.env.ZOHO_SMTP_PORT || 465);
    const fromEmail = process.env.ZOHO_SMTP_USER || process.env.SMTP_FROM_EMAIL || "";
    const password = process.env.ZOHO_SMTP_PASS || process.env.SMTP_PASSWORD || "";
    const recipients = process.env.SUBMISSION_EMAIL_RECIPIENTS;

    if (!fromEmail || !password) {
      console.error("Missing SMTP credentials in environment.");
      return NextResponse.json(
        { error: "Email configuration is missing. Please try again later." },
        { status: 500 }
      );
    }

    const toList = recipients
      ? recipients.split(",").map((e) => e.trim()).filter(Boolean)
      : ["contact@projectkaro.com", "akshay@projectkaro.com"];

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // SSL on 465; use STARTTLS for 587
      auth: {
        user: fromEmail,
        pass: password,
      },
    });

    // Verify SMTP connection & credentials for clearer diagnostics
    try {
      await transporter.verify();
    } catch (verifyErr) {
      console.error("SMTP verify failed:", verifyErr);
      return NextResponse.json(
        { error: "Email service is not configured correctly. Please try again later." },
        { status: 500 }
      );
    }

    const adminMailOptions = {
      from: `"ProjectKaro" <${fromEmail}>`,
      to: toList,
      replyTo: email,
      subject: `[ProjectKaro] New project submission: ${projectTitle || "Untitled project"}`,
      text: [
        `New project submission from ProjectKaro website.`,
        `Full Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Project Title: ${projectTitle || "Not specified"}`,
        `Project Type: ${projectType || "Not specified"}`,
        ``,
        `Message / Project Description:`,
        message || "Not provided",
      ].join("\n"),
      html: [
        `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#0b0b12;padding:24px;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;color:#eaeaf0;">`,
        `<tr><td align="center">`,
        `<table role="presentation" cellpadding="0" cellspacing="0" width="560" style="max-width:560px;background:#121220;border:1px solid #2a2a3b;border-radius:12px;overflow:hidden">`,
        `<tr><td style="padding:24px 24px 12px">`,
        `<img src="https://projectkaro.com/logo.png" alt="ProjectKaro" width="150" style="display:block;margin-bottom:20px;border:0;">`,
        `<h2 style="margin:0 0 6px;font-size:20px;line-height:1.3;color:#ffffff">New project submission</h2>`,
        `<p style="margin:0;color:#b5b6c6;font-size:14px">From ProjectKaro website</p>`,
        `</td></tr>`,
        `<tr><td style="padding:0 24px 16px">`,
        `<div style="background:#181828;border:1px solid #2a2a3b;border-radius:8px;padding:16px">`,
        `<p style="margin:0 0 8px;color:#9fa1b6"><strong>Full Name:</strong> <span style="color:#eaeaf0">${fullName}</span></p>`,
        `<p style="margin:0 0 8px;color:#9fa1b6"><strong>Email:</strong> <span style="color:#eaeaf0">${email}</span></p>`,
        `<p style="margin:0 0 8px;color:#9fa1b6"><strong>Phone:</strong> <span style="color:#eaeaf0">${phone}</span></p>`,
        `<p style="margin:0;color:#9fa1b6"><strong>Project Title:</strong> <span style="color:#eaeaf0">${projectTitle || "Not specified"}</span></p>`,
`<p style="margin:0;color:#9fa1b6"><strong>Project Type:</strong> <span style="color:#eaeaf0">${projectType || "Not specified"}</span></p>`,
        `</div>`,
        `</td></tr>`,
        `<tr><td style="padding:0 24px 16px">`,
        `<p style="margin:0;color:#d5d6e6;font-size:15px">Message / Description:</p>`,
        `<pre style="white-space:pre-wrap;background:#181828;border:1px solid #2a2a3b;border-radius:8px;padding:12px;color:#eaeaf0;font-size:14px;line-height:1.5;margin:8px 0 0">${(message || "Not provided").replace(/</g, "&lt;")}</pre>`,
        `</td></tr>`,
        buffer ? `<tr><td style="padding:0 24px 24px">
        <p style="margin:0;color:#9fa1b6;font-size:13px">Attachment: ${fileName}</p>
        </td></tr>` : "",
        `</table>`,
        `</td></tr>`,
        `</table>`,
      ].join(""),
      attachments: buffer ? [
        {
          filename: fileName,
          content: buffer,
        },
      ] : [],
    };

    // User confirmation email (no attachment)
    const userHtml = [
      `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#0b0b12;padding:24px;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;color:#eaeaf0;">`,
      `<tr><td align="center">`,
      `<table role="presentation" cellpadding="0" cellspacing="0" width="560" style="max-width:560px;background:#121220;border:1px solid #2a2a3b;border-radius:12px;overflow:hidden">`,
      `<tr><td style="padding:24px 24px 0">`,
      `<img src="https://projectkaro.com/logo.png" alt="ProjectKaro" width="150" style="display:block;margin-bottom:20px;border:0;">`,
      `<h2 style="margin:0 0 8px;font-size:22px;line-height:1.3;color:#ffffff">Thank you for reaching out</h2>`,
      `<p style="margin:0 0 16px;color:#b5b6c6;font-size:15px">From Team ProjectKaro</p>`,
      `</td></tr>`,
      `<tr><td style="padding:0 24px 16px">`,
      `<p style="margin:0;color:#d5d6e6;font-size:15px;line-height:1.6">We’ve received your project submission and will get back to you within <strong>24 hours</strong>. Below is a summary of what you sent us:</p>`,
      `</td></tr>`,
      `<tr><td style="padding:0 24px 16px">`,
      `<div style="background:#181828;border:1px solid #2a2a3b;border-radius:8px;padding:16px">`,
      `<p style="margin:0 0 8px;color:#9fa1b6"><strong>Full Name:</strong> <span style="color:#eaeaf0">${fullName}</span></p>`,
      `<p style="margin:0 0 8px;color:#9fa1b6"><strong>Email:</strong> <span style="color:#eaeaf0">${email}</span></p>`,
      `<p style="margin:0 0 8px;color:#9fa1b6"><strong>Phone:</strong> <span style="color:#eaeaf0">${phone}</span></p>`,
      `<p style="margin:0 8px 0;color:#9fa1b6"><strong>Project Title:</strong> <span style="color:#eaeaf0">${projectTitle || "Not specified"}</span></p>`,
`<p style="margin:8px 0 0;color:#9fa1b6"><strong>Project Type:</strong> <span style="color:#eaeaf0">${projectType || "Not specified"}</span></p>`,
      `</div>`,
      `</td></tr>`,
      `<tr><td style="padding:0 24px 16px">`,
      `<p style="margin:0;color:#d5d6e6;font-size:15px">Message / Description:</p>`,
      `<pre style="white-space:pre-wrap;background:#181828;border:1px solid #2a2a3b;border-radius:8px;padding:12px;color:#eaeaf0;font-size:14px;line-height:1.5;margin:8px 0 0">${(message || "Not provided").replace(/</g, "&lt;")}</pre>`,
      `</td></tr>`,
      `<tr><td style="padding:0 24px 24px">`,
      `<p style="margin:0;color:#9fa1b6;font-size:14px">If you need to add more details, simply reply to this email or contact us at <a href="mailto:contact@projectkaro.com" style="color:#8d93ff">contact@projectkaro.com</a>.</p>`,
      `</td></tr>`,
      `</table>`,
      `</td></tr>`,
      `</table>`,
    ].join("");

    const userMailOptions = {
      from: `"ProjectKaro" <${fromEmail}>`,
      to: email,
      subject: `Thanks for reaching out, from ProjectKaro`,
      html: userHtml,
    };

    try {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(userMailOptions);
    } catch (sendErr) {
      console.error("SMTP send failed:", sendErr);
      return NextResponse.json(
        { error: "We couldn’t send emails at the moment. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Submit project error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or contact contact@projectkaro.com." },
      { status: 500 }
    );
  }
}

// Simple SMTP health check to verify env + transport
export async function GET() {
  try {
    const smtpHost = process.env.ZOHO_SMTP_HOST || "smtp.zoho.com";
    const smtpPort = Number(process.env.ZOHO_SMTP_PORT || 465);
    const fromEmail = process.env.ZOHO_SMTP_USER || process.env.SMTP_FROM_EMAIL || "";
    const password = process.env.ZOHO_SMTP_PASS || process.env.SMTP_PASSWORD || "";

    if (!fromEmail || !password) {
      return NextResponse.json({ ok: false, error: "Missing SMTP credentials" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: fromEmail, pass: password },
    });

    await transporter.verify();
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const message = err?.response || err?.message || "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
