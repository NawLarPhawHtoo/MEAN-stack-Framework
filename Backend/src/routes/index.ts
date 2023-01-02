import { Request } from "express";

import { Router } from "./custom-router";

import { userRouter } from "./v1";

const v1ApiRoutes = new Router();

const baseRouter =new  Router();

try {
  v1ApiRoutes.use('/users', userRouter);

  baseRouter.use('/api/v1', v1ApiRoutes);

  baseRouter.use('*', (req: Request) => {
    throw (`API route not found, ${req.originalUrl}`);
  });
} catch (err) {
  throw err;
}

export const router=baseRouter.toExpressRequestHandler();

