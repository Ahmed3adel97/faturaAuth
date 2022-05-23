import register from "../service/register.js";

async function registerController(req, res) {

  const { username, password, role } = req.body;
  if (!username || !password) {
    return res.status(400).send({ mesage: "Missing Input" });
  }
  const {status, ...data} = await register( username, password, role);
  return res.status(200).send(data);
}
export default registerController;