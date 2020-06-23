//const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'POST'],
  allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Import Routes
const productRoute = require('./routes/products');
//const usersRoute = require('./routes/users');
const orderRoute = require('./routes/orders');

// Use Routes
//app.use('/api/users', usersRoute);
app.use('/api/products', productRoute);
//app.use('/api/auth', authRoute);
app.use('/api/orders', orderRoute);


module.exports = app;
