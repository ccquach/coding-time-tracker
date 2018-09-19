const mongoose = require('mongoose');
const { Schema } = mongoose;

const journalSchema = new Schema({
  entries: [
    {
      type: String,
      trim: true,
      maxlength: 50,
      required: true,
    },
  ],
  date: {
    type: Date,
    required: true,
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = journalSchema;
