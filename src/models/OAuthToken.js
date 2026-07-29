import mongoose from 'mongoose';

const oauthTokenSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    accessToken: { type: String, required: true },
    refreshToken: { type: String },
    expiryDate: { type: Date, required: true },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true }
);

oauthTokenSchema.index({ userId: 1, email: 1 }, { unique: true });

export default mongoose.model('OAuthToken', oauthTokenSchema);
