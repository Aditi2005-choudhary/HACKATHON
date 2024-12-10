const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save files in the 'uploads' directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Add a timestamp to the file name
    }
});

const upload = multer({ storage });

// Serve static files (optional if needed)
app.use(express.static('public'));

// Endpoint to handle image upload
app.post('/identify', upload.single('image'), (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ error: 'No file uploaded!' });
    }

    // Simulate identification process (replace this with real logic)
    const result = {
        name: "Rose",
        description: "A beautiful flower commonly found in gardens."
    };

    res.json(result);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
