const { Sequelize, DataTypes } = require('sequelize');
const moment = require('moment');

const { sequelize } = require('.');

const Reservation = sequelize.define('reservation', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  storeId: { type: DataTypes.INTEGER, allowNull: false },
  statusId: { type: DataTypes.INTEGER, allowNull: false },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    // get() {
    //   // console.log('>>>>>',Object.keys(moment(this.getDataValue('date'))
    //   // .utcOffset(this.getDataValue('offset'))))
    //   return moment(this.getDataValue('date'))
    //     .utcOffset(this.getDataValue('offset'));
    // },
  },
  createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: Sequelize.NOW },
}, {
  freezeTableName: true,
  underscored: true,
  version: false,
  updatedAt: false,
});

module.exports = Reservation;
