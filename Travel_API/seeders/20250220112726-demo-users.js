'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Users', [{
      name: 'Aniket',
      email:'aniket@example.com',
      password:'12345678',
      DOB: "2005-05-15",
      gender:"Male",
      role:"user",
      createdAt:new Date(),
      updatedAt:new Date(),
      
      },
      {
      name: 'Jane',
      email:'jane@example.com',
      password:'123456789',
      DOB: "2006-05-15",
      gender:"Female",
      role:"admin",
      createdAt:new Date(),
      updatedAt:new Date(),
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
