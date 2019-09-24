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

// Add personal get route below