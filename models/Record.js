const mongoose = require('mongoose');
const { Schema } = mongoose;

const JournalSchema = require('./Journal');
const GoalSchema = require('./Goal');

const recordSchema = new Schema({
  years: [
    {
      year: {
        type: String,
        trim: true,
        minlength: 4,
        maxlength: 4,
        required: true,
      },
      months: [
        {
          month: {
            type: String,
            trim: true,
            minlength: 2,
            maxlength: 2,
            required: true,
          },
          weeks: [
            {
              weekIndex: {
                type: Number,
                required: true,
              },
              days: [
                {
                  day: {
                    type: String,
                    trim: true,
                    minlength: 2,
                    maxlength: 2,
                    required: true,
                  },
                  hoursCoded: {
                    type: Number,
                    min: 0,
                    max: 24,
                  },
                  journals: [JournalSchema],
                },
              ],
            },
          ],
          goals: [GoalSchema],
        },
      ],
    },
  ],
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

recordSchema.index(
  { year: 1, month: 1, weekIndex: 1, day: 1 },
  { unique: true }
);

mongoose.model('Record', recordSchema);
