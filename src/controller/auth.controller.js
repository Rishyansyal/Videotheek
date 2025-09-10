const jwt = require("jsonwebtoken");
const authService = require("../service/auth.service");

const authController = {
  renderLogin: (req, res) => {
    res.render("auth/login");
  },
  login: (req, res) => {
    const { username, password } = req.body || {};
    if (!username || !password) {
      return res.status(400).render("auth/login", { error: "Vul e-mail en wachtwoord in" });
    }
    authService.authenticate(username, password, (err, user) => {
      if (err) return res.status(500).render("auth/login", { error: "Serverfout" });
      if (!user) return res.status(401).render("auth/login", { error: "Ongeldige inlog" });
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        "jouw_jwt_secret",
        { expiresIn: "1h" }
      );
      res.cookie("token", token, { httpOnly: true });
      return res.redirect("/users");
    });
  },
  logout: (req, res) => {
    res.clearCookie("token");
    res.redirect("/auth/login");
  },
};

module.exports = authController;