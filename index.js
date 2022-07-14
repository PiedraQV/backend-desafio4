const express = require('express');
const routerProductos = require('./routes/productos.js');

const PORT = 8080;
const app = express();
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use('/api', routerProductos);