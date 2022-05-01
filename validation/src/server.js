const app = require('express')();
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');

app.use(express.json());
app.use(routes);

app.use(errorHandler);

app.listen(3333, () => {
  console.log('API rodando em http://localhost:3333');
  console.log('Banco de dados rodando em localhost:3308 senha:thadeu12 (workbench)');
});