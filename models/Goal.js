const mongoose = require('mongoose');
const { Schema } = mongoose;

const goalSchema = new Schema({
  goals: [
    {
      type: String,
      trim: true,
      maxlength: 50,
      required: true,
    },
  ],
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    required: true,
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = goalSchema;
