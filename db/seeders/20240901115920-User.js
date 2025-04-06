'use strict';
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'example@example.com',
        role: 'SUPERADMIN',
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bapack Hadezz',
        email: 'radensatrionotonegoro@gmail.com',
        role: 'SUPERADMIN',
        password: bcrypt.hashSync('BapackHadezz123', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'maria',
        email: 'keitimumaria@gmail.com',
        role: 'SUPERADMIN',
        password: bcrypt.hashSync('Admin12345*', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      // {
      //   name
      // }
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
