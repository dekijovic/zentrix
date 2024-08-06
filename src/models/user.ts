import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
}

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

const User = mongoose.model('User', userSchema);


export default User;