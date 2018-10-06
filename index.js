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
const { notFoundHandler, internalServerHandler } = require('./handlers/error');
const requireLogin = require('./middleware/requireLogin');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const recordsRoutes = require('./routes/records');

app.use('/api/auth', authRoutes);
app.use('/api/user', requireLogin, userRoutes);
app.use('/api/records', requireLogin, recordsRoutes);
app.use(notFoundHandler);

// ERROR HANDLER
app.use(internalServerHandler);

// PRODUCTION CONFIG
if (process.env.NODE_ENV === 'production') {
  // Serve up production assets (js/css files)
  app.use(express.static('client/build'));

  // Serve up index.html if route unrecognized
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () =>
  console.log(`Serving coding time tracker app on port ${PORT}`)
);
