const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to set Access-Control-Allow-Origin header
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/shawls', (req, res) => {
    let directoryPath = path.join(__dirname, 'public/shawls');
    
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory: ' + err);
        }
        let imageFiles = files.filter(file => /\.(webp)$/.test(file));
        console.log(imageFiles); // Log the results to the console
        res.json(imageFiles); // Use res.json for proper JSON response
    });
});

app.get('/princecoat', (req, res) => {
    let directoryPath = path.join(__dirname, 'public/princecoat'); // Fixed the typo
    
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory: ' + err);
        }
        let imageFiles = files.filter(file => /\.(webp)$/.test(file));
        console.log(imageFiles); // Log the results to the console
        res.json(imageFiles); // Use res.json for proper JSON response
    });
});

app.get('/kurtaCollectiom', (req, res) => {
    let directoryPath = path.join(__dirname, 'public/kurtaCollectiom'); // Fixed the typo
    
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory: ' + err);
        }
        let imageFiles = files.filter(file => /\.(webp)$/.test(file));
        console.log(imageFiles); // Log the results to the console
        res.json(imageFiles); // Use res.json for proper JSON response
    });
});

app.get('/kurtaShalwar', (req, res) => {
    let directoryPath = path.join(__dirname, 'public/kurtaShalwar'); // Fixed the typo
    
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory: ' + err);
        }
        let imageFiles = files.filter(file => /\.(webp)$/.test(file));
        console.log(imageFiles); // Log the results to the console
        res.json(imageFiles); // Use res.json for proper JSON response
    });
});

app.get('/sherwani', (req, res) => {
    let directoryPath = path.join(__dirname, 'public/sherwani'); // Fixed the typo
    
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory: ' + err);
        }
        let imageFiles = files.filter(file => /\.(webp)$/.test(file));
        console.log(imageFiles); // Log the results to the console
        res.json(imageFiles); // Use res.json for proper JSON response
    });
});

app.get('/shoes', (req, res) => {
    let directoryPath = path.join(__dirname, 'public/shoes'); // Fixed the typo
    
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory: ' + err);
        }
        let imageFiles = files.filter(file => /\.(webp)$/.test(file));
        console.log(imageFiles); // Log the results to the console
        res.json(imageFiles); // Use res.json for proper JSON response
    });
});

app.get('/turban', (req, res) => {
    let directoryPath = path.join(__dirname, 'public/turban'); // Fixed the typo
    
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory: ' + err);
        }
        let imageFiles = files.filter(file => /\.(webp)$/.test(file));
        console.log(imageFiles); // Log the results to the console
        res.json(imageFiles); // Use res.json for proper JSON response
    });
});

app.get('/waistcoat', (req, res) => {
    let directoryPath = path.join(__dirname, 'public/waistcoat'); // Fixed the typo
    
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory: ' + err);
        }
        let imageFiles = files.filter(file => /\.(webp)$/.test(file));
        console.log(imageFiles); // Log the results to the console
        res.json(imageFiles); // Use res.json for proper JSON response
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
