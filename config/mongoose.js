// require the library
import mongoose from "mongoose";
// uri
const uri = 'mongodb+srv://amankumaroo784:amank784@cluster0.3ba1r6o.mongodb.net/contacts?retryWrites=true&w=majority&appName=Cluster0';

export const connectDB = () => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('db connected')
  })
  .catch(err => console.log(err))
};