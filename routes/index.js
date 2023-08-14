const express = require("express");
const router = express.Router();

const sign_up_controller = require("../controllers/sing_up_controller");
const log_in_out_controller = require("../controllers/log_in_out_controller");
const message_controller = require("../controllers/message_controller");
const Message = require("../models/message");

router.get("/", async (req, res, next) => {
  try {
    const messages = await Message.find()
      .sort({ date: 1 })
      .populate("author", "username")
      .exec();

    res.render("index", { messages });
  } catch (error) {
    next(error);
  }
});

router.get("/sign-up", sign_up_controller.new_user_get);

router.post("/sign-up", sign_up_controller.new_user_post);

router.get("/log-in", log_in_out_controller.log_in_get);

router.post("/log-in", log_in_out_controller.log_in_post);

router.get("/log-out", log_in_out_controller.log_out_get);

router.get("/members", message_controller.new_message_get);

router.post("/members", message_controller.new_message_post);

module.exports = router;
