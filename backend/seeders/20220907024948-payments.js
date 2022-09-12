'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Payments',
    [
      {
        id: 1,
        totalValue: 1000.00,
        pacientId: 1
      },
      {
        id: 2,
        totalValue: 300.00,
        pacientId: 2
      }
    ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Payments', null, {});
  }
};
