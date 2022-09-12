'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PaymentDetails',
    [
      {
        id: 1,
        paymentId: 1,
        paymentType: 'a vista',
        paymentDate: '05/09/2022',
        paymentValue: 1000.00
      },
      {
        id: 2,
        paymentId: 2,
        paymentType: 'a vista',
        paymentDate: '05/09/2022',
        paymentValue: 300.00
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PaymentDetails', null, {});
  }
};
