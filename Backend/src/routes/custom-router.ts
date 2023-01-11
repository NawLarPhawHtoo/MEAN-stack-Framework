import autobind from 'autobind-decorator';

import { NextFunction, Router as ExpressRouter } from 'express';

@autobind
export class Router {
  router: any;

  constructor(options?: any) {
    this.router = ExpressRouter(options);
  }

  get(route: string, ...middlewares: any[]) {
    return this.methodWrapper(this.router.get, route, ...middlewares);
  }

  post(route: string, ...middlewares: any[]) {
    return this.methodWrapper(this.router.post, route, ...middlewares);
  }

  patch(route: string, ...middlewares: any[]) {
    return this.methodWrapper(this.router.patch, route, ...middlewares);
  }

  delete(route: string, ...middlewares: any[]) {
    return this.methodWrapper(this.router.delete, route, ...middlewares);
  }

  use(...middlewares: any[]) {
    return this.methodWrapper(this.router.use, ...middlewares);
  }

  toExpressRequestHandler() {
    return this.router;
  }

  private methodWrapper(method: any, ...middlewares: any[]) {
    if (!method || typeof method !== 'function') {
      throw new Error('Invalid parameter method');
    }

    const args = middlewares.map(middleware => {
      if (typeof middleware === 'string') {
        return middleware;
      }

      if (middleware instanceof Router) {
        return middleware.toExpressRequestHandler();
      }

      return async (req: Request, res: Response, next: NextFunction) => {
        try {
          await middleware(req, res);
        } catch (err) {
          return next(err);
        }
        next();

        // just to detect if its pipeline
        if ((res as any)._eventsCount > 2) {
          return res;
        }

        return res;
      };
    });

    return method.call(this.router, ...args);
  }
}