const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparse middleware 
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').monogoURI

// Connect to mongo
mongoose
    .connect(db, {useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
