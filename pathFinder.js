const express = require('express');
const path = require('path');
const fs = require('fs');
const archiver = require('archiver');
const multer = require('multer');
const bodyParser = require('body-parser');

const shell = require('shelljs');


const app = express();

const passJsonPath = path.join(__dirname, 'pass.json');
if (!fs.existsSync(passJsonPath)) {
    console.error('pass.json file not found. Server will not start.');
    process.exit(1);
}


// Middleware to set Access-Control-Allow-Origin header
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// clones public from imagerepo on every start
const path = './public';
shell.cd(path);
shell.exec('git clone https://github.com/almarahimagerepo/imagerepo');

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
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ 
    limit: '50mb', 
    extended: true 
}));



app.get('/getImage', (req, res) => {
    // Accept password from either query (GET) or body (POST)
    const password = req.method === 'POST' ? req.body.password : req.query.password;
    const passData = JSON.parse(fs.readFileSync(path.join(__dirname, 'pass.json'), 'utf8'));
    const ADMIN_PASSWORD = passData.password;

    if (password !== ADMIN_PASSWORD) {

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

    archive.finalize();
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'public', 'test'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
app.post('/uploadImageKurtaCollect', (req, res) => {
    const password = req.query.password || req.body.password;
    const filename = req.query.filename || req.body.filename;
    const base64 = req.body.base64;
    const passData = JSON.parse(fs.readFileSync(path.join(__dirname, 'pass.json'), 'utf8'));
    const ADMIN_PASSWORD = passData.password;

    if (password !== ADMIN_PASSWORD) {
        console.log('Unauthorized upload attempt with password:', password);
        return res.status(401).json({ error: 'Unauthorized: Incorrect password' });
    }

    if (!filename || !base64) {
        console.log('Missing filename or base64 data');
        return res.status(400).json({ error: 'Missing filename or base64 data' });
    }

    const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const savePath = path.join(__dirname, 'public', 'kurtaCollectiom', filename);
    console.log('Saving file to:', savePath);
    fs.writeFile(savePath, buffer, err => {
        if (err) {
            console.error('Error saving file:', err);
            return res.status(500).json({ error: 'Failed to save image' });
        }
        console.log('File saved successfully:', filename);
        res.json({ message: 'Image uploaded successfully', filename });
    });
});

app.post('/uploadImageKurtaShalwar', (req, res) => {
    const password = req.query.password || req.body.password;
    const filename = req.query.filename || req.body.filename;
    const base64 = req.body.base64;
    const passData = JSON.parse(fs.readFileSync(path.join(__dirname, 'pass.json'), 'utf8'));
    const ADMIN_PASSWORD = passData.password;

    if (password !== ADMIN_PASSWORD) {
        console.log('Unauthorized upload attempt with password:', password);
        return res.status(401).json({ error: 'Unauthorized: Incorrect password' });
    }

    if (!filename || !base64) {
        console.log('Missing filename or base64 data');
        return res.status(400).json({ error: 'Missing filename or base64 data' });
    }

    const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const savePath = path.join(__dirname, 'public', 'kurtaShalwar', filename);
    console.log('Saving file to:', savePath);
    fs.writeFile(savePath, buffer, err => {
        if (err) {
            console.error('Error saving file:', err);
            return res.status(500).json({ error: 'Failed to save image' });
        }
        console.log('File saved successfully:', filename);
        res.json({ message: 'Image uploaded successfully', filename });
    });
});

// Princecoat
app.post('/uploadImagePrincecoat', (req, res) => {
    const password = req.query.password || req.body.password;
    const filename = req.query.filename || req.body.filename;
    const base64 = req.body.base64;
    const passData = JSON.parse(fs.readFileSync(path.join(__dirname, 'pass.json'), 'utf8'));
    const ADMIN_PASSWORD = passData.password;

    if (password !== ADMIN_PASSWORD) {
        console.log('Unauthorized upload attempt with password:', password);
        return res.status(401).json({ error: 'Unauthorized: Incorrect password' });
    }

    if (!filename || !base64) {
        console.log('Missing filename or base64 data');
        return res.status(400).json({ error: 'Missing filename or base64 data' });
    }

    const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const savePath = path.join(__dirname, 'public', 'princecoat', filename);
    console.log('Saving file to:', savePath);
    fs.writeFile(savePath, buffer, err => {
        if (err) {
            console.error('Error saving file:', err);
            return res.status(500).json({ error: 'Failed to save image' });
        }
        console.log('File saved successfully:', filename);
        res.json({ message: 'Image uploaded successfully', filename });
    });
});

// Shawls
app.post('/uploadImageShawls', (req, res) => {
    const password = req.query.password || req.body.password;
    const filename = req.query.filename || req.body.filename;
    const base64 = req.body.base64;
    const passData = JSON.parse(fs.readFileSync(path.join(__dirname, 'pass.json'), 'utf8'));
    const ADMIN_PASSWORD = passData.password;

    if (password !== ADMIN_PASSWORD) {
        console.log('Unauthorized upload attempt with password:', password);
        return res.status(401).json({ error: 'Unauthorized: Incorrect password' });
    }

    if (!filename || !base64) {
        console.log('Missing filename or base64 data');
        return res.status(400).json({ error: 'Missing filename or base64 data' });
    }

    const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const savePath = path.join(__dirname, 'public', 'shawls', filename);
    console.log('Saving file to:', savePath);
    fs.writeFile(savePath, buffer, err => {
        if (err) {
            console.error('Error saving file:', err);
            return res.status(500).json({ error: 'Failed to save image' });
        }
        console.log('File saved successfully:', filename);
        res.json({ message: 'Image uploaded successfully', filename });
    });
});

// Sherwani
app.post('/uploadImageSherwani', (req, res) => {
    const password = req.query.password || req.body.password;
    const filename = req.query.filename || req.body.filename;
    const base64 = req.body.base64;
    const passData = JSON.parse(fs.readFileSync(path.join(__dirname, 'pass.json'), 'utf8'));
    const ADMIN_PASSWORD = passData.password;

    if (password !== ADMIN_PASSWORD) {
        console.log('Unauthorized upload attempt with password:', password);
        return res.status(401).json({ error: 'Unauthorized: Incorrect password' });
    }

    if (!filename || !base64) {
        console.log('Missing filename or base64 data');
        return res.status(400).json({ error: 'Missing filename or base64 data' });
    }

    const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const savePath = path.join(__dirname, 'public', 'sherwani', filename);
    console.log('Saving file to:', savePath);
    fs.writeFile(savePath, buffer, err => {
        if (err) {
            console.error('Error saving file:', err);
            return res.status(500).json({ error: 'Failed to save image' });
        }
        console.log('File saved successfully:', filename);
        res.json({ message: 'Image uploaded successfully', filename });
    });
});

// Shoes
app.post('/uploadImageShoes', (req, res) => {
    const password = req.query.password || req.body.password;
    const filename = req.query.filename || req.body.filename;
    const base64 = req.body.base64;
    const passData = JSON.parse(fs.readFileSync(path.join(__dirname, 'pass.json'), 'utf8'));
    const ADMIN_PASSWORD = passData.password;

    if (password !== ADMIN_PASSWORD) {
        console.log('Unauthorized upload attempt with password:', password);
        return res.status(401).json({ error: 'Unauthorized: Incorrect password' });
    }

    if (!filename || !base64) {
        console.log('Missing filename or base64 data');
        return res.status(400).json({ error: 'Missing filename or base64 data' });
    }

    const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const savePath = path.join(__dirname, 'public', 'shoes', filename);
    console.log('Saving file to:', savePath);
    fs.writeFile(savePath, buffer, err => {
        if (err) {
            console.error('Error saving file:', err);
            return res.status(500).json({ error: 'Failed to save image' });
        }
        console.log('File saved successfully:', filename);
        res.json({ message: 'Image uploaded successfully', filename });
    });
});

// Turban
app.post('/uploadImageTurban', (req, res) => {
    const password = req.query.password || req.body.password;
    const filename = req.query.filename || req.body.filename;
    const base64 = req.body.base64;
    const passData = JSON.parse(fs.readFileSync(path.join(__dirname, 'pass.json'), 'utf8'));
    const ADMIN_PASSWORD = passData.password;

    if (password !== ADMIN_PASSWORD) {
        console.log('Unauthorized upload attempt with password:', password);
        return res.status(401).json({ error: 'Unauthorized: Incorrect password' });
    }

    if (!filename || !base64) {
        console.log('Missing filename or base64 data');
        return res.status(400).json({ error: 'Missing filename or base64 data' });
    }

    const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const savePath = path.join(__dirname, 'public', 'turban', filename);
    console.log('Saving file to:', savePath);
    fs.writeFile(savePath, buffer, err => {
        if (err) {
            console.error('Error saving file:', err);
            return res.status(500).json({ error: 'Failed to save image' });
        }
        console.log('File saved successfully:', filename);
        res.json({ message: 'Image uploaded successfully', filename });
    });
});

// Waistcoat
app.post('/uploadImageWaistcoat', (req, res) => {
    const password = req.query.password || req.body.password;
    const filename = req.query.filename || req.body.filename;
    const base64 = req.body.base64;
    const passData = JSON.parse(fs.readFileSync(path.join(__dirname, 'pass.json'), 'utf8'));
    const ADMIN_PASSWORD = passData.password;

    if (password !== ADMIN_PASSWORD) {
        console.log('Unauthorized upload attempt with password:', password);
        return res.status(401).json({ error: 'Unauthorized: Incorrect password' });
    }

    if (!filename || !base64) {
        console.log('Missing filename or base64 data');
        return res.status(400).json({ error: 'Missing filename or base64 data' });
    }

    const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const savePath = path.join(__dirname, 'public', 'waistcoat', filename);
    console.log('Saving file to:', savePath);
    fs.writeFile(savePath, buffer, err => {
        if (err) {
            console.error('Error saving file:', err);
            return res.status(500).json({ error: 'Failed to save image' });
        }
        console.log('File saved successfully:', filename);
        res.json({ message: 'Image uploaded successfully', filename });
    });
});

app.get('/delete', (req, res) => {
    const password = req.query.password;
    const passData = JSON.parse(fs.readFileSync(path.join(__dirname, 'pass.json'), 'utf8'));
    const ADMIN_PASSWORD = passData.password;

    if (password !== ADMIN_PASSWORD) {
        return res.status(401).json({ error: 'Unauthorized: Incorrect password' });
    }

    const dirs = [
        'kurtaCollectiom',
        'kurtaShalwar',
        'princecoat',
        'shawls',
        'sherwani',
        'shoes',
        'turban',
        'waistcoat'
    ];

    let deleteErrors = [];
    let deletedDirs = [];

    dirs.forEach(dir => {
        const dirPath = path.join(__dirname, 'public', dir);
        if (fs.existsSync(dirPath)) {
            const files = fs.readdirSync(dirPath);
            files.forEach(file => {
                const filePath = path.join(dirPath, file);
                try {
                    fs.unlinkSync(filePath);
                } catch (e) {
                    deleteErrors.push({ dir, file });
                }
            });
            deletedDirs.push(dir);
        } else {
            deleteErrors.push({ dir, error: 'Directory does not exist' });
        }
    });

    if (deleteErrors.length > 0) {
        return res.status(500).json({ error: 'Failed to delete some files', details: deleteErrors });
    }
    res.json({ message: `All files deleted from: ${deletedDirs.join(', ')}` });
});

app.listen(3000, () => {
    console.log('Server running on http://127.0.0.1:3000');
});
