const express = require('express');
require('dotenv').config()

const db = require('./config/db')
const bodyParser = require('body-parser');
const cors = require('cors');
// const adminRouter = require('./routes/adminRoute');
const citizensRouter = require('./routes/citizensRouter');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.use('/admin',adminRouter);
app.use('/citizens',citizensRouter);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server Runing at ${process.env.PORT}`);
})