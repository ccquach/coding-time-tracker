const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
});

mongoose.model('User', userSchema);
