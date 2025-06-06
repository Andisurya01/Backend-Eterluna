'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sosmed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sosmed.belongsToMany(models.Talent, {
        through: models.TalentSosmed
      });
      Sosmed.belongsToMany(models.Staff, {
        through: models.StaffSosmed
      });
    }
  }
  Sosmed.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Sosmed',
  });
  return Sosmed;
};