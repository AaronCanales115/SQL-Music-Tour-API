'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  set_time.init({
    set_time_id: {
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
    stage_id: {
      type: Sequelize.INTEGER,
      references: { model: 'stages', key: 'stage_id' }
    },
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Set_time',
    tableName: 'set_time',
    timestamps: false
  });
  return set_time;
};