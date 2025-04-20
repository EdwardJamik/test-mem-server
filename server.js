const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();

const imageFolder = path.join(__dirname, 'uploads');
app.use('/image', express.static(imageFolder));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.use(cors({
    origin: true,
    credentials: true,
}));

app.use('/api/', require('./routes/mem.route'));
app.use((req, res) => res.status(404).json({ error: 'not found' }));

module.exports = app;