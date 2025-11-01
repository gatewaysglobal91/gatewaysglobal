import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api/contact", limiter);

// Handle preflight requests
app.options("*", cors());

// CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      // const allowedOrigins = [
      //   "http://localhost:4173", // Vite preview
      //   "http://127.0.0.1:4173",
      //   "https://gatewaysglobal.vercel.app", // Production
      // ];

      // // Check if origin matches allowed origins or Vercel preview deployments
      // const isAllowed =
      //   allowedOrigins.includes(origin) || origin.endsWith(".vercel.app");

      // if (isAllowed) {
      callback(null, true);
      // } else {
      //   console.log("Blocked CORS request from origin:", origin);
      //   callback(new Error("Not allowed by CORS"));
      // }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "Origin",
      "X-Requested-With",
    ],
  })
);

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Create nodemailer transporter for Outlook
const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.ionos.co.uk",
    port: 587,
    secure: false, // true for 465, false for other ports
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

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  console.log("📨 Contact form request received");
  console.log("Origin:", req.headers.origin);
  console.log("Body:", JSON.stringify(req.body, null, 2));

  try {
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

    res.json({
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
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    origin: req.headers.origin,
    userAgent: req.headers["user-agent"],
  });
});

// Test CORS endpoint
app.get("/api/test-cors", (req, res) => {
  res.json({
    message: "CORS is working!",
    origin: req.headers.origin,
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});

app.listen(PORT, () => {
  console.log(`📧 Email service configured for Outlook`);
});
