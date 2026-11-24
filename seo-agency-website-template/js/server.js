const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const site = path.join(__dirname, '..');

app.use(express.static(site));

app.get('/', (req, res) => {
    res.sendFile(path.join(site, 'index.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(site, 'about.html'));
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(site, 'contact.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});