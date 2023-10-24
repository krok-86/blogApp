'use strict';
const {
  Model
} = require('sequelize');
const post = require('./post');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.role, {
        foreignKey: 'roleValue',
      });
      User.hasMany(models.post, {
        foreignKey: 'owner',
        onDelete: 'CASCADE',
      });
      User.hasMany (models.comment, {
        as: 'aythor',
        foregnKey: 'userID',
        
      });
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};