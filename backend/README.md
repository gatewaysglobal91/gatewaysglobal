# World Traders Backend

This is the backend server for handling email functionality using nodemailer with Outlook SMTP.

## Features

- ✅ Contact form email handling via Outlook SMTP
- ✅ Professional HTML email templates
- ✅ Rate limiting and security middleware
- ✅ CORS configuration
- ✅ Input validation and error handling
- ✅ Anti-spam email authentication setup

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Outlook SMTP

You need to set up an **App Password** for your Outlook account:

1. **Enable 2-Factor Authentication** on your Outlook account
2. **Generate App Password**:
   - Go to [Outlook Security Settings](https://account.microsoft.com/security)
   - Select "App passwords"
   - Generate a new app password for "Mail"
3. **Update .env file**:
   ```env
   OUTLOOK_EMAIL=info@gatewaysglobal.co.uk
   OUTLOOK_PASSWORD=your_app_password_here
   FRONTEND_URL=http://localhost:5173
   ```

### 3. Start Backend Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### POST /api/contact
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "inquiryType": "Trade Inquiry",
  "country": "United Kingdom",
  "email": "john@example.com",
  "phone": "+44 123 456 7890",
  "subject": "Business Inquiry",
  "message": "Hello, I would like to..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! We'll get back to you soon."
}
```

### GET /api/health
Health check endpoint.

## Email Anti-Spam Configuration

To prevent emails from going to spam, configure these DNS records:

### 1. SPF Record
Add this TXT record to your domain DNS:
```
v=spf1 include:outlook.com ~all
```

### 2. DKIM (DomainKeys Identified Mail)
Enable DKIM in your Outlook admin center for better deliverability.

### 3. DMARC Policy
Add this TXT record to `_dmarc.yourdomain.com`:
```
v=DMARC1; p=quarantine; rua=mailto:admin@yourdomain.com
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OUTLOOK_EMAIL` | Your Outlook email address | Yes |
| `OUTLOOK_PASSWORD` | Outlook app password | Yes |
| `FRONTEND_URL` | Frontend URL for CORS | Yes |
| `PORT` | Server port (default: 3001) | No |
| `NODE_ENV` | Environment mode | No |

## Security Features

- Rate limiting (5 requests per 15 minutes per IP)
- Helmet.js for security headers
- Input validation and sanitization
- CORS protection
- Error logging without exposing sensitive data

## Development

The backend uses ES modules and modern JavaScript features. Make sure to:

1. Use `.js` extension for imports in Node.js
2. Set `"type": "module"` in package.json
3. Use `import` instead of `require`

## Production Deployment

1. Set `NODE_ENV=production` in environment variables
2. Use a process manager like PM2
3. Set up proper logging
4. Configure SSL/TLS certificates
5. Set up monitoring and alerts
