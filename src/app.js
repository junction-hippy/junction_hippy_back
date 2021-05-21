import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import HelloController from './controllers/HelloController';
import { errorHandler, logHandler } from './middlewares/ErrorHandler';

const app = express();

// App middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Add router
app.use('/', HelloController);

app.use(logHandler);
app.use(errorHandler);

export default app;
