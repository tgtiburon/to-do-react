
// Constants
const express = require('express');
const routes = require('./controllers');
const cors = require("cors");

const path = require('path');

// Hide credentials
require('dotenv').config();

console.log("DB_PW", process.env.DB_PW);

//Setup express
const app = express();
const PORT = process.env.PORT || 3001;

// Setup sessions/ and sessions-sequelize
//const session = require('express-session');
const sequelize = require('./config/connection');
//const sequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//     // TODO: Setup on Heroku as key pair
//     secret: process.env.SESSION_PW,
//     cookie: { httpOnly: true, maxAge: 60000 },
//     resave: false,
//     saveUninitialized: true,
//     store: new sequelizeStore({
//         db: sequelize
//     })
// };

// Startup the session store
//app.use(session(sess));



//Middleware for handling json and urls
// TODO: Test cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// test session
app.use((req,res, next) => {
    console.log(req.session);
    next();
}); 

// Setup to use routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, ()=> console.log(`Server is listening on ${PORT}`));
});

