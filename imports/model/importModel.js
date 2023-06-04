const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sample_db', 'sample_user', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define your model using Sequelize
exports.Student = sequelize.define('student', {
  student_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  student_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  tableName: 'student_table',
});