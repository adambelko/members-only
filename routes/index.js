const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const sign_up_controller = require("../controllers/sing_up_controller");
const log_in_out_controller = require("../controllers/log_in_out_controller");

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/sign-up", sign_up_controller.new_user_get);

router.post("/sign-up", sign_up_controller.new_user_post);

router.get("/log-in", log_in_out_controller.log_in_get);

router.post("/log-in", log_in_out_controller.log_in_post);

router.get("/log-out", log_in_out_controller.log_out_get);

router.get("/members", (req, res, next) => {
  res.render("members");
});

router.post("/new-message", (req, res, next) => {
  res.render("new-message", { title: "Not implemented yet" });
});

router.post("/new-message", (req, res, next) => {
  res.render("new-message", { title: "Not implemented yet" });
});

module.exports = router;
