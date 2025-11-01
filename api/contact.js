import nodemailer from "nodemailer";

// Rate limiting store (in-memory)
const rateLimitStore = new Map();

// Rate limiting function
const checkRateLimit = (ip) => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, [now]);
    return true;
  }

  const requests = rateLimitStore
    .get(ip)
    .filter((time) => now - time < windowMs);

  if (requests.length >= maxRequests) {
    return false;
  }

  requests.push(now);
  rateLimitStore.set(ip, requests);
  return true;
};

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;

  for (const [ip, requests] of rateLimitStore.entries()) {
    const validRequests = requests.filter((time) => now - time < windowMs);
    if (validRequests.length === 0) {
      rateLimitStore.delete(ip);
    } else {
      rateLimitStore.set(ip, validRequests);
    }
  }
}, 5 * 60 * 1000); // Clean every 5 minutes

// Create nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.ionos.co.uk",
    port: 587,
    secure: false,
    auth: {
      user: process.env.OUTLOOK_EMAIL,
      pass: process.env.OUTLOOK_PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
  });
};

// Email template
const createEmailTemplate = (data) => {
  const { name, inquiryType, country, email, phone, subject, message } = data;

  return {
    from: `"Gateways Global" <${process.env.OUTLOOK_EMAIL}>`,
    to: "info@gatewaysglobal.co.uk",
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: bold; color: #1e40af; }
            .field-value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #3b82f6; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>Gateways Global - Import & Export Services</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Full Name:</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Inquiry Type:</div>
                <div class="field-value">${inquiryType}</div>
              </div>
              <div class="field">
                <div class="field-label">Country:</div>
                <div class="field-value">${country}</div>
              </div>
              <div class="field">
                <div class="field-label">Email Address:</div>
                <div class="field-value">${email}</div>
              </div>
              <div class="field">
                <div class="field-label">Phone Number:</div>
                <div class="field-value">${phone}</div>
              </div>
              <div class="field">
                <div class="field-label">Subject:</div>
                <div class="field-value">${subject}</div>
              </div>
              <div class="field">
                <div class="field-label">Message:</div>
                <div class="field-value">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Gateways Global contact form.</p>
              <p>Please respond to the sender at ${email}</p>
            </div>
          </div>
        </body>
      </html>
    `,
    replyTo: email,
  };
};

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Accept, Origin, X-Requested-With"
  );

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  console.log("📨 Contact form request received");
  console.log("Origin:", req.headers.origin);
  console.log("Body:", JSON.stringify(req.body, null, 2));

  try {
    // Rate limiting
    const ip =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return res.status(429).json({
        success: false,
        message: "Too many requests from this IP, please try again later.",
      });
    }

    const { name, inquiryType, country, email, phone, subject, message } =
      req.body;

    // Validation
    if (
      !name ||
      !inquiryType ||
      !country ||
      !email ||
      !phone ||
      !subject ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    const transporter = createTransporter();

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error("Transporter verification failed:", error);
      throw new Error("Email service configuration error");
    }

    const mailOptions = createEmailTemplate({
      name,
      inquiryType,
      country,
      email,
      phone,
      subject,
      message,
    });

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);

    res.status(200).json({
      success: true,
      message: "Message sent successfully! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
}
