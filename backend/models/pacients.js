'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pacients = sequelize.define('Pacients', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  return Pacients;
};
