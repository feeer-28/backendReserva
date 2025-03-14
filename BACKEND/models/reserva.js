'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reserva.init({
    fecha: DataTypes.STRING,
    lugar: DataTypes.STRING,
    nombrePersona: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reserva',
  });
  return reserva;
};