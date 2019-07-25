// import connectToDb from './db/connect';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from './core/logger/app-logger';
import morgan from 'morgan';
import config from './core/config/config.dev';
import userRouter from './routes/user';

const port = config.serverPort;
logger.stream = {
  write(message, encoding) {
    logger.info(message);
  }
};

// connectToDb();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev', { stream: logger.stream }));

// app.use('/user', userRouter);

// Index route
app.get('/', (req, res) => {
  res.send('Hello, API Server!');
});

app.listen(port, () => {
  logger.info('server started - ', port);
});
