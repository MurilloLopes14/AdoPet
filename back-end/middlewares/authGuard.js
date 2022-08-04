const User = require("../models/User");

const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const authGuard = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  //check if header haves a token
  if (!token) {
    return res.status(401).json({ errors: ["Acesso negado (Missing token)"] });
  }

  //check if Token is valid
  try {
    const verified = jwt.verify(token, secret);

    req.user = await User.findById(verified.id).select("-password");

    next();
  } catch (error) {
    res.status(401).json({ errors: ["Acesso negado (Invalid token)"] });
  }
};

module.exports = authGuard;
