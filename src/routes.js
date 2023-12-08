import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({
    message: 'Foi',
  });
});

export default routes;
