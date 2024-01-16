import * as dotenv from 'dotenv'
dotenv.config()

import cors from 'cors';
import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';

// All Routes
import routes from './routes/index.routes';

const app = express();
app.use(json());
app.use(cors());

const port = Number(process.env.APP_PORT) || 5050;

mongoose
  .connect(String(process.env.MONGODB_CONNECTION))
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => console.log(err));

app.use('/api', routes);
app.get('/', (req: express.Request, res: express.Response) =>
  res.json({
    message: 'Mongoose - Express - Typescript API Server is up.',
    version: process.env.API_VERSION,
  })
);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
