const app = require('express')();
const routes = require('./routes');

app.use(routes);

app.listen(3333, () => console.log('Servidor rodando na porta 3333'));