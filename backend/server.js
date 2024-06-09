const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;
const dotenv=require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGO_URL, {});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(cors());
app.use(bodyParser.json());

// const itemsRouter = require('./routes');
// app.use('/api/items', itemsRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
