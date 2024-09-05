import express from 'express';

/**
 * Add middlewares to the given express application.
 * @param {express.Express} api of The express application.
 */
const injectMiddlewares = (api) => {
  api.use(express.json({ limit: '200mb' }));
};

export default injectMiddlewares;
