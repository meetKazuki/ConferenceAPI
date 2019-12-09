import { config } from 'dotenv';
import cors from 'cors';
import debug from 'debug';
import express from 'express';
import morgan from 'morgan';
import errorHandler from './middleware/errorHandler';
import routes from './routes';

config();

const app = express();
const DEBUG = debug('dev');
const { NODE_ENV } = process.env;
const port = NODE_ENV === 'test' ? 6378 : process.env.PORT || 3000;

if (['development', 'production'].includes(NODE_ENV)) app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.options('*', cors());
app.use(routes);
app.use(errorHandler);

app.get('/', (_, res) => {
  res.status(200).json({
    status: 'success',
    message: 'welcome to MyLaw Conference',
  });
});

app.all('*', (_, res) => {
  res.status(404).json({
    status: 'error',
    error: 'endpoint doesn\'t exist',
  });
});

app.listen(port, () => DEBUG(`server running on ${port}`));

export default app;
