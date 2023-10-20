const userModel = require("../models/userModel");
const user = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//get all users
const getAllUsers = async (req, res) => {
  const users = await user.find({}).sort({ createdAt: -1 }); // get all users. use user.find({Title: "user1"}) to get a specific user
  res.status(200).json(users);
};

// get single user
const getSingleUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User does not exist" });
  }

  const singleUser = await user.findById(id);

  if (!singleUser) {
    return res.status(404).json({ error: "User does not exist" });
  }
  res.status(200).json(singleUser);
};

const createUser = async (req, res) => {
  const { firstname, lastname, address, email, password, cv, flag } = req.body;

  try {
    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Cet e-mail est déjà utilisé." });
    }

    // Si l'utilisateur n'existe pas, hachez le mot de passe et insérez-le dans la base de données
    const hashedPassword = await bcrypt.hash(password, 10); // salt = 10

    const newUser = await user.create({
      firstname,
      lastname,
      address,
      email,
      password: hashedPassword,
      cv,
      flag,
    });

    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User does not exist" });
  }

  // Assuming you have the user's new password in req.body.password
  const { password, ...rest } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await userModel.findOneAndUpdate(
      { _id: id },
      {
        password: hashedPassword,
        ...rest,
      },
      { new: true } // This option returns the updated user
    );

    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// delete a User
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User does not exist" });
  }

  const user = await userModel.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "User does not exist" });
  }

  res.status(200).json({ message: "User deleted successfully" });
};
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "L'utilisateur n'existe pas." });
    }

    if (await bcrypt.compare(password, user.password)) {
      // Mot de passe correct, l'utilisateur est authentifié
      const userAuth = {
        id: user.id,
        email: user.email,
        password: user.password,
      };

      const secretKey = "20"; //
      const token = jwt.sign(userAuth, secretKey, { expiresIn: "2h" });
      const userId = user.id;
      return res
        .status(200)
        .json({ success: true, message: "Connexion réussie", token, userId });
    } else {
      // Mot de passe incorrect
      return res
        .status(401)
        .json({ success: false, message: "Mot de passe incorrect." });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Une erreur s'est produite lors de la connexion.",
      });
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  login,
};
