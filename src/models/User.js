import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String },
    picture: { type: String },
    googleId: { type: String, unique: true, sparse: true },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
