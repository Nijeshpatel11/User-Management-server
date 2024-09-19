const User = require("../models/User");

// @desc Add a new user
// @route POST /api/users
// @access Public
const addUser = async (req, res) => {
  const { name, email, mobile } = req.body;

  try {
    const user = new User({
      name,
      email,
      mobile,
    });
  
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: 'Error adding user', error });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching users', error });
  }
};

const getUserById = async(req, res) => {
    try {

      const name = req.params.name
      const userGet = await User.findOne(name)
      res.send(userGet)
    } catch (e) {
      res.status(400).json({ message: 'Error fetching users', error });
    }
}

const deleteUser = async(req, res) => {
  try {

    const _id = req.params.id
    const userDel = await User.findOneAndDelete(_id)
    res.send(userDel)
  } catch (e) {
    res.status(400).json({ message: 'Error fetching users', error });
  }
}


const updateUser = async (req, res) => {
  const { id } = req.params; // Extract the ID from the URL parameters
  const { name, email, mobile } = req.body; // Extract the updated fields from the request body

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, mobile },
      { new: true, runValidators: true } // Return the updated document and validate changes
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: 'Error updating user', error });
  }
};


module.exports = {
  addUser,
  getUser,
  getUserById,
  deleteUser,
  updateUser
};
