'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Registrars', [
      {
        fullName: 'Lerian Febriana',
        birthPlace: 'Tasikmalaya',
        birthday: '1998-02-26',
        motherName: 'Ummu Lerian',
        nationality: 'WNI',
        nik: '3278012602990005',
        typeProgram: '0',
        idLevel: '2',
        idProgram: '3',
        handphone: '081286501015',
        email: 'kanglerian@gmail.com',
        password: 'univtertutup_pw',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Registrars', null, {});
  }
};
