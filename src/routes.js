import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ messae: 'Hello Word' }));

export default routes;
