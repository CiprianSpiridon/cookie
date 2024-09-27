const express = require('express');
const path = require('path');
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'http://localhost';
const COOKIE_NAME = process.env.COOKIE_NAME || 'mumzworld_next';
const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN || 'localhost';
const COOKIE_VALIDITY_AGE = process.env.COOKIE_VALIDITY_AGE || 30;
const COOKIE_VALUE = process.env.COOKIE_VALUE || '';

const app = express();
app.use(cookieParser());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.cookie(COOKIE_NAME, COOKIE_VALUE, {
        domain: `.${COOKIE_DOMAIN}`,
        path: '/',
        maxAge: 24 * 60 * 60 * 1000 * COOKIE_VALIDITY_AGE,
        httpOnly: true,
        secure: true
    });

    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on  ${HOST}:${PORT}`);
});
