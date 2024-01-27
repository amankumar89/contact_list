// require the library
const mongoose = require('mongoose');

// uri
const uri = 'mongodb+srv://amankumaroo784:amank784@cluster0.3ba1r6o.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected')
})
.catch(err => console.log(err))