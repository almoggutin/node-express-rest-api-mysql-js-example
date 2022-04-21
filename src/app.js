const express = require('express');
const cors = require('cors');

const apiRouter = require('./routers/api.router');

require('./databases/mysql.db');

const app = express();

app.use(express.json());

const NODE_ENV = process.env.NODE_ENV || 'development';
const whitelist = [];
const corsOptions = {
    origin: function (origin = '', callback) {
        if (whitelist.indexOf(origin) !== -1) callback(null, true);
        else callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET, POST'],
    allowedHeaders: ['Content-Type'],
};
app.use(NODE_ENV === 'development' ? cors() : cors(corsOptions));

app.get('/', (req, res) => res.send());

app.use('/api', apiRouter);

module.exports = app;
