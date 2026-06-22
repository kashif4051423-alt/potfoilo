# Backend Setup Guide

This portfolio includes a backend for handling contact form submissions and saving them to the database.

## Two Backend Options

### Option 1: Local Development Server (Recommended for Development)

#### Installation
```bash
npm install
```

#### Run Both Frontend and Backend Together
```bash
npm run dev
```

This will start:
- React app on `http://localhost:3000`
- Express server on `http://localhost:5000`

#### Or Run Separately

**Terminal 1 - Frontend:**
```bash
npm start
```

**Terminal 2 - Backend:**
```bash
npm run server
```

#### API Endpoints

**Submit Contact Form:**
```
POST http://localhost:5000/api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "location": "New York",
  "services": ["Web Development", "UI/UX Design"],
  "message": "I need a website..."
}
```

**View All Submissions:**
```
GET http://localhost:5000/api/submissions
```

#### Data Storage
- Submissions are saved in the `submissions/` folder as JSON files
- A log file `submissions.log` keeps track of all submissions

---

### Option 2: Vercel Deployment (For Production)

The project is already configured for Vercel serverless functions.

#### Deploy Steps

1. **Push your code to GitHub:**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Vercel will automatically deploy

3. **Update Frontend API URL:**
   - In `ContactForm.jsx`, update the API URL:
   ```javascript
   fetch('https://your-vercel-project.vercel.app/api/contact', {
     // ...
   })
   ```

#### Vercel API Endpoint
```
POST https://your-vercel-project.vercel.app/api/contact
```

---

## File Structure

```
portafolio-Nahuel-main/
├── api/
│   └── contact.js           # Vercel serverless function
├── submissions/             # Local submissions storage
│   ├── submission_*.json    # Individual submissions
│   └── submissions.log      # Submission log
├── server.js               # Express server for local development
├── vercel.json             # Vercel configuration
├── package.json            # Dependencies
└── BACKEND_SETUP.md        # This file
```

---

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
REACT_APP_API_URL=http://localhost:5000
NODE_ENV=development
```

---

## Features

✅ Contact form data saved to backend
✅ Email sent to your Gmail
✅ Success message shown to user
✅ Auto-closes after 3 seconds
✅ CORS enabled for cross-origin requests
✅ Error handling and validation
✅ Ready for production deployment

---

## Troubleshooting

**Port 5000 already in use:**
```bash
# Find process using port 5000
lsof -i :5000

# Kill process
kill -9 <PID>
```

**CORS Error:**
- Make sure the backend is running
- Check that the API URL in ContactForm.jsx matches your backend URL

**Submissions not saving:**
- Check that `submissions/` folder exists
- Verify write permissions on the folder
- Check browser console for error messages

---

## Support

For issues or questions about the backend setup, check the logs:

**Frontend Console (Browser):**
- Open DevTools → Console tab
- Check for API errors

**Backend Console:**
- Look for ✅ or ❌ messages
- Check for error stack traces

---
