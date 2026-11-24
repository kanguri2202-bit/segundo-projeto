const express = require('express');
const path = require('path');

const app = express();
const site = path.join(__dirname, 'seo-agency-website-template');

app.use(express.static(site));

app.get('/', (req, res) => res.sendFile(path.join(site, 'index.html')));
app.get('/sobre', (req, res) => res.sendFile(path.join(site, 'about.html')));
app.get('/servicos', (req, res) => res.sendFile(path.join(site, 'service.html')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Site rodando na porta ${PORT}`);
});