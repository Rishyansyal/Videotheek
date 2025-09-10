const jwt = require("jsonwebtoken");
const authService = require("../service/auth.service");

const authController = {
  login: (req, res) => {
    const { username, password } = req.body;
    authService.authenticate(username, password, (err, user) => {
      if (err) return res.status(500).json({ message: "Server error" });
      if (!user) return res.status(401).json({ message: "Ongeldige inlog" });
      const token = jwt.sign(
        { id: user.customer_id, email: user.email },
        "jouw_jwt_secret",
        { expiresIn: "1h" }
      );
      res.json({ token });
    });
  }
};

module.exports = authController;