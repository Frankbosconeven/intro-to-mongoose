const router = require("express").Router;

const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUsers,
} = require("../controllers/user.controller");

const userRouter = router();

userRouter.route("/").post(createUser).get(getUsers);
userRouter
  .route("/:userId")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = userRouter;
