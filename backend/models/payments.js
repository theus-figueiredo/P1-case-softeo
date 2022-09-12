'use strict';

module.exports = (sequelize, DataTypes) => {
  const Payments = sequelize.define('Payments', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    totalValue: DataTypes.DECIMAL,
    pacientId: DataTypes.INTEGER,
    paymentType: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  Payments.associate = function(models) {
    Payments.belongsTo(models.Pacients,
      { foreignKey: 'pacientId', as: 'pacient' });
  };

  return Payments;
}
