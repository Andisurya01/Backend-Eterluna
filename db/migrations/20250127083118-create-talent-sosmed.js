'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TalentSosmeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      talentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Talents',
          key: 'id',
        },
        onDelete: 'CASCADE'
      },
      sosmedId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sosmeds',
          key: 'id',
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TalentSosmeds');
  }
};