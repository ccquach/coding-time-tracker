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
  dailyGoal: {
    type: Number,
    min: 0,
    max: 24,
    default: 0,
  },
});

mongoose.model('User', userSchema);
