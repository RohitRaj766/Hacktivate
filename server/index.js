const express = require('express');
require('dotenv').config()

const db = require('./config/db')
const bodyParser = require('body-parser');
const cors = require('cors');
const citizensRouter = require('./routes/citizensRouter');
// const politicalRouter = require('./routes/politicalRouter');
const governanceRouter = require('./routes/governanceRouter');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/citizens',citizensRouter);
// app.use('/political', politicalRouter);
app.use('/governance', governanceRouter);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server Runing at ${process.env.PORT}`);
})