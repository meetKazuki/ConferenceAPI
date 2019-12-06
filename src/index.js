import { config } from 'dotenv';
import debug from 'debug';
import express from 'express';
import morgan from 'morgan';

config();

const app = express();
const DEBUG = debug('dev');
const { NODE_ENV } = process.env;
const port = NODE_ENV === 'test' ? 6378 : process.env.PORT || 3000;

if (['development', 'production'].includes(NODE_ENV)) app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (_, res) => res.status(301).redirect('/docs'));

app.all('*', (_, res) => {
  res.status(404).json({
    status: 'error',
    error: 'endpoint doesn\'t exist',
  });
});

app.listen(port, () => DEBUG(`server running on ${port}`));

export default app;
