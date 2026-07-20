const express = require("express");
const router = express.Router();

const {
  createUser,
  updateUser,
  deleteUser,
    getUsers,
} = require("../controllers/user.controller");

console.log("createUser is:", createUser);

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
