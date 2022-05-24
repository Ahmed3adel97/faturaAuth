
async function adminCheck(req, res, next) {
    const {role} = req.params
    console.log(role);
  if (role !== "admin") {
    return res.status(401).json("Unauthorized");
  } else {
    next();
  }
}

async function userCheck(req, res, next) {
    const {role} = req.params
    console.log(role);
  if (role !== "user") {
    return res.status(401).json("Unauthorized");
  } else {
    next();
  }
}
export { adminCheck, userCheck };
