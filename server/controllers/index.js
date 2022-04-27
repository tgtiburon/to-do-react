// Constants
const router = require('express').Router();

const homeRoutes = require('./home-routes');
const taskRoutes = require('./task-routes');
const userRoutes = require('./user-routes');


// Direct the router to each route
router.use('/', homeRoutes);
router.use('/tasks', taskRoutes);
router.use('/users', userRoutes);


//Catch any passhtroughs
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;