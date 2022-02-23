import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
    id: String,
    fullname: String,
    username: String,
    email: String,
    password: String
},{
    timestamps: true
});
