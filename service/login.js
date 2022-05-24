import bcrypt from "bcrypt";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

async function login(username, password) {
  const oldUser = await User.findOne({ username }).lean();
  if (!oldUser) {
    return {
      status: 400,
      message: "This user is not regitered",
    };
  }
  const correctPass = await bcrypt.compare(password, oldUser.password);
  if (!correctPass) {
    return {
      status: 401,
      message: "wrong password",
    };
  }
  const secret = process.env.SECRET;

  let token = jwt.sign(
    {
      user_id: oldUser._id,
      role: oldUser.role,
      username: oldUser.username,
    },
    secret,
    { expiresIn: "7 days" }
  );
  return {
    status: 200,
    token,
  };
}

export default login;
