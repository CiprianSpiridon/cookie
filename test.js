const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    // Set a cookie available to all subdomains
    res.cookie('myCookie', 'cookieValue', {
        domain: '.'+process.env.COOKIE_DOMAIN, // Leading dot makes it available to all subdomains
        path: '/',
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true,
        secure: true
    });

    // Serve the HTML page from a separate file
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
