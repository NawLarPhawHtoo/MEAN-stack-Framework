import express, { Request } from "express";

import { Router } from "./custom-router";

import { userRouter, postRouter, categoryRouter } from "./v1";

// import { authRouter } from "./auth";

const v1ApiRoutes = new Router();

const authApiRoutes = new Router();

const baseRouter = new Router();

// const authApiRouter = express.Router();

try {
  // authApiRoutes.use('/', authRouter);
  v1ApiRoutes.use('/users', userRouter);
  v1ApiRoutes.use('/posts', postRouter);
  v1ApiRoutes.use('/categories', categoryRouter);

  baseRouter.use('/api/v1', v1ApiRoutes);

  // baseRouter.use('/api/v1', authApiRoutes)

  // authApiRouter.use('/api/auth', authRouter);

  baseRouter.use('*', (req: Request) => {
    throw (`API route not found, ${req.originalUrl}`);
  });

  // authApiRouter.use('*', (req: Request) => {
  //   throw (`API route not found, ${req.originalUrl}`);
  // });
} catch (err) {
  throw err;
}

export const router = baseRouter.toExpressRequestHandler();

// export const authRoute=baseRouter.toExpressRequestHandler();

