import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';

@Middleware({type: 'after'})
export class APIErrorHandler implements ExpressErrorMiddlewareInterface {

  public error(error: any, request: any, response: any, next: (err: any) => any) {
    if (error instanceof  Error) {
      error = error.message;
    }
    response.status(500)
      .send({success: false, error});
    next({success: false, error});
  }

}