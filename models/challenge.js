'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Challenge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Challenge.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'creater'
      });
      Challenge.belongsTo(models.Media, {
        foreignKey: 'media_id',
        as: 'media'
      });
      Challenge.hasMany(models.Trick, {
        foreignKey: 'challenge_id',
        as: 'tricks'
      })
    }
  };
  Challenge.init({
    challenge_name: DataTypes.STRING,
    challenge_question: DataTypes.STRING,
    challenge_status: DataTypes.BOOLEAN,
    challenge_expire: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    media_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Challenge',
  });
  return Challenge;
};