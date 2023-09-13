// server.js

const express = require('express');
const multer = require('multer');

const app = express();
const PORT = 3000;

// Set up storage engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'File uploaded successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
