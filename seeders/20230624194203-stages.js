'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stages', [{
      stage_id: 3,
      stage_name: 'Indiana'
    },
    {
      stage_id: 4,
      stage_name: 'South'
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stages', null, {})
  }
};
