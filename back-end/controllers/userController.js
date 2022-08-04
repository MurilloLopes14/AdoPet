const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { default: mongoose, mongo } = require("mongoose");
const secret = process.env.SECRET;

//GenerateToken

const createToken = (id) => {
  return jwt.sign({ id }, secret, {
    expiresIn: "7d",
  });
};

//Create and sign user
const register = async (req, res) => {
  const { name, email, password } = req.body;

  //Check if User exists
  const user = await User.findOne({ email });

  if (user) {
    res.status(422).json({ errors: ["Por favor, utilize outro E-mail!"] });
    return;
  }

  //bcrypt passwword
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  //Then, create user
  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
  });

  if (!newUser) {
    res.status(422).json({
      errors: ["Ocorreu um erro, por favor tente novamente mais tarde"],
    });
    return;
  }

  res.status(201).json({
    _id: newUser.id,
    token: createToken(newUser._id),
  });
};

//Login user
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(422).json({ errors: ["usuário não encontrado"] });
    return;
  }

  //Check if password's the same
  if (!(await bcrypt.compare(password, user.password))) {
    res.status(422).json({ errors: ["Senha inválida!"] });
    return;
  }

  //then, return token and login user (if haves a profile image, load it)
  res.status(201).json({
    _id: user.id,
    profileImage: user.profileImage,
    token: createToken(user._id),
  });
};

//Get current user
const getCurrentUser = async (req, res) => {
  const user = req.user;

  res.status(200).json(user);
};

//Update User
const update = async (req, res) => {
  const { name, bio, phone, city } = req.body;

  let profileImage = null;

  if (req.file) {
    profileImage = req.file.filename;
  }

  const reqUser = req.user;

  const user = await User.findById(mongoose.Types.ObjectId(reqUser._id)).select(
    "-password"
  );

  if (name) {
    user.name = name;
  }

  if (profileImage) {
    user.profileImage = profileImage;
  }

  if (bio) {
    user.bio = bio;
  }

  if (phone) {
    user.phone = phone;
  }

  if (city) {
    user.city = city;
  }

  user.save();

  res.status(200).json(user);
};

module.exports = {
  register,
  login,
  getCurrentUser,
  update,
};
