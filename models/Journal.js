const mongoose = require('mongoose');
const { Schema } = mongoose;

const journalSchema = new Schema({
  entry: {
    type: String,
    trim: true,
    maxlength: 50,
    required: true,
  },
});

module.exports = journalSchema;
