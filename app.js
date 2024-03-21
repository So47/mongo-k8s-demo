const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Connection to MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/test';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected successfully to MongoDB");
});

app.get('/', (req, res) => {
    res.send('Hello World! MongoDB is connected.');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
