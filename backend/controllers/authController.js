// Import required modules
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const seedValue = 'myseed';

// Create a hash of the seed value
const seedHash = crypto.createHash('sha256').update(seedValue).digest();

// Create a pseudo-random number generator with the seed hash
const prng = crypto.createHash('sha256').update(seedHash);

// Generate the random bytes with the PRNG
const secretKey = prng.digest('hex');

// Register a new user
const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user with the same username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username is already taken.' });
    }

    // Generate a salt for password hashing
    const salt = crypto.randomBytes(16).toString('hex');

    // Hash the password
    const hashedPassword = crypto
      .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
      .toString('hex');

    // Create a new user
    const newUser = new User({
      username,
      password: {
        salt,
        hash: hashedPassword,
      },
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error in registerUser:', error);
    res.status(500).json({ message: 'An error occurred while registering the user.' });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Validate the password
    const hashedPassword = crypto
      .pbkdf2Sync(password, user.password.salt, 10000, 64, 'sha512')
      .toString('hex');
    if (hashedPassword !== user.password.hash) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '12h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error in loginUser:', error);
    res.status(500).json({ message: 'An error occurred while logging in.' });
  }
};

// Logout user
const logoutUser = (req, res) => {
  try {
    req.session.destroy(); // Destroy the session and remove associated data

    res.status(200).json({ message: 'User logged out successfully.' });
  } catch (error) {
    console.error('Error in logoutUser:', error);
    res.status(500).json({ message: 'An error occurred while logging out.' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
