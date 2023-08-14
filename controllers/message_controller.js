const Message = require("../models/message");

exports.new_message_get = async (req, res, next) => {
  if (req.user) {
    try {
      const messages = await Message.find()
        .sort({ date: 1 })
        .populate("author", "username")
        .exec();

      res.render("members", { messages });
    } catch (error) {
      next(error);
    }
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
