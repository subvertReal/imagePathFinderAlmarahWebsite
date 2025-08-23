const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();
// Enable CORS for all routes


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/shawls', (req, res) => {
    const imagesDir = path.join(__dirname, 'public', 'shawls');
    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to read images directory' });
        }
        // Filter for image files (webp)
        const imageFiles = files.filter(file =>
            /\.(webp)$/i.test(file)
        );
        // Read and encode each image as base64
        const imageBase64 = imageFiles.map(file => {
            const filePath = path.join(imagesDir, file);
            const imageBuffer = fs.readFileSync(filePath);
            return {
                name: file,
                base64: `data:image/webp;base64,${imageBuffer.toString('base64')}`
            };
        });
        res.json(imageBase64);
    });
});



app.listen(4000, () => {
    console.log('Server running on http://127.0.0.1:4000');
});