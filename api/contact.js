// Vercel Serverless Function for handling contact form submissions
// This saves form data to a JSON file or database

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
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
        phone,
        location,
        services: Array.isArray(services) ? services : [],
        message,
        submittedAt: submittedAt || new Date().toISOString(),
      };

      // Log to console (Vercel will store in logs)
      console.log('New Contact Form Submission:', submission);

      // Return success response
      return res.status(200).json({
        success: true,
        message: 'Contact form submitted successfully',
        data: submission,
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }

  if (req.method === 'GET') {
    // Optional: Get all submissions (only for authenticated requests in production)
    try {
      return res.status(200).json({
        message: 'Contact API endpoint is working',
        methods: ['POST'],
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }

  return res.status(405).json({
    error: 'Method not allowed',
  });
}
