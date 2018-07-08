// === import node modules ===
import mongoose from 'mongoose';

const studentSchema = mongoose.schema({
  name: String,
  imageUrl1: String,
  imageUrl2: String,
  school: String,

});

export default Student = mongoose.model('Student', studentSchema);