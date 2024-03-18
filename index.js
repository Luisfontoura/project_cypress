const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Importe o módulo 'path' para lidar com caminhos de arquivos
const app = express();
const port = 3000;

// Configuração do Body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Servindo arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
