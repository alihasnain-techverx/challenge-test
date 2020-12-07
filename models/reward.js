'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reward.belongsTo(models.User,{
        foreignKey:'admin_id',
        as:'admin'
      });
      Reward.belongsTo(models.Trick,{
        foreignKey:'trick_id',
        as:'trick'
      })
    }
  };
  Reward.init({
    trick_id: DataTypes.INTEGER,
    challenge_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    admin_id: DataTypes.INTEGER,
    win: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Reward',
  });
  return Reward;
};