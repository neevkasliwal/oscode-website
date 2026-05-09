const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, '..', 'contacts.json');

// Helper: read contacts from file
function readContacts() {
  if (!fs.existsSync(DB_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

// Helper: write contacts to file
function writeContacts(contacts) {
  fs.writeFileSync(DB_FILE, JSON.stringify(contacts, null, 2), 'utf-8');
}

// POST a new contact message
router.post('/', (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const contacts = readContacts();
    contacts.push({ name, email, message, createdAt: new Date().toISOString() });
    writeContacts(contacts);

    console.log(`New contact from ${name} <${email}>`);
    res.status(201).json({ success: true, message: 'Message submitted successfully!' });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

// GET all contacts (for admin review)
router.get('/', (req, res) => {
  const contacts = readContacts();
  res.json(contacts);
});

module.exports = router;
