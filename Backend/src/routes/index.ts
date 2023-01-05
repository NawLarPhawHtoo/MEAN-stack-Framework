import { Request } from "express";

import { Router } from "./custom-router";

import { userRouter,postRouter } from "./v1";

const v1ApiRoutes = new Router();

const baseRouter =new  Router();

try {
  v1ApiRoutes.use('/users', userRouter);
  v1ApiRoutes.use('/posts', postRouter);

  baseRouter.use('/api/v1', v1ApiRoutes);

  baseRouter.use('*', (req: Request) => {
    throw (`API route not found, ${req.originalUrl}`);
  });
} catch (err) {
  throw err;
}

export const router=baseRouter.toExpressRequestHandler();

