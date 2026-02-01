import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password, studentName, email, type, amount, deliveryDate } = body;

    // 1. Verify Password
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid admin password" }, { status: 401 });
    }

    if (!studentName || !email || !type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 2. Configure Transporter (Reuse existing config logic)
    const smtpHost = process.env.ZOHO_SMTP_HOST || "smtp.zoho.com";
    const smtpPort = Number(process.env.ZOHO_SMTP_PORT || 465);
    const fromEmail = process.env.ZOHO_SMTP_USER || process.env.SMTP_FROM_EMAIL || "";
    const smtpPassword = process.env.ZOHO_SMTP_PASS || process.env.SMTP_PASSWORD || "";

    if (!fromEmail || !smtpPassword) {
      return NextResponse.json({ error: "SMTP configuration missing" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: fromEmail,
        pass: smtpPassword,
      },
    });

    // 3. Prepare Email Content
    let subject = "";
    let htmlContent = "";

    const commonStyle = `font-family: Inter, system-ui, sans-serif; background: #0b0b12; color: #eaeaf0; padding: 20px;`;
    const containerStyle = `max-width: 600px; margin: 0 auto; background: #121220; padding: 30px; border-radius: 12px; border: 1px solid #2a2a3b;`;
    const headingStyle = `color: #ffffff; font-size: 24px; margin-bottom: 20px;`;
    const textStyle = `color: #b5b6c6; font-size: 16px; line-height: 1.6; margin-bottom: 16px;`;
    const highlightStyle = `color: #8d93ff; font-weight: bold;`;

    if (type === "start") {
      subject = "Project Confirmation & Roadmap | ProjectKaro";
      htmlContent = `
        <div style="${commonStyle}">
          <div style="${containerStyle}">
            <img src="https://projectkaro.com/logo.png" alt="ProjectKaro" width="120" style="margin-bottom:30px;">
            <h1 style="${headingStyle}">Project Locked In 🚀</h1>
            <p style="${textStyle}">Hi ${studentName},</p>
            <p style="${textStyle}">We've successfully kickstarted your project. Here are the details:</p>
            
            <div style="background: #181828; padding: 20px; border-radius: 8px; border: 1px solid #2a2a3b; margin: 20px 0;">
              <p style="margin: 5px 0; color: #9fa1b6;"><strong>Total Amount:</strong> <span style="${highlightStyle}">${amount}</span></p>
              <p style="margin: 5px 0; color: #9fa1b6;"><strong>Delivery Date:</strong> <span style="${highlightStyle}">${deliveryDate}</span></p>
            </div>

            <p style="${textStyle}">We will share the first progress update soon. Sit back and relax!</p>
            <p style="${textStyle}">Cheers,<br>Team ProjectKaro</p>
          </div>
        </div>
      `;
    } else if (type === "end") {
      subject = "Project Delivered Successfully | ProjectKaro";
      htmlContent = `
        <div style="${commonStyle}">
          <div style="${containerStyle}">
            <img src="https://projectkaro.com/logo.png" alt="ProjectKaro" width="120" style="margin-bottom:30px;">
            <h1 style="${headingStyle}">Project Completed ✅</h1>
            <p style="${textStyle}">Hi ${studentName},</p>
            <p style="${textStyle}">Your project has been fully delivered. We hope you liked our service!</p>
            <p style="${textStyle}">All the best for your viva. If you have any last-minute questions, we are just a message away.</p>
            <p style="${textStyle}">Thank you for choosing ProjectKaro.</p>
            <p style="${textStyle}">Cheers,<br>Team ProjectKaro</p>
          </div>
        </div>
      `;
    } else if (type === "custom") {
      const { customTitle, customBody } = body;
      if (!customTitle || !customBody) {
        return NextResponse.json({ error: "Missing custom title or body" }, { status: 400 });
      }
      subject = `${customTitle} | ProjectKaro`;
      // Convert newlines to breaks for simple formatting
      const formattedBody = customBody.replace(/\n/g, "<br/>");

      htmlContent = `
        <div style="${commonStyle}">
          <div style="${containerStyle}">
            <img src="https://projectkaro.com/logo.png" alt="ProjectKaro" width="120" style="margin-bottom:30px;">
            <h1 style="${headingStyle}">${customTitle}</h1>
            <p style="${textStyle}">Hi ${studentName},</p>
            <div style="${textStyle}">${formattedBody}</div>
            <br/>
            <p style="${textStyle}">Cheers,<br>Team ProjectKaro</p>
          </div>
        </div>
      `;
    }

    // 4. Send Email
    await transporter.sendMail({
      from: `"ProjectKaro" <${fromEmail}>`,
      to: email,
      subject,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Admin Email Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
