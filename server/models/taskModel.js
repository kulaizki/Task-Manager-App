const { Sequelize, DataTypes } = require('sequelize');

DataTypes.DATE.prototype._stringify = function _stringify(date, options) {
  date = this._applyTimezone(date, options);
  return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};

module.exports = (sequelize, Datatypes) => {
  const Task = sequelize.define(
    'Task',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      dateStarted: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      isFinished: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      deadline: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      pendingTasks: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  return Task;
};
