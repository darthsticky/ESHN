// === import node modules ===
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

// === import local files ===
import { admin, user } from './routes/routes';

// === initialize server ===
const app = express();

// === set middleware ===
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// === set headers ===
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// --- disables 'x-powered-by' for security
app.disable('x-powered-by');

// === intentionally bypass authentication for timing purposes ===

// === initialize routes ===
// app.use('/user', user);
// app.use('/admin', admin);

// === serve up static files===
app.use(express.static(path.join(__dirname, './../client/dist')));

export default app;