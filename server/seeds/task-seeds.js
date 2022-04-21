const sequelize = require('../config/connection');
const { Task } = require('../models');


const taskData = [
    {
        title: "Ringo's first task",
        description: "Ringo's first task description",
        due_date: '2022-7-4',
        user_id: 1,//Ringo
        task_tag: ["Travel", "Work"]  
    },
    {
        title: "Ringo's second task",
        description: "Ringo's second task description",
        due_date: '2022-7-5',
        user_id: 1,//Ringo
        task_tag: ["Work"]  
    },
    {
        title: "Ringo's third task",
        description: "Ringo's third task description",
        due_date: '2022-8-5',
        user_id: 1,//Ringo
        task_tag: ["Home", "Work"]  
    },
    {
        title: "Paul's first task",
        description: "Paul's first task description",
        due_date: '2022-8-4',
        user_id: 2,//Paul
        task_tag: ["Travel"] 
    },
    {
        title: "Paul's second task",
        description: "Paul's second task description",
        due_date: '2022-9-5',
        user_id: 2,//Paul
        task_tag: ["Work", "Travel"]  
    },
    {
        title: "Paul's third task",
        description: "Paul's third task description",
        due_date: '2022-8-30',
        user_id: 2,//Paul
        task_tag: ["Home"]  
    },
    {
        title: "George's first task",
        description: "George's first task description",
        due_date: '2022-10-4',
        user_id: 3,//George
        task_tag: ["Travel", "Fun"]  
    },
    {
        title: "George's second task",
        description: "George's second task description",
        due_date: '2022-9-11',
        user_id: 3,//George
        task_tag: ["Work", "Home,"]  
    },
    {
        title: "George's third task",
        description: "George's third task description",
        due_date: '2022-8-31',
        user_id: 3,//George
        task_tag: ["Home", "Fun"]  
    },
    {
        title: "John's first task",
        description: "John's first task description",
        due_date: '2022-11-7',
        user_id: 4,//John
        task_tag: ["Travel", "Fun"]  
    },
    {
        title: "John's second task",
        description: "John's second task description",
        due_date: '2022-12-11',
        user_id: 4,//John
        task_tag: ["Work"]  
    },
    {
        title: "John's third task",
        description: "John's third task description",
        due_date: '2023-3-17',
        user_id: 4,//John
        task_tag: ["Home"]  
    }
   

];
const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;