'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reservas.init({
    fecha: DataTypes.STRING,
    lugar: DataTypes.STRING,
    nombre_persona: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reservas',
  });
  return reservas;
};