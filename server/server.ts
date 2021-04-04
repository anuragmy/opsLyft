import bodyParser from 'body-parser';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import authRoute from './routes/auth';
import covidRoute from './routes/covid';
import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

const NAMESPACE = 'Server';
const router = express();

/** Connect to Mongo */
if (config.mongo_uri && config.mongo_options) {
    mongoose
        .connect(config.mongo_uri, config.mongo_options)
        .then((result) => {
            logging.info(NAMESPACE, 'Mongo Connected');
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);
        });
}

/** Parse the body of the request */
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/** Rules of our API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/** Routes go here */
router.use('/api', authRoute);
router.use('/api', covidRoute);

router.listen(config.port, () => console.log(`listenong on ${config.port}`));
