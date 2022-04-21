// Constants
const router = require('express').Router();

const homeRoutes = require('./home-routes');


// Direct the router to each route
router.use('/', homeRoutes);


//Catch any passhtroughs
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;