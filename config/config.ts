import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false
};

const MONGO_URI = process.env.MONGO_URI;
const SECRET = process.env.SECRET;

const MONGO = {
    url: MONGO_URI
};

const SERVER_PORT = 3001;

const SERVER = {
    port: SERVER_PORT
};

const config = {
    mongo_uri: MONGO_URI,
    mongo_options: MONGO_OPTIONS,
    jwt_secret: SECRET,
    port: SERVER_PORT
};

export default config;
