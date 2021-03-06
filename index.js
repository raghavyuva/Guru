const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const config = require('./config.js');
const mongoose = require('mongoose');
require('./routes/product_routes')(app);
require('./routes/user_routes')(app);
require('./routes/report_routes')(app);
require('./routes/cart_routes')(app);
mongoose.Promise = global.Promise;


mongoose.connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({ "message": "Welcome" });
});


app.listen(PORT, () => {
    console.log("Server is listening on port",PORT);
});