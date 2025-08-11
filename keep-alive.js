const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

// Rota principal
app.get('/', (req, res) => {
    res.json({
        status: 'online',
        message: 'CS2 Discord Bot está funcionando!',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Rota de health check
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        memory: process.memoryUsage(),
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// Rota de ping
app.get('/ping', (req, res) => {
    res.send('pong');
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`🌐 Keep-alive server rodando na porta ${port}`);
});

module.exports = app;