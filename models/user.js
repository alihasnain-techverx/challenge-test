'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey: 'role_id',
        as: 'role'
      });
      User.hasMany(models.Challenge, {
        foreignKey: 'created_by',
        as: 'challenge'
      })
      User.hasMany(models.Trick, {
        foreignKey: 'user_id',
        as: 'attempted_trick'
      })
      User.hasMany(models.Reward,{
        foreignKey:'admin_id',
        as:"reward"
      })
    }
  };
  User.init({
    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};