const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const token = req.cookies.token ;
  if (!token) {
    return res.redirect('/auth/login');
  }
  jwt.verify(token, "jouw_jwt_secret", (err, payloads) => {
    if (err) return res.redirect('/auth/login');
    req.user = payloads;
    next();
  });
}

function authorizeRole(allowedRoles = []) {
  return (req, res, next) => {
    if (!req.user) return res.redirect('/auth/login');
    if (!allowedRoles.length) return next();
    if (!req.user.role || !allowedRoles.includes(req.user.role)) {
      return res.status(403).render('error', { message: 'Toegang geweigerd', error: {} });
    }
    next();
  };
}

module.exports = { authenticateToken, authorizeRole };