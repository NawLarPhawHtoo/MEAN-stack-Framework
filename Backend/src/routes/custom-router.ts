import autobind from 'autobind-decorator';

import { Router as ExpressRouter } from 'express';

@autobind
export class Router {
  router: any;

  constructor(options?: any) {
    this.router = ExpressRouter(options);
  }

  // get(route: string, ...middlewares: any[]) {
  //   return this.methodWrapper(this.router.get, route, ...middlewares);
  // }

  // use(...middlewares: any[]) {
  //   return this.methodWrapper(this.router.use, ...middlewares);
  // }
  use(...middlewares: any[]) {
    return this.router.use;

  }

  toExpressRequestHandler() {
    return this.router;
  }

  // private methodWrapper(method: any, ...middlewares: any[]) {
  //   if (!method || typeof method !== 'function') {
  //     throw new Error('Invalid parameter method');
  //   }

  //   const args = middlewares.map(middleware => {
  //     if (typeof middleware === 'string') {
  //       return middleware;
  //     }

  //     if (middleware instanceof Router) {
  //       return middleware.toExpressRequestHandler();
  //     }

  //     return async (req: IRequestExtended, res: Response, next: NextFunction) => {
  //       try {
  //         await middleware(req, res);
  //       } catch (err) {
  //         return next(err);
  //       }

  //       // just to detect if its pipeline
  //       if ((res as any)._eventsCount > 2) {
  //         return res;
  //       }

  //       // workaround implemented for preventing falling into not-found.controller.
  //       if (!res.headersSent) {
  //         return next();
  //       }

  //       return res;
  //     };
  //   });

  //   return method.call(this.router, ...args);
  // }


}