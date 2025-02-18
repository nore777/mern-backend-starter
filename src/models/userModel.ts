import { Schema, model } from 'mongoose';
import { Role } from '../types/role.ts';


interface IUser {
  username: string,
  email: string,
  password: string,
  roles: Role[],
  avatar: string
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [String],
    required: true,
    default: ['user']
  },
  avatar: {
    type: String,
    default: "https://www.example.com/example.jpg"
  }
}, { timestamps: true })

const User = model<IUser>('User', userSchema)

export default User