'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'createdBy',
        as: 'user',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });
      this.belongsTo(models.User, {
        foreignKey: 'updatedBy',
        as: 'updatedByUser',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });
      // define association here
    }
  }
  News.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};