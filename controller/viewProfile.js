import viewProfile from "../service/viewProfile.js";

async function viewProfieController(req, res) {

  const {status, ...data} = await viewProfile(req.user.user_id);
  return res.status(200).send(data);
}
export default viewProfieController;