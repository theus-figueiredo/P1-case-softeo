'use strict';

module.exports = (sequelize, DataTypes) => {
  const PaymentDetails = sequelize.define('PaymentDetails', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    installments: DataTypes.STRING,
    paymentDate: DataTypes.DATE,
    paymentValue: DataTypes.DECIMAL,
    paymentId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });
  PaymentDetails.associate = function(models) {
    PaymentDetails.belongsTo(models.Payments, { foreignKey: 'paymentId', as: 'payment' });
  };

  return PaymentDetails;
};
