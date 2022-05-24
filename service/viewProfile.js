import User from "../models/user.js";

async function viewProfile(id) {
  const user = await User.findById(id).lean();
  return {
    status: 200,
    ...user,
  };
}

export default viewProfile;
