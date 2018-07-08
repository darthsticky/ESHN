// === import node modules ===
import mongoose from 'mongoose';

// === import schemas ===
import Student from './schemas/studentSchema';

// === connect to mongo ===
// creates ESHN database if not found
mongoose.connect("mongodb://127.0.0.1/ESHN");
const db = mongoose.connection;
// log any errors to the console
db.on('error', console.error.bind(console, "database connection error:"));
// establish work to do upon successful connection
db.on('open', () => {
  console.log("Connected to db...");
});