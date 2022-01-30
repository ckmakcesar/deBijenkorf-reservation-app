const { DataTypes } = require('sequelize');

const { sequelize } = require('.');

const Status = sequelize.define('status', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  code: { type: DataTypes.STRING, allowNull: false, unique: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
}, {
  freezeTableName: true,
  underscored: true,
  version: false,
  createdAt: false,
  updatedAt: false,
});

module.exports = Status;
