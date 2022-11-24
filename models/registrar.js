'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registrar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Registrar.belongsTo(models.Level, {foreignKey: 'idLevel'});
      Registrar.belongsTo(models.Program, {foreignKey: 'idProgram'});
    }
  }
  Registrar.init({
    fullName: DataTypes.STRING,
    birthPlace: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    motherName: DataTypes.STRING,
    nationality: DataTypes.STRING,
    nik: DataTypes.STRING,
    typeProgram: DataTypes.BOOLEAN,
    idLevel: DataTypes.INTEGER,
    idProgram: DataTypes.INTEGER,
    handphone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Registrar',
  });
  return Registrar;
};