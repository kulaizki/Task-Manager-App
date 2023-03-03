const Task = require('../models/taskModel');
const Sequelize = require('sequelize');
const instance = require('../models');

exports.createTask = async (req, res) => {
  console.log('RECEIVED DATA');
  // const tasksNum = await Sequelize.query('SELECT COUNT(id) FROM tasks;');
  // console.log(tasksNum);

  let ret = await instance.Task.create({
    name: req.body.name,
    dateStarted: req.body.dateStarted,
    isFinished: req.body.isFinished,
    deadline: req.body.deadline,
    pendingTasks: 1,
  });
  console.log(req.body);

  res.status(201).send(ret);
};
