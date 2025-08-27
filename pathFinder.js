const express = require('express');
const path = require('path');
const fs = require('fs');
const archiver = require('archiver');



const app = express();
// Enable CORS for all routes


// Middleware to set Access-Control-Allow-Origin header
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

app.get('/kurtaCollection', (req, res) => {
    const imagesDir = path.join(__dirname, 'public', 'kurtaCollectiom');
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

app.get('/sharwanis', (req, res) => {
    const imagesDir = path.join(__dirname, 'public', 'sherwani');
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

app.get('/kurtaShalwar', (req, res) => {
    const imagesDir = path.join(__dirname, 'public', 'kurtaShalwar');
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

app.get('/waistcoat', (req, res) => {
    const imagesDir = path.join(__dirname, 'public', 'waistcoat');
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

app.get('/princecoat', (req, res) => {
    const imagesDir = path.join(__dirname, 'public', 'princecoat');
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

app.get('/shoes', (req, res) => {
    const imagesDir = path.join(__dirname, 'public', 'shoes');
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

app.get('/turban', (req, res) => {
    const imagesDir = path.join(__dirname, 'public', 'turban');
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

app.get('/location', (req, res) => {
    const imagesDir = path.join(__dirname, 'public', 'location');
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

// Admin Commands
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.all('/getImage', (req, res) => {
    // Accept password from either query (GET) or body (POST)
    const password = req.method === 'POST' ? req.body.password : req.query.password;
    const passData = JSON.parse(fs.readFileSync(path.join(__dirname, 'pass.json'), 'utf8'));
    const ADMIN_PASSWORD = passData.password;
    console.log('Received password', password);
    if (password !== ADMIN_PASSWORD) {
        console.log('Unauthorized access attempt with password:', password);
        return res.status(401).json({ error: 'Unauthorized: Incorrect password' });
    }

    const kurtaCollectionDir = path.join(__dirname, 'public', 'kurtaCollectiom');
    const kurtaShalwarDir = path.join(__dirname, 'public', 'kurtaShalwar');
    const princecoatDir = path.join(__dirname, 'public', 'princecoat');
    const shawlsDir = path.join(__dirname, 'public', 'shawls');
    const sherwaniDir = path.join(__dirname, 'public', 'sherwani');
    const shoesDir = path.join(__dirname, 'public', 'shoes');
    const turbanDir = path.join(__dirname, 'public', 'turban');
    const waistcoatDir = path.join(__dirname, 'public', 'waistcoat');
    
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename=collections.zip');

    const archive = archiver('zip', { zlib: { level: 9 } });
    console.log('Starting to create archive');
    archive.on('error', err => {
        console.error('Archive error:', err);
        res.status(500).send({ error: err.message });
    });

    archive.pipe(res);

    archive.directory(kurtaCollectionDir, 'kurtaCollectiom');
    archive.directory(kurtaShalwarDir, 'kurtaShalwar');
    archive.directory(princecoatDir, 'princecoat');
    archive.directory(shawlsDir, 'shawls');
    archive.directory(sherwaniDir, 'sherwani');
    archive.directory(shoesDir, 'shoes');
    archive.directory(turbanDir, 'turban');
    archive.directory(waistcoatDir, 'waistcoat');
    console.log('Finalizing archive');
    archive.finalize();
});

app.listen(4000, () => {
    console.log('Server running on http://127.0.0.1:4000');
});
