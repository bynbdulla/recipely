const isSignedIn = (req, res, next) => {
  console.log("is signed in");
  if (!req.session.user) return res.redirect("/auth/sign-in");
  next();
};

module.exports = isSignedIn;
