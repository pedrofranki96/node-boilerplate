import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());

app.use('/api', router);
app.get('/', (req: any, res: any) => {
  return res.send('Eae');
});

export default app;
