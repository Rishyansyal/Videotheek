const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect('/auth/login');
  }
  jwt.verify(token, "jouw_jwt_secret", (err, user) => {
    if (err) return res.redirect('/auth/login');
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;