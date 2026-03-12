const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user._id);

    res.cookie("token", token);

    res.status(201).json({
      message: "User registered",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(400).json({
        message: "Invalid email"
      });

    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid password"
      });

    }

    const token = generateToken(user._id);

    res.cookie("token", token);

    res.json({
      message: "Login successful"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getProfile = async (req, res) => {
  res.json({
    message: "Profile fetched",
    user: req.user,
  });
};
