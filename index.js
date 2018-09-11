const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

const app = express();
const PORT = process.env.PORT || 5000;

const errorHandlers = require('./handlers/error');
const authRoutes = require('./routes/auth');

// DB CONFIG
require('./services/mongoose');
require('./models/User');

// AUTH CONFIG
require('./services/passport');
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
app.get('/', (req, res, next) => {
  res.send({ hello: 'world' });
});
app.use('/auth', authRoutes);
app.use(errorHandlers.notFoundHandler);

// ERROR HANDLER
app.use(errorHandlers.internalServerHandler);

app.listen(PORT, () =>
  console.log(`Serving coding time tracker app on port ${PORT}`)
);
