'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  meet_greet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    band_id: {
      type: Sequelize.INTEGER,
      references: { model: 'band', key: 'band_id' }
    },
    event_id: {
      type: Sequelize.INTEGER,
      references: { model: 'events', key: 'event_id' }
    },
    meet_start_date: {
      type: DataTypes.TIME
    },
    meet_end_time: {
      type: DataTypes.TIME
    }
  }, {
    sequelize,
    modelName: 'Meet_greet',
    tableName: 'meet_greet',
    timestamp: false
  });
  return meet_greet;
};