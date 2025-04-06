'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.AdminPermissions, {
        foreignKey: 'userId',
        as: 'permissions',
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    role: DataTypes.ENUM('SUPERADMIN', 'ADMIN'),
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        contains: '@',
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};