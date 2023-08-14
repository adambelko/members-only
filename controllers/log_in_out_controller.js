const passport = require("passport");

exports.log_in_get = (req, res, next) => {
  res.render("log_in");
};

exports.log_in_post = passport.authenticate("local", {
  successRedirect: "/members",
  failureRedirect: "/",
});

exports.log_out_get = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};
