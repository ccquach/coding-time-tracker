const mongoose = require('mongoose');
const { Schema } = mongoose;

const recordSchema = new Schema({
  hoursCoded: {
    type: Number,
    min: 0,
    max: 24,
    required: true,
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

mongoose.model('Record', recordSchema);
