'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdminPermissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AdminPermissions.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  AdminPermissions.init({
    menuName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AdminPermissions',
  });
  return AdminPermissions;
};