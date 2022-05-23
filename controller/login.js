import login from "../service/login.js";

async function loginController(req, res) {

  const { username, password, role } = req.body;
  if (!username || !password) {
    return res.status(400).send({ mesage: "Missing Input" });
  }
  const {status, ...data} = await login( username, password);
  return res.status(200).send(data);
}
export default loginController;