const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.new_user_get = (req, res, next) => {
  res.render("sign_up");
};

exports.new_user_post = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(`${req.body.password}`, 10);

    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    const result = await user.save();
    res.redirect("/log-in");
  } catch (err) {
    return next(err);
  }
};
