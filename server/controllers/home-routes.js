const sequelize = require('../config/connection');
const { User, Task } = require('../models');
//const { User, Task} = require('../models');

const router = require('express').Router();


//  Login
router.get('/login', (req, res) => {
    // if they are logged in direct to homepage
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Signup
router.get('/signup', (req,res) => {
    if(req.session.loggedIn) {
        res.redirect('/');

    }
    res.render('signup');
});


// GET ALL USERS and Tasks  
// Here in case we want it later.
router.get('/', (req,res) => {
    User.findAll({
        attributes: [
            'id',
            'username',
            'email',   
        ],
        // include: [
        //     {
        //         model: Task,
        //         attributes: [
        //             'id',
        //             // 'title',
        //             // 'description',
        //             // 'due_date',
        //             // 'task_tag'
        //         ]
        //     }  
        // ]
    })
    .then(dbUserData => {
        const users = dbUserData.map( user => user.get({ plain : true }));
        console.log(users);
        res.json(users);
       
    })
    .catch(err => {
        //Server error
        console.log(err);
        res.status(500).json(err);
    });

});






module.exports = router;
