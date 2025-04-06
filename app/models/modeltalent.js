'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModelTalent extends Model {
    static associate(models) {
      ModelTalent.belongsTo(models.Talent, {
        foreignKey: 'talentId',
        as: 'talent',
        onDelete: 'CASCADE'
      });
      ModelTalent.hasMany(models.Creator, {
        foreignKey: 'modelId',
        as: 'creators',
        onDelete: 'CASCADE'
      });
    }
  }
  ModelTalent.init({
    modelName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    background: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullBody: {
      type: DataTypes.STRING,
      allowNull: false
    },
    talentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Talents',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ModelTalent',
  });
  return ModelTalent;
};