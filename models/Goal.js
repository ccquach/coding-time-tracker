const mongoose = require('mongoose');
const { Schema } = mongoose;

const goalSchema = new Schema({
  text: {
    type: String,
    trim: true,
    maxlength: 50,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = goalSchema;
