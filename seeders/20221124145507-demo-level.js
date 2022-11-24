'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Levels', [
      {
        name: 'Diploma Tiga (D3)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Strata Satu (S1)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Magister (S2)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Levels', null, {});
  }
};
