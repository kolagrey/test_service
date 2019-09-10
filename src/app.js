const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const { userRouter } = require('./entities');
require('./database');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(userRouter);

// default route
app.use('', (req, res) => {
    res.status(404).json({ message: 'Not found'})
});

app.use((req, res) => {
    res.status(400).json({ error: req.error })
});

module.exports = app;