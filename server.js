/**
 * Server.js
 * @summary This will contatin all server side logic for
 * calling API's, updating the database, etc.
 * i.e. Things not involved with the frontend.
 */

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;
const qr = require('qr-image');

app.use(cors());

// report server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

/** 
 * Create GET route
 * @returns search result after calling both movie and show APIs
 */
app.get('/ping', (req, res) => {
    res.send({ Success: 'Server API successfully called!' });
});

app.get('/check-fabian', (req, res) => {
    res.send({ Success: 'Fabian checked in!' });
});

app.get('/check-miguel', (req, res) => {
    res.send({ Success: 'Miguel checked in!' });
});

app.get('/check-chy', (req, res) => {
    res.send({ Success: 'Chy checked in!' });
});

// Add personal get route below

// ASSIGNMENT 4 ENDPOINTS (ADD YOUR OWN ENDPOINT AND RETURN SOMETHING YOUR LIB DOES)
// Fabian's endpoint: returns a QR code generated using node package qr-image
app.get('/qrcode', (req, res) => {
    const text = 'We are PentaTech Inc';
    try {
        const img = qr.image(text);
        res.writeHead(200, { 'Content-Type': 'image/png' });
        img.pipe(res);
    } catch (e) {
        res.writeHead(414, { 'Content-Type': 'text/html' });
        res.end('<h1>414 Request-URI Too Large</h1>');
    }
});