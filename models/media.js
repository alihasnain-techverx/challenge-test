'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Media.hasOne(models.Challenge, {
        foreignKey: 'media_id',
        as: 'challenge_media'
      })
      Media.hasOne(models.Trick, {
        foreignKey: 'media_id',
        as: 'trick_media'
      })
    }
  };
  Media.init({
    media_path: DataTypes.STRING,
    media_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Media',
  });
  return Media;
};