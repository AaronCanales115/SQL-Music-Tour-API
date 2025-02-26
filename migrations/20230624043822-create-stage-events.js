'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stage_events', {
      stage_events_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'stages', key: 'stage_id' }
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'events', key: 'event_id' }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stage_events');
  }
};