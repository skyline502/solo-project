'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Businesses', [
     {
       ownerId: 1,
       name: 'Happy Lemon',
       address: '311 N Capitol Ave Ste C',
       city: 'San Jose',
       state: 'CA',
       zipCode: '95133',
       phone: '6692842115',
       businessImg: 'http://happylemonwest.com/wp-content/uploads/2020/09/cropped-HL-New-Logo-black-png.png',
       description: 'Happy Lemon has been providing tasty tea for over fifteen years.'
     },
     {
      ownerId: 3,
      name: 'Happy Lemon',
      address: '919 Story Rd',
      city: 'San Jose',
      state: 'CA',
      zipCode: '95122',
      phone: '6692842116',
      businessImg: 'http://happylemonwest.com/wp-content/uploads/2020/09/cropped-HL-New-Logo-black-png.png',
      description: 'Happy Lemon has been providing tasty tea for over fifteen years.'
    },  {
      ownerId: 1,
      name: 'Happy Lemon',
      address: '3005 Silver Creek Rd #112',
      city: 'San Jose',
      state: 'CA',
      zipCode: '95121',
      phone: '6692842117',
      businessImg: 'http://happylemonwest.com/wp-content/uploads/2020/09/cropped-HL-New-Logo-black-png.png',
      description: 'Happy Lemon has been providing tasty tea for over fifteen years.'
    },  {
      ownerId: 1,
      name: 'Happy Lemon',
      address: '567 Coleman Ave Suite 10',
      city: 'San Jose',
      state: 'CA',
      zipCode: '95110',
      phone: '6692842114',
      businessImg: 'http://happylemonwest.com/wp-content/uploads/2020/09/cropped-HL-New-Logo-black-png.png',
      description: 'Happy Lemon has been providing tasty tea for over fifteen years.'
    },  {
      ownerId: 3,
      name: 'Happy Lemon',
      address: '279 W Calaveras Blvd',
      city: 'Milpitas',
      state: 'CA',
      zipCode: '95035',
      phone: '6692842113',
      businessImg: 'http://happylemonwest.com/wp-content/uploads/2020/09/cropped-HL-New-Logo-black-png.png',
      description: 'Happy Lemon has been providing tasty tea for over fifteen years.'
    },  {
      ownerId: 2,
      name: 'Happy Lemon',
      address: '630 Blossom Hill Rd #30',
      city: 'San Jose',
      state: 'CA',
      zipCode: '95123',
      phone: '6692842112',
      businessImg: 'http://happylemonwest.com/wp-content/uploads/2020/09/cropped-HL-New-Logo-black-png.png',
      description: 'Happy Lemon has been providing tasty tea for over fifteen years.'
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Businesses', null, {});
  }
};
