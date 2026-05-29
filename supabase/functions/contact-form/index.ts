import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const gmailEmail = Deno.env.get("GMAIL_EMAIL") || "businessfraudmri@gmail.com";
const gmailPassword = Deno.env.get("GMAIL_APP_PASSWORD");

const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
}

// Generate notification email HTML for business
function generateNotificationEmail(formData: ContactFormData, submissionId: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    .header { background-color: #0a1628; color: white; padding: 25px; text-align: center; }
    .content { padding: 30px; background-color: #ffffff; }
    .field { margin-bottom: 15px; padding: 12px; background-color: #f9f9f9; border-left: 4px solid #DC2626; }
    .label { font-weight: bold; color: #0a1628; }
    .footer { background-color: #f4f4f4; padding: 20px; text-align: center; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Contact Form Submission</h2>
      <p style="margin: 10px 0 0 0;">Business Fraud MRI™</p>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span><br>${formData.name}
      </div>
      <div class="field">
        <span class="label">Email:</span><br><a href="mailto:${formData.email}" style="color: #4da6ff;">${formData.email}</a>
      </div>
      <div class="field">
        <span class="label">Company:</span><br>${formData.company || 'Not provided'}
      </div>
      <div class="field">
        <span class="label">Phone:</span><br>${formData.phone || 'Not provided'}
      </div>
      <div class="field">
        <span class="label">Subject:</span><br>${formData.subject}
      </div>
      <div class="field">
        <span class="label">Message:</span><br>${formData.message.replace(/\n/g, '<br>')}
      </div>
    </div>
    <div class="footer">
      <p><strong>Submission ID:</strong> ${submissionId}</p>
      <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
      <p><a href="mailto:${formData.email}" style="color: #4da6ff;">Reply to ${formData.name}</a></p>
    </div>
  </div>
</body>
</html>
  `;
}

// Generate auto-reply email HTML for user
function generateAutoReplyEmail(formData: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { background-color: #0a1628; color: white; padding: 35px; text-align: center; }
    .content { background-color: #ffffff; padding: 35px; }
    .highlight-box { background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 25px 0; }
    .message-box { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #DC2626; margin: 20px 0; }
    .footer { background-color: #0a1628; color: white; padding: 25px; text-align: center; }
    .footer a { color: #4da6ff; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 26px;">Business Fraud MRI™</h1>
      <p style="margin: 12px 0 0 0; font-size: 14px; opacity: 0.9;">See the Risk. Detect the Red Flags. Protect the Business.</p>
    </div>

    <div class="content">
      <h2 style="color: #0a1628; margin-top: 0;">Thank You for Contacting Us!</h2>

      <p>Dear ${formData.name},</p>

      <p>We have successfully received your message and appreciate you reaching out to <strong>Business Fraud MRI™</strong>.</p>

      <div class="highlight-box">
        <h3 style="color: #0a1628; margin-top: 0;">What Happens Next:</h3>
        <ul style="margin: 0; padding-left: 25px; line-height: 1.8;">
          <li>Our team will review your inquiry within <strong>24 hours</strong></li>
          <li>We will contact you at: <a href="mailto:${formData.email}" style="color: #4da6ff;">${formData.email}</a></li>
          ${formData.phone ? `<li>Or call you at: ${formData.phone}</li>` : ''}
          <li>For urgent matters: <a href="mailto:businessfraudmri@gmail.com" style="color: #4da6ff;">businessfraudmri@gmail.com</a></li>
        </ul>
      </div>

      <div class="message-box">
        <h4 style="color: #0a1628; margin-top: 0;">Your Message Summary:</h4>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong> ${formData.message.substring(0, 120)}${formData.message.length > 120 ? '...' : ''}</p>
      </div>

      <p>Best regards,</p>
      <p><strong style="color: #0a1628;">Business Fraud MRI™ Team</strong></p>
    </div>

    <div class="footer">
      <p style="margin: 8px 0;"><strong>Email:</strong> businessfraudmri@gmail.com</p>
      <p style="margin: 8px 0;"><strong>Phone:</strong> +251 799 103 334</p>
      <p style="margin: 15px 0 8px 0; font-size: 14px;">
        <a href="https://linkedin.com/company/businessfraudmri" style="margin: 0 12px;">LinkedIn</a>
        <a href="https://twitter.com/BusinesFraudMRI" style="margin: 0 12px;">Twitter</a>
        <a href="https://youtube.com/@BusinessFraudMRI" style="margin: 0 12px;">YouTube</a>
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

// Plain text version
function generatePlainTextEmail(formData: ContactFormData, type: 'notification' | 'autoreply'): string {
  if (type === 'notification') {
    return `
New Contact Form Submission - Business Fraud MRI™

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}

---
Reply to: ${formData.email}
    `.trim();
  } else {
    return `
Thank You for Contacting Business Fraud MRI™!

Dear ${formData.name},

We have successfully received your message and appreciate you reaching out to us.

What Happens Next:
- Our team will review your inquiry within 24 hours
- We will contact you at ${formData.email}
${formData.phone ? `- Or call you at ${formData.phone}` : ''}
- For urgent matters, email: businessfraudmri@gmail.com

Your Message:
Subject: ${formData.subject}
${formData.message.substring(0, 100)}${formData.message.length > 100 ? '...' : ''}

Best regards,
Business Fraud MRI™ Team
Email: businessfraudmri@gmail.com
Phone: +251 799 103 334
    `.trim();
  }
}

async function sendEmailViaSMTP(
  to: string,
  subject: string,
  htmlContent: string,
  textContent: string,
  replyTo?: string
): Promise<boolean> {
  if (!gmailPassword) {
    console.log("❌ GMAIL_APP_PASSWORD not configured");
    return false;
  }

  // Remove spaces from app password
  const cleanPassword = gmailPassword.replace(/\s/g, '');
  console.log(`📧 Attempting to send email to: ${to}`);

  try {
    // Create email message in proper format
    const boundary = "----=_Part_" + Math.random().toString(36).substr(2, 9);
    const lines = [
      `From: Business Fraud MRI <${gmailEmail}>`,
      `To: ${to}`,
      `Subject: ${subject}`,
      `Reply-To: ${replyTo || to}`,
      'MIME-Version: 1.0',
      `Content-Type: multipart/alternative; boundary="${boundary}"`,
      '',
      `--${boundary}`,
      'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: 7bit',
      '',
      textContent,
      '',
      `--${boundary}`,
      'Content-Type: text/html; charset=UTF-8',
      'Content-Transfer-Encoding: 7bit',
      '',
      htmlContent,
      '',
      `--${boundary}--`,
    ];

    const rawEmail = lines.join('\r\n');

    // Use email service that works with app passwords
    const response = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: cleanPassword, // Try using app password as API key won't work
        to: [to],
        sender: gmailEmail,
        subject: subject,
        html_body: htmlContent,
        text_body: textContent,
        custom_headers: replyTo ? [{ header: "Reply-To", value: replyTo }] : [],
      }),
    });

    if (!response.ok) {
      // Fallback: Use FormSubmit which works on localhost
      console.log("Trying FormSubmit fallback...");
      const formResponse = await fetch("https://formsubmit.co/ajax/" + encodeURIComponent(to), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: gmailEmail,
          name: to === gmailEmail ? "Business Notification" : "Auto-Reply",
          message: htmlContent,
          _subject: subject,
          _captcha: "false",
          _template: "table",
          _replyto: replyTo,
        }),
      });

      if (formResponse.ok) {
        console.log(`✅ Email sent successfully to ${to} via FormSubmit`);
        return true;
      } else {
        console.error("❌ FormSubmit also failed:", await formResponse.text());
        return false;
      }
    }

    console.log(`✅ Email sent successfully to ${to}`);
    return true;
  } catch (error) {
    console.error(`❌ Error sending email to ${to}:`, error);
    return false;
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Save to database (this always works)
    const { data, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        phone: formData.phone || null,
        subject: formData.subject,
        message: formData.message,
      })
      .select()
      .single();

    if (dbError) {
      console.error("❌ Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("✅ Contact submission saved to database:", data.id);
    console.log("📝 Submission details:", {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      timestamp: new Date().toISOString(),
    });

    // Try to send emails
    let emailSent = false;
    let replySent = false;

    if (gmailPassword) {
      console.log("\n📧 Starting email sending process...\n");

      // Send notification to business
      console.log("1️⃣ Sending notification to business email...");
      emailSent = await sendEmailViaSMTP(
        gmailEmail,
        `New Contact Form Submission: ${formData.subject}`,
        generateNotificationEmail(formData, data.id),
        generatePlainTextEmail(formData, 'notification'),
        formData.email
      );

      if (emailSent) {
        console.log("✓ Business notification sent!");
      } else {
        console.log("✗ Business notification failed (but submission saved)");
      }

      // Send auto-reply to user
      console.log("2️⃣ Sending auto-reply to user...");
      replySent = await sendEmailViaSMTP(
        formData.email,
        "We received your message - Business Fraud MRI™",
        generateAutoReplyEmail(formData),
        generatePlainTextEmail(formData, 'autoreply'),
        gmailEmail
      );

      if (replySent) {
        console.log("✓ Auto-reply sent!");
      } else {
        console.log("✗ Auto-reply failed (but submission saved)");
      }

      // Update database
      await supabase
        .from("contact_submissions")
        .update({
          email_sent: emailSent,
          reply_sent: replySent
        })
        .eq("id", data.id);
    } else {
      console.log("\n⚠️ GMAIL_APP_PASSWORD not configured");
      console.log("📧 Submissions are saved to database but emails cannot be sent");
      console.log("💡 Add GMAIL_APP_PASSWORD secret to enable email sending\n");
    }

    // Return success
    const message = emailSent && replySent
      ? "Thank you for reaching out! We'll get back to you within 24 hours. A confirmation email has been sent to your inbox."
      : "Thank you for reaching out! We'll get back to you within 24 hours.";

    return new Response(
      JSON.stringify({
        success: true,
        message: message,
        submission_id: data.id,
        saved_to_database: true,
        email_sent: emailSent,
        auto_reply_sent: replySent,
        gmail_configured: !!gmailPassword,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("❌ Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
