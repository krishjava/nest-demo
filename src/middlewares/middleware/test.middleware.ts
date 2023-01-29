import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class TestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(403).send({ error: 'you are not authorized...' });
    }
    console.log('test middleware.... ' + req.body?.id);
    // throw new Error('Method not implemented.');
    next();
  }
}
