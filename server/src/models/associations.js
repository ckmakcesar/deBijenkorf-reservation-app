const applyAssociations = (sequelize) => {
  console.log('>>',sequelize.models)
  const { Reservation, Store, Status } = sequelize.models;

  Store.hasMany(Reservation);
  Reservation.belongsTo(Store);

  Status.hasMany(Reservation);
  Reservation.belongsTo(Status);
}

module.exports = { applyAssociations };