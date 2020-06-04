import userRouter from './userRoute';
import productRouter from './productRoute';
import { Request, Response } from 'express';
import { context } from '../context';
import { handle } from '../services/errorHandler';

export module Routes {
 export function mount(app) {

  // INFO: Keep this method at top at all times
  app.all('/*', async (req: Request, res: Response, next) => {
   try {
      // create context
      res.locals.ctx = await context(req);

      next();
   } catch (e) {
      let error = handle(e);
      res.status(error.code).send({message: error.message});
   }
  });

  app.use('/user', userRouter);
  app.use('/product', productRouter);

  // Use for error handling
  app.use(function (err, req, res, next) {
    let error = handle(err);
    console.log(err);
    res.status(error.code).send({message: error.message});
  });

 }
}

