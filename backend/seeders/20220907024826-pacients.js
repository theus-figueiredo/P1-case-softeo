'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pacients', 
    [{
      id: 1,
      name: 'Matheus Figueiredo',
      email: 'matheusbf.sw@gmail.com',
      phoneNumber: '21998634210'
    },
    {
    id: 2,
    name: 'shazam',
    email: 'raio@shazam.com',
    phoneNumber: '55328671'
    }
  ],
  { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pacients', null, {});
  }
};
