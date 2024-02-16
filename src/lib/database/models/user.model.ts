import { Schema, model, models } from "mongoose";

export interface UUser extends Document{
    clerkId: String;
    email: String;
    username: String;
    photo: String;
    firstName?: String;
    lastName?: String;
    planId?: Number;
    creditBalance?: Number; 
}

const UserSchema = new Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    photo: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String},
    planId: {type: Number, default: 1},
    creditBalance: {type: Number, default: 10}
});

const User = models?.User || model("User", UserSchema);

export default User;