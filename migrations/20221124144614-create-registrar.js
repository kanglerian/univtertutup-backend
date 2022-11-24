'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Registrars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      birthPlace: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATEONLY
      },
      motherName: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      typeProgram: {
        type: Sequelize.BOOLEAN
      },
      idLevel: {
        type: Sequelize.INTEGER
      },
      idProgram: {
        type: Sequelize.INTEGER
      },
      handphone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Registrars');
  }
};