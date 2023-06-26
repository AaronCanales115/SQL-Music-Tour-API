'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('meet_greets', [{
      event_id: 1,
      band_id: 2,
      meet_start_date: '2023-06-22 20:00:00',
      meet_end_time: '2023-06-22 23:00:00'
    },
    {
      event_id: 2,
      band_id: 3,
      meet_start_date: '2023-06-22 20:00:00',
      meet_end_time: '2023-06-22 23:00:00'
    },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('meet_greets', null, {})
  }
}
