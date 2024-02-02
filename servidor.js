const http = require('http');
const express = require('express');
const aplicacao = express();

const servidorhttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorhttp);

io.addListener('connection', (socket) => {
    console.log("Um usuario foi conectado.");
    socket.addListener('nova mensagem', (msg) =>{
        io.emit('nova mensagem', msg);
    });
});

aplicacao.use(express.static('public'));


servidorhttp.listen(1000, '10.0.0.248');