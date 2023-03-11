const Task = require('../models/taskModel');
const { QueryTypes, Sequelize } = require('sequelize');
const instance = require('../models');

/*THE FOLLOWING ARE THE CODE TO EXECUTE DB QUERIES ON THE DIFFERENT USER CREATED TASKS*/

exports.createTask = async (req, res) => {
  console.log('Creating Task');
  const pendingTaskNum = await instance.sequelize.query(
    'SELECT COUNT(id) FROM tasks;',
    {
      type: QueryTypes.SELECT,
    }
  );

  let ret = await instance.Task.create({
    name: req.body.name,
    dateStarted: req.body.dateStarted,
    isFinished: req.body.isFinished,
    deadline: req.body.deadline,
    pendingTasks: Object.values(pendingTaskNum[0])[0],
  });
  console.log(req.body);

  res.status(201).send(ret);
};

exports.displayTasks = async (req, res) => {
  console.log('Displaying All Tasks');

  let ret = await instance.Task.findAll();
  console.log(ret);
  res.status(201).send(ret);
};

exports.displayTask = async (req, res) => {
  console.log('Displaying Task');

  let ret = await instance.Task.findOne({
    where: { id: req.params.id },
  });

  console.log(ret);
  res.status(201).send(ret);
};

exports.deleteTask = async (req, res) => {
  console.log('Deleting Tasks');

  let row = await instance.Task.findOne({
    where: { id: req.params.id },
  });

  let ret = await instance.Task.destroy({
    where: { id: req.params.id },
    truncate: true,
  });

  console.log(ret);
  res.status(200).json({
    status: 'success',
    data: null,
  });
};

exports.deleteAllTasks = async (req, res) => {
  console.log('Deleting All Tasks');

  let ret = await instance.Task.destroy({
    where: {},
    truncate: true,
  });

  console.log(ret);
  res.status(200).json({
    status: 'success',
    data: null,
  });
};
