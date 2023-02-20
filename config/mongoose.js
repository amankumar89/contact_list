// require the library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://0.0.0.0/contact_list_db');

// aquire the connection
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'connection error:'));

// up and running
db.once('open', function () {
  console.log('Successfully connected to database');
});
