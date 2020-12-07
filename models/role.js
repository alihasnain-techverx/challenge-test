'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.hasOne(models.User,{
        foreignKey:'role_id',
        as:'user'
      })
    }
  };
  Role.init({
    role_name: DataTypes.STRING,
    role_permissions: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};