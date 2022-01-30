const { DataTypes } = require('sequelize');

const { sequelize } = require('.');

const Store = sequelize.define('store', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  address: { type: DataTypes.STRING, allowNull: false },
}, {
  freezeTableName: true,
  underscored: true,
  version: false,
  createdAt: false,
  updatedAt: false,
});

module.exports = Store;
