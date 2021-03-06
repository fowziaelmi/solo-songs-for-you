const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const spotifyRouter = require('./routes/spotify.router');
const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const tokenRouter = require('./routes/token.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/token', tokenRouter)
app.use('/playlist', tokenRouter)

// Serve static files
app.use(express.static('build'));


// Spotify api
app.use('/spotify', spotifyRouter)
// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
