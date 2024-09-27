const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'http://localhost';
app.listen(PORT, () => {
    console.log(`Server is running on  ${HOST}:${PORT}`);
});
