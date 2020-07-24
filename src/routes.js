const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => res.json({ messae: 'Hello Word' }));

module.exports = routes;
