import bcrypt from "bcrypt";
import User from "../models/user.js";

async function register(username, password, role) {
  const oldUser = await User.findOne({ username }).lean();
  console.log(oldUser);
  if (oldUser) {
    return {
      status: 409,
      message: "User already exist",
    };
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const newUser = new User({
    username,
    password: hash,
    role
  });
  await newUser.save();
  return {
      status: 200,
      message: "welcome to our system",
  }
}
export default register;
