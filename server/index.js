import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import apiRoutes from './routes/apiRoutes.js';
import postRoutes from './routes/postRoutes.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/openai', apiRoutes);

app.get('/', async (req, res) => {
        res.send('Hello from Open AI')});

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
     console.log('Starting server on port http://localhost:8080'));
    }
    catch (error) {
        console.log(error);
    }
}

startServer();