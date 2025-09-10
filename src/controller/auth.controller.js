const jwt = require("jsonwebtoken");
const authService = require("../service/auth.service");

const authController = {
  renderLogin: (req, res, next) => {
    res.render('auth/login');
  },
  login: (req, res, next) => {
    const { username, password } = req.body;
    authService.authenticate(username, password, (err, user) => {
      if (err) return res.status(500).render('auth/login', { error: "Server error" });
      if (!user) return res.status(401).render('auth/login', { error: "Ongeldige inlog" });
      const token = jwt.sign(
        { id: user.customer_id, email: user.email },
        "jouw_jwt_secret",
        { expiresIn: "1h" }
      );
      res.cookie("token", token, { httpOnly: true });
      return res.redirect("/users");
    });
  }
};

module.exports = authController;