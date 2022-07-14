const router = require('express').Router();
const Producto = require('../item.js');

router.get('/articulo', (req, res) => {
    res.send(Producto.articulo);
});

router.get('/articulo/:id', (req, res) => {
    let product = Producto.articulo.find(product => product.id === Number(req.params.id));
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ error: 'Product no found' });
    }
});

router.post('/articulo', (req, res) => {
    let { title, price, thumbnail } = req.body;
    const product = { title, price, thumbnail };
    product.id = Producto.articulo.length + 1;
    Producto.articulo.push(product);
    res.send(Producto.articulo);
});

router.put('/articulo/:id', (req, res) => {
    let { title, price, thumbnail } = req.body;
    let index = Producto.articulo.findIndex(item => item.id === Number(req.params.id));
    if (index >= 0) {
        Producto.articulo[index] = { title, price, thumbnail };
        Producto.articulo[index].id = Number(req.params.id);
        res.send(Producto.articulo[index]);
    } else {
        res.status(404).send({ error: 'Product no found' });
    }
});

router.delete('/articulo/:id', (req, res) => {
    let index = Producto.articulo.findIndex(product => product.id === Number(req.params.id));
    if (index >= 0) {
        Producto.articulo.splice(index, 1);
        res.send({ message: 'Product Deleted' });
    } else {
        res.status(404).send({ error: 'Product no found' });
    }
})

module.exports = router;