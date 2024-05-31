const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');


const Language = sequelize.define('Language', {
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Language;
