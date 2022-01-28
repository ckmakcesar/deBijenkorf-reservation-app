const { DataTypes } = require('sequelize');

const { sequelize } = require('.');
const Reservation = require('./Reservation');

const Status = sequelize.define('status', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  code: { type: DataTypes.STRING, allowNull: false, unique: true },
}, {
  freezeTableName: true,
  underscored: true,
  version: false,
  createdAt: false,
  updatedAt: false,
});

// Associations
Status.hasMany(Reservation, {
  sourceKey: 'id',
  foreignKey: 'storeId',
  as: 'reservations',
})
Reservation.belongTo(Status, {
  foreignKey: 'storeId',
  as: 'store',
})

module.exports = Status;
