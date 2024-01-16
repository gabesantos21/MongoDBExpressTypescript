import { Schema, model } from 'mongoose';
import { IUser } from '../types/user/user.model';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  age: { type: Number, requireed: true },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const User = model<IUser>('User', userSchema);

export default User;
