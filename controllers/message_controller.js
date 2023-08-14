const Message = require("../models/message");

exports.new_message_get = (req, res, next) => {
  if (req.user) {
    res.render("members");
  } else {
    res.redirect("/");
  }
};

exports.new_message_post = async (req, res, next) => {
  const newMessage = new Message({
    title: req.body.messagetitle,
    body: req.body.messagebody,
    author: req.user.id,
    timestamp: Date.now(),
  });

  try {
    newMessage.save();
    res.render("members");
  } catch (error) {
    console.log(error);
  }
};
