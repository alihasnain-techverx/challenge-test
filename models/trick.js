'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trick extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Trick.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'customer'
      });
      Trick.belongsTo(models.Challenge, {
        foreignKey: 'challenge_id',
        as: 'challenge'
      })
      Trick.belongsTo(models.Media,{
        foreignKey:'media_id',
        as:"media"
      })
      Trick.hasOne(modles.Reward,{
        foreignKey:'trick_id',
        as:'reward'
      })
    }
  };
  Trick.init({
    challenge_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    trick_answer: DataTypes.STRING,
    media_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Trick',
    indexes: [{ unique: true, fields: ['challeng_id', 'user_id'] }]
  });
  return Trick;
};