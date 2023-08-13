const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/sign-up", function (req, res, next) {
  res.render("sign-up", { title: "Not implemented yet" });
});

router.post("/sign-up", function (req, res, next) {
  res.render("sign-up", { title: "Not implemented yet" });
});

router.get("/log-in", function (req, res, next) {
  res.render("log-in", { title: "Not implemented yet" });
});

router.post("/log-in", function (req, res, next) {
  res.render("log-in", { title: "Not implemented yet" });
});

router.post("/new-message", function (req, res, next) {
  res.render("new-message", { title: "Not implemented yet" });
});

router.post("/new-message", function (req, res, next) {
  res.render("new-message", { title: "Not implemented yet" });
});

module.exports = router;
