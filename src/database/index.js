const mongoose = require('mongoose');
const mongoDB_URI = 'mongodb://localhost:27017/andela_test_db'; // Note: Replace with a local MongoDB instance
// Connect to MongoDB, and log error if it occurs
mongoose.connect(mongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    config: {
        autoIndex: false
    },
    promiseLibrary: global.Promise
}).catch((err) => {
    console.log(err);
    console.log('Unable to connect to MongoDB');
});


// When the connection opens, log the event
mongoose.connection.on('open', () => {
    console.log('Database is connected');
});

// If the connection throws an error, log the event
mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected, log the event
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});