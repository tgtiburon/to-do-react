
const sequelize = require('../config/connection');
const { User, Task } = require('../models');
//const { User, Task} = require('../models');

const router = require('express').Router();



//  GET   /tasks/:id  ---> Get tasks by userid


router.get('/', (req, res) => {

    Task.findAll({
        //Query config
        attributes: [
          'id', 
          'title',
          'description',
          'due_date',
          'user_id',
          'task_tag'
        ],
        // We could use 
      //  order: [['created_at', 'DESC']],
        // include: [
  
        //     {
        //       model: Comment,
        //       attributes: [
        //         'id', 
        //         'comment_body',
        //         'post_id',
        //         'user_id',
        //         'created_at'
        //       ],
        //       // Attach the username to the comment
        //       include: {
        //         model:User,
        //         attributes: ['username']
        //       }

        //     },
        //     {   // User who posted
        //         model: User, 
        //         attributes: ['username']
        //     }
        // ]
    })
    .then(dbTaskData => res.json(dbTaskData))
    .catch(err => {
        // Server error                       
        console.log(err);
        res.status(500).json(err);
    });
});



// POST /tasks  ---> Create a new task





// PUT /tasks/:id  ---> Update a task by id







// DELETE /task/:id  ---> Delete a task by id







module.exports = router;