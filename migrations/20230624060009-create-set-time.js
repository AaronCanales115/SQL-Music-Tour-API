'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      band_id: {
        type: Sequelize.INTEGER,
        references: { model: 'band', key: 'band_id' }
      },
      event_id: {
        type: Sequelize.INTEGER,
        references: { model: 'events', key: 'event_id' }
      },
      stage_id: {
        type: Sequelize.INTEGER,
        references: { model: 'stages', key: 'stage_id' }
      },
      start_time: {
        type: Sequelize.TIME
      },
      end_time: {
        type: Sequelize.TIME
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_times');
  }
};