import { Router, Request, Response } from 'express';
import { resourceLimits } from 'worker_threads';

const router = Router();

router.use('/important', (req: Request, res: Response) => {
  return res.send({
    oi: 'Boraa',
  });
});

export default router