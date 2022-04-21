
// Constants
const express = require('express');
const routes = require('./controllers');

const path = require('path');

// Hide credentials
require('dotenv').config();

//Setup express
const app = express();
const PORT = process.env.PORT || 3001;

// Setup sessions/ and sessions-sequelize
const session = require('express-session');
const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    // TODO: Setup on Heroku as key pair
    secret: process.env.SESSION_PW,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequelize
    })
};

// Startup the session store
app.use(session(sess));

//Middleware for handling json and urls
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup to use routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, ()=> console.log(`Server is listening on ${PORT}`));
});

