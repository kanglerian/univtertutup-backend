'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Programs', [
      {
        idLevel: 1,
        name: 'Manajemen Informatika',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idLevel: 1,
        name: 'Administrasi Bisnis',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idLevel: 2,
        name: 'Sistem Informasi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idLevel: 2,
        name: 'Teknologi Pangan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idLevel: 3,
        name: 'Ilmu Kedokteran',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Programs', null, {});
  }
};
