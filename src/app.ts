import express from 'express';
import morgan from 'morgan';
import router from './routes/index.routes';
import path from 'path';
const app = express();

// settings
app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));

// routes
app.use('/api', router);

// upload images
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;
