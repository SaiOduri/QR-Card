const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
  _id: String,
  password: String,
  snapchatName: String,
  tumblrName: String,
});

mongoose.model('User', userSchema);