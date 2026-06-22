// Simple Express Server for local development
// Run with: node server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('build'));

// Ensure submissions directory exists
const submissionsDir = path.join(__dirname, 'submissions');
if (!fs.existsSync(submissionsDir)) {
  fs.mkdirSync(submissionsDir, { recursive: true });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Contact form submission endpoint
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, phone, location, services, message, submittedAt } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, email, message',
      });
    }

    // Create submission object
    const submission = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      location: location || '',
      services: Array.isArray(services) ? services : [],
      message,
      submittedAt: submittedAt || new Date().toISOString(),
    };

    // Save to JSON file
    const filename = `submission_${submission.id}.json`;
    const filepath = path.join(submissionsDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(submission, null, 2));

    // Also append to a log file
    const logFile = path.join(submissionsDir, 'submissions.log');
    const logEntry = `${new Date().toISOString()} - ${name} (${email})\n`;
    fs.appendFileSync(logFile, logEntry);

    console.log('✅ Contact form saved:', submission);

    return res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: submission,
    });
  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message,
    });
  }
});

// Get all submissions (admin endpoint)
app.get('/api/submissions', (req, res) => {
  try {
    const files = fs.readdirSync(submissionsDir).filter(f => f.startsWith('submission_'));
    const submissions = files.map(file => {
      const data = fs.readFileSync(path.join(submissionsDir, file), 'utf8');
      return JSON.parse(data);
    });

    return res.json({
      success: true,
      count: submissions.length,
      submissions: submissions.sort((a, b) => 
        new Date(b.submittedAt) - new Date(a.submittedAt)
      ),
    });
  } catch (error) {
    console.error('❌ Error fetching submissions:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Contact API: POST http://localhost:${PORT}/api/contact`);
  console.log(`📋 View submissions: GET http://localhost:${PORT}/api/submissions`);
});
