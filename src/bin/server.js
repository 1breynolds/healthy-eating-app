const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const mongoURI = 'mongodb+srv://reynoldsb11:smartmealsADMIN@cluster0.6vfcz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  userId: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
  height: String,
  weight: String,
});

const User = mongoose.model('User', userSchema);

app.post('/api/signup', async (req, res) => {
  const { username, password, firstName, lastName, height, weight } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }
  const userId = uuidv4(); // Generate a unique user ID
  const newUser = new User({ userId, username, password, firstName, lastName, height, weight });
  await newUser.save();
  res.status(201).json(newUser);
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }
  res.status(200).json(user);
});

app.put('/api/user/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age, height, weight } = req.body;
  const user = await User.findOneAndUpdate(
    { userId: id },
    { firstName, lastName, age, height, weight },
    { new: true }
  );
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json(user);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});