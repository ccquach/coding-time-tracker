const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

const app = express();
const PORT = process.env.PORT || 5000;

// DB CONFIG
require('./services/mongoose');
require('./models/User');
require('./models/Record');

// AUTH CONFIG
require('./services/passport');

// MIDDLEWARE
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
const errorHandlers = require('./handlers/error');
const authRoutes = require('./routes/auth');
const recordsRoutes = require('./routes/records');

app.use('/api/auth', authRoutes);
app.use('/api/records', recordsRoutes);
app.use(errorHandlers.notFoundHandler);

// ERROR HANDLER
app.use(errorHandlers.internalServerHandler);

app.listen(PORT, () =>
  console.log(`Serving coding time tracker app on port ${PORT}`)
);
