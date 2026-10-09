import nodemailer from "nodemailer";

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[character]!));

interface SendEmailParams {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function sendContactNotification({
  name,
  email,
  subject,
  message,
}: SendEmailParams) {
  let host = process.env.SMTP_HOST || process.env.EMAIL_HOST;
  const port = parseInt(process.env.SMTP_PORT || process.env.EMAIL_PORT || "587");
  const user = process.env.SMTP_USER || process.env.EMAIL_USER || process.env.SMTP_EMAIL;
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS || process.env.SMTP_PASSWORD;
  const recipientEmail = process.env.NOTIFICATION_EMAIL || process.env.CONTACT_EMAIL || "lxakshatseth90@gmail.com";

  // Sanitize host if accidentally set to an email address
  if (!host || host.includes("@")) {
    host = "smtp.gmail.com";
  }

  if (!user || !pass) {
    console.warn("SMTP credentials not fully provided in .env. Skipping email dispatch.");
    return { success: false, reason: "SMTP credentials missing" };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for 587
    auth: {
      user,
      pass,
    },
    connectionTimeout: 3000, // 3 seconds connection timeout
    greetingTimeout: 3000,
    socketTimeout: 5000,
  });

  const mailOptions = {
    from: `"${name} (Portfolio Contact)" <${user}>`,
    replyTo: email,
    to: recipientEmail,
    subject: `🚀 Portfolio Inquiry from ${name}: ${subject || "General Message"}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; background-color: #f9f9f9;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #e0e0e0; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <h2 style="color: #6d28d9; margin-top: 0;">New Portfolio Contact Message</h2>
          <hr style="border: none; border-top: 1px solid #eeeeee; margin: 15px 0;" />
          <p><strong>Sender Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Sender Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Subject:</strong> ${escapeHtml(subject || "N/A")}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f3f4f6; border-left: 4px solid #6d28d9; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap; color: #1f2937;"><strong>Message:</strong><br/>${escapeHtml(message)}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eeeeee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #9ca3af;">This message was submitted via your Portfolio Contact Form.</p>
        </div>
      </div>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return { success: true, messageId: info.messageId };
}
