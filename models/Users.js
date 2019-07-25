import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// define User Schema
const UserSchema = new Schema({
  userid: { type: String, required: true, min: 6, max: 20 },
  phone_number: { type: String, required: true },
  password: { type: String, required: true, min: 8, max: 20 }
});

export default mongoose.model('User', UserSchema);
