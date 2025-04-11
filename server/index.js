const express = require('express');
require('dotenv').config();

const db = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const citizensRouter = require('./routes/citizensRouter');
// const politicalRouter = require('./routes/politicalRouter');
const governanceRouter = require('./routes/governanceRouter');
// const feedbackRouter = require('./routes/feedback'); // ✅ added feedback route

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/citizens', citizensRouter);
app.use('/governance', governanceRouter);
// app.use('/feedback', feedbackRouter); // ✅ added middleware

// Default Route (optional)
app.get('/', (req, res) => {
  res.send('Backend server is running...');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
