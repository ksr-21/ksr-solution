import { config } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Contact from './models/Contact.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, projectOverview } = req.body;

    if (!fullName || !email || !projectOverview) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newContact = new Contact({
      fullName,
      email,
      projectOverview
    });

    await newContact.save();
    res.status(201).json({ message: 'Contact message saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// For verification purposes during development
app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error('Error fetching contacts:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
