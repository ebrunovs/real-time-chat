const http = require('http');
const express = require('express');
const aplicacao = express();

const servidorhttp = http.createServer(aplicacao);

aplicacao.use(express.static('public'));

servidorhttp.listen('1000');