const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.set('debug', true);
mongoose
  .connect(
    keys.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log(`Database connected`))
  .catch(err => console.log(`Database connection error: ${err}`));
