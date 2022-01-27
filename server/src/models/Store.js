const { DataTypes } = require('sequelize');

const { sequelize } = require('.');
const Reservation = require('./Reservation');

const Store = sequelize.define('status', {
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

// Associations
Store.hasMany(Reservation, {
  sourceKey: 'id',
  foreignKey: 'storeId',
  as: 'reservations',
})
Reservation.belongTo(Store, {
  foreignKey: 'storeId',
  as: 'store',
})

module.exports = Store;
