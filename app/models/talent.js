'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Talent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Talent.belongsTo(models.Gen, {
        foreignKey: 'genId',
        as: 'gen'
      });

      // define association here
    }
  }
  Talent.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull : false
    },
    gender: {
      type: DataTypes.ENUM('Woman', 'Man', 'Unknown'),
      allowNull: false,
      defaultValue: 'Unknown'
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fanName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bgColor: {
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
    status: {
      type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
      defaultValue: 'INACTIVE',
      allowNull: false
    },
    debut: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    // genId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // }
  }, {
    sequelize,
    modelName: 'Talent',
  });
  return Talent;
};