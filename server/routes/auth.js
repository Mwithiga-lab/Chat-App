import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import pool from '../db.js';
import multer from 'multer';
import path from 'path';

// Multer storage for avatars
const storage = multer.diskStorage({
  destination: 'uploads/avatars/',
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

const router = express.Router();

// ✅ Register route (handles file + data)
router.post('/register', upload.single('avatar'), async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const avatarPath = req.file ? `/uploads/avatars/${req.file.filename}` : null;

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (username, email, password, avatar) VALUES ($1, $2, $3, $4) RETURNING *',
      [username, email, hashedPassword, avatarPath]
    );

    const user = result.rows[0];
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Login route (handled by controller)
import { login } from '../controllers/authController.js';
router.post('/login', login);

export default router;
