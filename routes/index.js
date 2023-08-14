const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");

const User = require("../models/user");

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/sign-up", function (req, res, next) {
  res.render("sign-up");
});

router.post("/sign-up", async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(`${req.body.password}`, 10);

    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    const result = await user.save();
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
});

router.get("/log-in", function (req, res, next) {
  res.render("log-in");
});

router.post("/log-in", function (req, res, next) {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  });
});

router.post("/new-message", function (req, res, next) {
  res.render("new-message", { title: "Not implemented yet" });
});

router.post("/new-message", function (req, res, next) {
  res.render("new-message", { title: "Not implemented yet" });
});

module.exports = router;
