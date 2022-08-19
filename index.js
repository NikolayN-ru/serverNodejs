require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router');

const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000'
}));
app.use('/api', router);

const start = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URL, {
        await mongoose.connect('mongodb://admin:admin@localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('mongo-connected');

        app.listen(PORT, () => console.log(`server running PORT ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start();
