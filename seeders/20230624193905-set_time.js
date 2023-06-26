'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('set_times', [{
      event_id: 1,
      stage_id: 3,
      band_id: 3,
      start_time: '2023-06-22 20:00:00',
      end_time: '2023-06-22 23:00:00'
    },
    {
      event_id: 2,
      stage_id: 4,
      band_id: 2,
      start_time: '2023-06-22 20:00:00',
      end_time: '2023-06-22 23:00:00'
    },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('set_times', null, {})
  }
}
