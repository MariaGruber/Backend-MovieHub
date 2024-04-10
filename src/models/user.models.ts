import { timeStamp } from "console";
import { Schema, model } from "mongoose";

interface UserSchema {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<UserSchema>(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);

const UserModel = model<UserSchema>("user", userSchema);

export default UserModel;
