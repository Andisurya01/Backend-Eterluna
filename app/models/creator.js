'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Creator extends Model {
    static associate(models) {
      Creator.belongsTo(models.ModelTalent, {
        foreignKey: 'modelId',
        as: 'modelTalent',
        onDelete: 'CASCADE'
      });
    }
  }
  Creator.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sosmed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('Rigger', 'Illustrator'),
      allowNull: false
    },
    modelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ModelTalent',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Creator',
  });
  return Creator;
};